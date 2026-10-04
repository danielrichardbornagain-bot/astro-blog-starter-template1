# Custom PC Republic — Brand guidelines (v3)

> Full visual guide: **https://blog.custompcrepublic.com/brand** (`src/pages/brand.astro`).
> Tokens: `src/styles/global.css` (dark + light themes via `[data-theme]` on `<html>`).

The blog matches **custompcrepublic.com**: deep ink, violet + blue, Syne / Outfit / IBM Plex Mono. Neon is used sparingly; reading comfort comes first.

## Logo — the shield chip
- Steel shield (security) + CPU chip (hardware) + circuit traces to violet and blue nodes.
- `public/brand/cpr-mark.svg` — full mark, use at **≥ 56px**
- `public/favicon.svg` / `public/brand/cpr-favicon.svg` — simple 4-node mark for 16–55px
- `public/apple-touch-icon.png`, social card `public/images/og-default.jpg`
- Components: `<Logo size variant />`, `<Wordmark size sub />` (Syne name + "IT SYNERGY ENERGY" in Plex Mono)
- Clear space ¼ of the mark height. No recolouring, stretching or heavy glow. The old "Custom PC RSA" script logo is retired.

## Colour
| Role | Dark | Light | Token |
| --- | --- | --- | --- |
| Background | `#07060E` | `#F7F6FB` | `--bg` |
| Panel | `#14111F` | `#FFFFFF` | `--panel` |
| Border | `#2A2640` | `#E1DEEE` | `--border` |
| Headings | `#ECEAF6` | `#16131F` | `--fg` |
| Reading text | `#D9D6E8` | `#2E2A3D` | `--text` |
| Muted | `#A4A0B8` | `#5C5772` | `--muted` |
| Faint labels | `#8B86A3` | `#6A6582` | `--faint` |
| Violet (text) | `#8F82FF` | `#5A48E0` | `--primary` |
| Blue (text) | `#5CB4FF` | `#1A62B0` | `--blue` |
| Button fill | `#6A5AF0` | `#6A5AF0` | `--primary-strong` |

Brand accents (logo, art): Republic Violet `#7C6CFF`, Edge Blue `#3BA6FF`, Brushed Steel `#C9CCD6`.
All text colours meet WCAG AA in both themes.

## Type
| Face | Job |
| --- | --- |
| **Syne** 600–800 | headings, the name |
| **Outfit** 400/600 | body (18px, 1.7; posts 1.8, max 70ch) |
| **IBM Plex Mono** 400–500 | labels, hosts, prices, code |

## Voice
**Plug in. Play secure.** — "Simplify technology with tech experts and 99% SLA resolution for your emergency tech support needs." Pillars: **Simplify · Integrate · Automate.**
