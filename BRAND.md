# Custom PC Republic — Brand guidelines (v4)

> Full visual guide: **https://blog.custompcrepublic.com/brand** (`src/pages/brand.astro`).
> Custom PC Republic was **Custom PC RSA** (est. 2012). Use the new name on everything new.

## Logo
- **The steel shield + chip**, taken exactly from the official brand card — never redrawn or recoloured.
- Files: `public/brand/cpr-shield.png` / `.webp` (master, transparent), `public/brand/favicon-{16,32,48,96,192}.png`,
  `public/favicon.ico`, `public/apple-touch-icon.png`.
- Wordmark: **CUSTOM PC REPUBLIC** in Exo 2, 900 italic, brushed-steel gradient (`.steel` class).
- Components: `<Logo size glow />`, `<Wordmark size onDark />`.
- Header and footer are always carbon (in light and dark themes) so the steel always shines.

## Colour
| Name | Hex | Use |
| --- | --- | --- |
| Shield Violet | `#7C6CFF` | glow, highlights (`#6A5AF0` for button fills with white text) |
| Circuit Blue | `#3BA6FF` | glow, links |
| Brushed Steel | `#C9CCD6` | logo, wordmark |
| Carbon | `#09080F` | header, footer, brand card |

Light and dark theme tokens live in `src/styles/global.css`; all text colours meet WCAG AA in both.

## Type
| Face | Job |
| --- | --- |
| **Exo 2** | wordmark (900 italic, steel) and headings (700) |
| **Outfit** | body text and UI |
| **IBM Plex Mono** | labels, code |

## Voice
*"Simplify technology with tech experts and 99% SLA resolution for your emergency tech support needs."*
Pillars: **Simplify · Integrate · Automate.** Plain English; two audiences (individuals, SME decision-makers);
name the vendors we use (Cloudflare, Huntress, Zscaler, Malwarebytes, Microsoft); no over-claiming on security.

## Blog banners
1200×630 JPG in `public/images/blog/`. Until a custom banner exists, use `/images/blog/placeholder.jpg`.
Start new posts from `src/content/blog/_TEMPLATE.md` (files beginning with `_` are not published).
