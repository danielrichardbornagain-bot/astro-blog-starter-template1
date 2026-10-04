// Builds and sends the "new contact message" alert through Cloudflare Email Routing
// (the `ALERT_EMAIL` send_email binding). Recipient comes from the ALERT_TO secret so
// no personal address is stored in this public repo.

export type ContactMessage = {
	name: string;
	email: string;
	company: string;
	topic: string;
	message: string;
	receivedAt: string;
	country: string;
};

export type AlertEnv = {
	ALERT_EMAIL?: { send(message: unknown): Promise<void> };
	ALERT_TO?: string;
	ALERT_FROM?: string;
};

// Header values must never contain line breaks (header injection).
const oneLine = (v: string) => v.replace(/[\r\n]+/g, ' ').trim();

// RFC 2047 encoded-word so names with accents/emoji survive in headers.
const encodeHeader = (v: string) =>
	/^[\x20-\x7e]*$/.test(v) ? v : `=?UTF-8?B?${btoa(String.fromCharCode(...new TextEncoder().encode(v)))}?=`;

// Base64 body, wrapped at 76 chars as MIME requires.
const b64Body = (v: string) =>
	(btoa(String.fromCharCode(...new TextEncoder().encode(v))).match(/.{1,76}/g) ?? []).join('\r\n');

// Display names go in an encoded-word unless they are plain letters/digits/spaces,
// so characters like : @ < > " can never break the address that follows.
const displayName = (v: string) =>
	/^[A-Za-z0-9 .'-]*$/.test(v) ? `"${v}"` : `=?UTF-8?B?${btoa(String.fromCharCode(...new TextEncoder().encode(v)))}?=`;

export function buildAlert(msg: ContactMessage, from: string, to: string, kvKey: string): string {
	const domain = from.split('@')[1] ?? 'custompcrepublic.com';
	const subject = encodeHeader(oneLine(`New contact message: ${msg.name} (${msg.topic})`));
	const body = [
		'New message from the contact form on blog.custompcrepublic.com',
		'',
		`Name:     ${msg.name}`,
		`Email:    ${msg.email}`,
		`Company:  ${msg.company || '-'}`,
		`Topic:    ${msg.topic}`,
		`Country:  ${msg.country || '-'}`,
		`Received: ${msg.receivedAt}`,
		'',
		'Message:',
		msg.message,
		'',
		'---',
		'Reply to this email to answer the sender directly.',
		`Stored in KV (cpr-blog-contact) as: ${kvKey}`,
	].join('\n');

	return [
		`From: "Custom PC Republic website" <${oneLine(from)}>`,
		`To: ${oneLine(to)}`,
		`Reply-To: ${displayName(oneLine(msg.name))} <${oneLine(msg.email)}>`,
		`Subject: ${subject}`,
		`Date: ${new Date().toUTCString()}`,
		`Message-ID: <${crypto.randomUUID()}@${domain}>`,
		'MIME-Version: 1.0',
		'Content-Type: text/plain; charset=utf-8',
		'Content-Transfer-Encoding: base64',
		'',
		b64Body(body),
	].join('\r\n');
}

/** Sends the alert. Never throws: the message is already saved in KV. */
export async function sendAlert(env: AlertEnv | undefined, msg: ContactMessage, kvKey: string): Promise<'sent' | 'skipped' | 'failed'> {
	const to = env?.ALERT_TO?.trim();
	const from = env?.ALERT_FROM?.trim() || 'alerts@custompcrepublic.com';
	if (!env?.ALERT_EMAIL || !to) return 'skipped';
	try {
		const { EmailMessage } = await import('cloudflare:email');
		await env.ALERT_EMAIL.send(new EmailMessage(from, to, buildAlert(msg, from, to, kvKey)));
		return 'sent';
	} catch (err) {
		console.error('Contact alert email failed:', err);
		return 'failed';
	}
}
