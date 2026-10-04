// Global site data — content mirrored from custompcrepublic.com so the blog and main site match.

export const SITE_TITLE = "Custom PC Republic Blog";
export const SITE_DESCRIPTION =
	"Vlog notes, rack diaries and build logs from Custom PC Republic — hand-built systems, Zero Trust staging and serverless delivery from Westdene, Randburg.";
export const SITE_URL = "https://blog.custompcrepublic.com";

export const BRAND = {
	name: "Custom PC Republic",
	tagline: "Plug in. Play secure.",
	subtitle: "IT Synergy Energy",
	location: "Westdene, Randburg, Johannesburg",
	blurb:
		"Hand-built systems, Zero Trust staging, and serverless delivery from Westdene, Randburg. Gamers and operators on the same desk.",
	pitch:
		"Simplify technology with tech experts and 99% SLA resolution for your emergency tech support needs.",
	pillars: ["Simplify", "Integrate", "Automate"],
};

export const CONTACT = {
	email: "daniel@custompcrepublic.com",
	portfolio: "https://danieljacobs.custompcrepublic.com",
};

export const LINKS = {
	main: "https://custompcrepublic.com",
	shop: "https://shop.custompcrepublic.com",
	builder: "https://builder.custompcrepublic.com",
	cloud: "https://cloud.custompcrepublic.com",
	lab: "https://lab.custompcrepublic.com",
	forum: "https://forum.custompcrepublic.com",
	lobby: "https://lobby.custompcrepublic.com",
	links: "https://links.custompcrepublic.com",
	youtube: "https://www.youtube.com/@customtechrepublic",
	tiktok: "https://www.tiktok.com/@custompcrepublic",
	forestOfPines: "https://www.forestofpines.com",
};

export const ZAMESH = {
	name: "Zamesh",
	repo: "https://github.com/danielrichardbornagain-bot/zamesh",
	issues: "https://github.com/danielrichardbornagain-bot/zamesh/issues",
	contributing: "https://github.com/danielrichardbornagain-bot/zamesh/blob/main/CONTRIBUTING.md",
	upstream: "https://github.com/cloudflare/templates",
};

export type Product = {
	name: string;
	kind: string;
	category: "systems" | "laptops" | "components" | "network" | "lab";
	blurb: string;
	price: string;
	image?: string;
	floor?: boolean;
};

export const PRODUCTS: Product[] = [
	{ name: "Republic Pulse 1440", kind: "Prebuilt", category: "systems", blurb: "The house 1440p machine. Hand-cabled in Randburg, stress-tested overnight.", price: "R 28 990", image: "/products/hero-tower.jpg", floor: true },
	{ name: "Lt. Loki War Machine", kind: "Hell Let Loose", category: "systems", blurb: "Named for the channel. High-refresh 1440 / 4K, capture ready.", price: "R 45 990", image: "/products/battlestation.jpg", floor: true },
	{ name: "Republic Cube", kind: "SFF", category: "systems", blurb: "Desk-small, hotel-quiet, still 1440p honest.", price: "R 26 490", image: "/products/cube-itx.jpg", floor: true },
	{ name: "Snowline Creator", kind: "Show build", category: "systems", blurb: "White dual-chamber with 360 AIO and vertical GPU.", price: "R 38 990", image: "/products/dual-chamber.jpg", floor: true },
	{ name: "Zero Trust Silent", kind: "Managed", category: "systems", blurb: "Quiet workstation with identity, DNS filter, and firmware lock.", price: "R 21 990" },
	{ name: "RTX 5080 Founders-style", kind: "GPU", category: "components", blurb: "Triple-fan shroud, violet/blue edge light, 12V-2x6 native.", price: "R 21 990", image: "/products/gpu-flagship.jpg" },
	{ name: "Pulse RGB 32GB", kind: "Memory", category: "components", blurb: "Matched DDR5-6000 CL30. Tuned on our AM5 boards.", price: "R 2 190", image: "/products/ram-kit.jpg" },
	{ name: "Pulse 360 AIO", kind: "Cooling", category: "components", blurb: "AIO with a circular RGB pump face. Quiet curve out of the box.", price: "R 2 490", image: "/products/aio-cooler.jpg" },
	{ name: "Secured-Core Gaming 16", kind: "Laptop", category: "laptops", blurb: "Firmware-locked 16-inch, RTX 40/50 class, identity stack pre-staged.", price: "R 18 999", image: "/products/laptop.jpg" },
	{ name: "Latitude-class Business 14", kind: "Laptop", category: "laptops", blurb: "Office / remote kit. Zero-touch, SOC-ready.", price: "R 12 999" },
	{ name: "OpenWrt Edge One", kind: "Router", category: "network", blurb: "Banana Pi OpenWrt One — our house edge node, flashed and documented.", price: "R 2 490" },
	{ name: "Edge Guardian UTM", kind: "Firewall", category: "network", blurb: "Forti / Sonic-class UTM we stage for Zero Trust branches.", price: "R 8 990", image: "/products/firewall.jpg" },
	{ name: "Vault NAS 4-bay", kind: "Lab", category: "lab", blurb: "Synology-class vault for homelab backups and media.", price: "R 12 990", image: "/products/nas-vault.jpg" },
	{ name: "Core 2.4 GHz patch", kind: "RF", category: "lab", blurb: "WA5VJB-style 2.4–2.48 GHz PCB antenna. Lab / mesh / IoT.", price: "R 390" },
];

