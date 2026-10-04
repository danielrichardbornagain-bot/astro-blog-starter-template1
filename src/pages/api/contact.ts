// Contact form endpoint. Validates the submission and stores it in the
// CONTACT_MESSAGES KV namespace (Cloudflare dashboard → Storage & Databases → KV),
// then emails an alert via Cloudflare Email Routing (see src/lib/alert-email.ts).
import type { APIRoute } from 'astro';
import { sendAlert, type AlertEnv, type ContactMessage } from '../../lib/alert-email';

export const prerender = false;

const TOPICS = ['home', 'business', 'support', 'hosting', 'security', 'microsoft', 'shop', 'other'];
const LIMITS = { name: 100, email: 200, company: 120, message: 4000 };

type Env = AlertEnv & { CONTACT_MESSAGES?: KVNamespace };

function clean(v: FormDataEntryValue | null, max: number) {
	return String(v ?? '').replace(/\u0000/g, '').trim().slice(0, max);
}

export const POST: APIRoute = async ({ request, locals }) => {
	const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
	const reply = (status: number, body: { ok: boolean; error?: string }) =>
		wantsJson
			? new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } })
			: Response.redirect(new URL(body.ok ? '/contact?sent=1' : '/contact?error=1', request.url), 303);

	let form: FormData;
	try {
		form = await request.formData();
	} catch {
		return reply(400, { ok: false, error: 'Invalid form submission.' });
	}

	// Honeypot: real people never fill this hidden field.
	if (clean(form.get('website'), 200)) return reply(200, { ok: true });

	const name = clean(form.get('name'), LIMITS.name).replace(/\s+/g, ' ');
	const email = clean(form.get('email'), LIMITS.email);
	const company = clean(form.get('company'), LIMITS.company).replace(/\s+/g, ' ');
	const topic = clean(form.get('topic'), 20);
	const message = clean(form.get('message'), LIMITS.message);

	if (!name || !message) return reply(400, { ok: false, error: 'Please add your name and a message.' });
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return reply(400, { ok: false, error: 'Please enter a valid email address.' });
	if (!TOPICS.includes(topic)) return reply(400, { ok: false, error: 'Please choose a topic.' });

	const env = (locals as { runtime?: { env?: Env } }).runtime?.env;
	const kv = env?.CONTACT_MESSAGES;
	if (!kv) return reply(503, { ok: false, error: 'The contact form is temporarily unavailable. Please try again later.' });

	// Simple rate limit: 5 messages per IP per hour.
	const ip = request.headers.get('cf-connecting-ip') ?? 'unknown';
	const rateKey = `rate:${ip}`;
	const count = Number((await kv.get(rateKey)) ?? 0);
	if (count >= 5) return reply(429, { ok: false, error: 'Too many messages. Please try again in an hour.' });
	await kv.put(rateKey, String(count + 1), { expirationTtl: 3600 });

	const receivedAt = new Date().toISOString();
	const key = `msg:${receivedAt}:${crypto.randomUUID()}`;
	const record: ContactMessage = { name, email, company, topic, message, receivedAt, country: request.headers.get('cf-ipcountry') ?? '' };
	await kv.put(key, JSON.stringify(record), { metadata: { name, email, topic, receivedAt } });

	// Email alert (best effort — the message is already safely stored).
	const alert = await sendAlert(env, record, key);
	if (alert !== 'sent') console.warn(`Contact alert ${alert} for ${key}`);

	return reply(200, { ok: true });
};
