# Custom PC Republic — Brand guidelines (v2.0 "Neon Shield")

> The full visual guide lives at **https://blog.custompcrepublic.com/brand** (`src/pages/brand.astro`).
> Design tokens live in `src/styles/global.css`.

## Idea
| Ingredient | Taken from | Means |
| --- | --- | --- |
| 🛡️ **Shield** | steel shield + circuit traces | *Play secure* — the mark |
| ⚡ **Spectrum** | volt → blue → violet neon, carbon weave | *Plug in* — energy |
| 🌃 **Skyline** | wide wordmark, midnight navy, Hillbrow Tower | Made in Jo'burg |

## Logo
- Files: `public/brand/cpr-mark.svg` (full, use ≥ 56px), `public/brand/cpr-favicon.svg` / `public/favicon.svg` (simple, 16–55px), `public/apple-touch-icon.png`
- Components: `<Logo size variant />`, `<Wordmark layout="horizontal|stacked" size tagline />`
- Node order is fixed: **volt left · blue spine · violet right**
- Clear space = ¼ of the mark height. Never recolour, stretch, rotate or outline it.

## Colour
| Name | Hex | Token | Use |
| --- | --- | --- | --- |
| Volt Green | `#9BEB2A` | `--volt` | primary buttons, eyebrows |
| Circuit Blue | `#2E76F8` | `--circuit` | mark spine, quotes |
| Shield Violet | `#7B3CF4` | `--violet` | mark nodes, gradient end |
| Carbon | `#04070F` | `--carbon` | page background |
| Jo'burg Midnight | `#041734` | `--midnight` | atmosphere |
| Brushed Steel | `#C5CAD3` | `--steel` | rim, "CUSTOM PC" |
| Skyline Blue | `#A8D4F5` | `--sky` | taglines |
| Violet text | `#9A6BFF` | `--primary` | text-safe violet (5.7:1) |
| Blue text | `#5B9BFF` | `--blue` | links (7.3:1) |

Spectrum: `linear-gradient(90deg, #9BEB2A, #2E76F8 50%, #7B3CF4)` — wordmark, bars and accents only, never body text.
Ratio: **60% dark · 30% steel/text · 10% neon.**

## Type
| Face | Job |
| --- | --- |
| **Orbitron** 800–900, uppercase | wordmark, rare display |
| **Chakra Petch** 600–700 | headings, nav, buttons |
| **Outfit** 400/600 | body |
| **JetBrains Mono** 400–500 | eyebrows, labels, code |

## UI
- Chamfered corners (10px) on buttons; small radii (6–14px) elsewhere — no pills.
- One volt primary button per view.

## Voice
**Plug in. Play secure.** — technical, friendly, security-first, proudly local.