export const SERVICES = [
	{ title: "Proactive Projects", body: "Redesigns, migrations, automation, cleanups — milestones before the fire." },
	{ title: "Cloud Engineering", body: "Cloudflare Pages, Workers, routing, edge. Serverless by default." },
	{ title: "Web Presence", body: "Sites that sound credible to executives and technical teams at once." },
	{ title: "Domain & DNS", body: "The records people forget until they break. Hygiene, redirects, uptime." },
];

export const PACKAGES = [
	{ tier: "Foundation", price: "From $650", body: "Single site, Cloudflare Pages, mobile-first." },
	{ tier: "Growth", price: "From $1,800", body: "Multi-page, blog, conversion, serverless wiring." },
	{ tier: "Republic", price: "Custom", body: "Cloud engineering, portals, longer stewardship." },
];

export const BUILDS = [
	{ name: "Lt. Loki 1440", by: "Daniel J", votes: 128, price: "R 58 920", body: "The stream box. High refresh HLL, capture overlay, quiet enough for a brick-wall booth." },
	{ name: "Westdene 1440 Hunter", by: "shop.custompcrepublic", votes: 96, price: "R 36 920", body: "Best fps-per-rand we will sell you without a lecture." },
	{ name: "Hotel Cube", by: "community", votes: 54, price: "R 35 920", body: "ITX travel / LAN. Fits a backpack, still 1440p." },
	{ name: "Zero Trust Silent", by: "lab.custompcrepublic", votes: 41, price: "R 40 020", body: "No RGB circus. Identity, firmware, and a sane GPU for CAD + light play." },
];

export const NETWORK = [
	{ host: "www.custompcrepublic.com", body: "Custom systems, laptops, managed security.", label: "Store", url: "https://custompcrepublic.com" },
	{ host: "shop.custompcrepublic.com", body: "Components, prebuilts, lab gear.", label: "Shop", url: "https://shop.custompcrepublic.com" },
	{ host: "builder.custompcrepublic.com", body: "3D configurator and FPS estimator.", label: "Builder", url: "https://builder.custompcrepublic.com" },
	{ host: "cloud.custompcrepublic.com", body: "Cloudflare Pages, Workers, serverless sites.", label: "Cloud", url: "https://cloud.custompcrepublic.com" },
	{ host: "lab.custompcrepublic.com", body: "Homelab, OpenWrt, Zero Trust staging.", label: "Lab", url: "https://lab.custompcrepublic.com" },
	{ host: "forum.custompcrepublic.com", body: "Community builds and threads.", label: "Forum", url: "https://forum.custompcrepublic.com" },
	{ host: "blog.custompcrepublic.com", body: "Vlog notes, rack diaries, identity.", label: "Journal", url: "/" },
	{ host: "lobby.custompcrepublic.com", body: "Video client waiting room.", label: "Lobby", url: "https://lobby.custompcrepublic.com" },
	{ host: "links.custompcrepublic.com", body: "The full tree — YouTube, TikTok, climb.", label: "Links", url: "https://links.custompcrepublic.com" },
	{ host: "forestofpines.com", body: "Climbing Tree — adaptive sessions in Randburg.", label: "Forest of Pines", url: "https://www.forestofpines.com" },
];
