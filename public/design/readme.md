# Ananta Ions — Design System

An engineering-grade marketing system. Two surface modes — a deep **black canvas** for hero and footer chapters and a flat **paper-white canvas** for body content — connected by a single, almost violently saturated **Primary Gold** accent that carries every CTA, every active tab, and the small decorative corner squares that mark out cards. The system is unapologetically angular (2px radius everywhere), typographically restrained (one sans, weights 400 and 700), and built like engineering documentation that learned graphic design: black, white, gray, and gold stacked into a structured editorial grid.

## Sources

- **Brand analysis document** (provided as the project brief) — the authoritative token + component spec. All values in this system are transcribed directly from it.
- No codebase, Figma file, logo, or font binaries were provided. Everything here is built from the written spec.

## Product context

Ananta Ions is presented through a single primary surface: a **marketing / industry website** — dense, factual landing pages (products, solutions, industries, resources) framed top and bottom by black hero/footer chapters, with paper-white body sections stacked between them. The system scales from small product cards up to massive industry landing pages without bending its rules. There is no app, dashboard, or docs product defined in the source, so this system ships one UI kit: the marketing site.

## The one rule to remember

There is exactly **one accent color** and it does all the work: Primary Gold (`#d4af37`). Every primary CTA, every active state, every link affordance on dark surfaces, and every decorative corner square. Nothing else competes. Keep it scarce — if two solid-gold CTAs land in the same fold, neutralize one to the gold-outline variant.

---

## CONTENT FUNDAMENTALS

**Voice.** Factual, engineering-first, confident. Copy reads like specification sheets that were art-directed — claims are quantified, never fluffy. The tone is that of a technical authority addressing professionals, not consumers.

**Person & address.** Second person for calls to action ("Get started", "Read the documentation", "Compare products"). Third person / impersonal for descriptive body ("The platform delivers 4× faster training"). Rarely first-person plural; the brand speaks through its capabilities, not its personality.

**Casing.** Sentence case for headlines and body. UPPERCASE reserved for eyebrows, breadcrumbs, badge/category tags ("WHITE PAPER", "WEBINAR", "BLOG"), and the legal fine-print bar — all set in the caption/utility tiers with the `text-transform: uppercase` baked into the token.

**Numbers & stats.** Foregrounded and precise. Big numeric callouts ("4× faster training", "60% lower cost") set in `display-lg` gold. Units and multipliers are terse (×, %, TB, ms). Quantify wherever possible.

**Copy length.** Headlines are short and declarative (3-7 words). Card descriptions are 1-2 lines. Body prose is dense but scannable — hierarchy comes from weight and size, so paragraphs stay tight rather than being broken up with decoration.

**Eyebrows.** Most sections open with a small uppercase caption eyebrow above the headline (e.g. "PLATFORM", "INDUSTRIES", "RESOURCES") — a `caption-md` bold uppercase label that categorizes before the headline names.

**Emoji.** Never. This is an engineering brand; emoji would break the register entirely.

**Example strings.**
- Hero: "Accelerated computing for every industry" / subhead "Build, train, and deploy at scale on infrastructure engineered end to end."
- CTA strip: "Ready to get started?" + gold button "Contact sales".
- Card: badge "WHITE PAPER" · title "Scaling inference across the edge" · ghost link "Read more →".
- Stat: "4×" + caption "faster training throughput".

---

## VISUAL FOUNDATIONS

**Color.** Monochrome base — pure black (`#000000`), paper white (`#ffffff`), a soft off-white (`#f7f7f7`), and a full gray ramp (mute `#757575`, stone `#898989`, ash `#a7a7a7`) — plus exactly one saturated accent, **Primary Gold `#d4af37`**, with a pressed-state `#b8860b`. Semantic colors (error red, warning orange, success green, link amber) exist but appear only where their meaning is required; they never decorate. Editorial accents (brass, copper, champagne) are wash tints for long-form callouts only — never on chrome.

**Two-mode surface architecture.** The page alternates predictably: black chapter (hero) → white body → white body → black chapter (CTA strip / footer). The sense of "air" comes from this black-vs-white sandwiching, not from generous internal padding. Black is the frame; white is the content.

**Type.** One family (NVIDIA-EMEA in production; **Inter** as the substituted open-source match here), two weights (400/700). Unusually flat line-heights (1.25-1.5). Hierarchy is built from **weight and size only** — color is never used to separate type tiers. Gives marketing copy an editorial-newspaper feel. 12-tier scale from `utility-xs` (10px) to `display-xl` (48px).

**Spacing.** 8px base. `section` (64px) is the universal vertical rhythm between major blocks. Card grids use 24px gutters; in-card padding is 24-32px. Hero chapters get the largest padding in the system (80px vertical / 48px horizontal). Whitespace is structural, not atmospheric — sections butt directly against each other with no decorative dividers or empty breathing bands.

**Backgrounds.** No gradients as chrome, no atmospheric mesh, no repeating patterns or textures. Backgrounds are flat fills (black, white, soft-gray). The only imagery is **full-bleed photographic or 3D-rendered hero scenes** (data-center hardware, neural-net visualizations, life-sciences microscopy) with a dark gradient overlay for legibility — that overlay is the single sanctioned gradient, and only for text legibility over a photo.

**Corners.** Aggressively angular. `radius-sm` = **2px** on every interactive element (buttons, cards, inputs, tabs, badges). Never 0 (2px kills optical aliasing on a sharp edge), never past 4px. Only avatars and social-icon dots use `radius-full`. No pill buttons, no rounded cards.

**Cards.** Flat rectangles. Background white, **1px `#cccccc` hairline border**, 2px radius, no shadow, no lift. Separation is achieved with hairlines and the soft-gray surface, never elevation. Each reusable card is anchored with the signature **corner square** — a ~12px solid-gold square in one corner (top-left or bottom-right).

**Elevation & shadow.** Effectively none on content. Cards do not lift. The only shadow in the system is a subtle `0 0 5px 0 rgba(0,0,0,0.3)` ambient on sticky chrome bars (sticky nav, sticky CTA), used very sparingly. Depth comes from photography, not CSS.

**Borders.** Two weights: 1px `#cccccc` hairline on light surfaces (card edges, table rules, dividers); 1px `#5e5e5e` hairline-strong on dark surfaces (footer column rules, dark-card edges). The focus ring is a 2px gold border — the only focus signal in the system.

**Animation.** Restrained. No bounces, no springy motion, no decorative entrances. Where transitions exist they are short, linear-to-ease color/opacity shifts on interactive chrome. The brand's character is stillness and precision, not motion.

**Hover / press.** Hover is not documented as a distinct visual layer in the source (system policy). Press/active states are explicit: primary button drops from `#d4af37` to `#b8860b`; the pill tab flips fully inverted (transparent → black fill, ink → white text) on selection. Focus shows the 2px gold border.

**Transparency & blur.** Minimal. The only transparency is `on-dark-mute` (white at 70%) for secondary footer text and the dark gradient overlay on hero photos. No frosted glass, no backdrop blur.

**Imagery vibe.** Cool, technical, high-fidelity — data-center hardware, rendered neural nets, scientific microscopy. Full-bleed 16:9 on desktop, art-directed to 4:5 portrait on mobile so the subject stays centered with headline overlay room. Card imagery is fixed-aspect (16:9 resource, 1:1 product, 3:2 editorial) and scales rather than re-crops.

**Decorative vocabulary.** Exactly one motif: the gold corner square. No illustration flourishes, no icon-in-circle decoration, no colored accent bars. When a section needs ornament, it gets a corner square or nothing.

---

## ICONOGRAPHY

- **Production set:** the source uses **Font Awesome 6 Pro** and **Font Awesome 6 Sharp** exclusively — chevrons, social glyphs, breadcrumb separators, search/menu icons — at 14-22px. Feature-card icons render at 22-24px in Primary Gold.
- **In this system:** Font Awesome Pro/Sharp are licensed and were not provided. This system links **Font Awesome 6 Free** from CDN as the closest available match (same optical family, same glyph names for the free subset). **Flagged substitution** — swap for the Pro/Sharp kit in production. Feature-card icons should be tinted `var(--color-primary)`.
- **No SVG icon assets or icon binaries** were provided in the source, so none are bundled. Where a glyph is needed, use a Font Awesome class (`<i class="fa-solid fa-arrow-right">`).
- **Emoji:** never used. **Unicode as icons:** a single right arrow "→" is used inside ghost/text links ("Read more →") — this is the one place a Unicode glyph stands in for an icon, and it is intentional.
- **Corner square** is decorative, not an icon — a 12px gold `<span>`, not a glyph.

## Logo

**No logo or brand mark was provided.** Do not invent one. Wherever a mark would go (primary nav, footer), render the wordmark **"ANANTA IONS"** in plain bold type (`body-strong`, uppercase, letter-spaced). Replace with the real mark when supplied.

---

## Fonts — substitution flagged

NVIDIA-EMEA is proprietary and was not provided. This system substitutes **Inter** (weights 400/700), loaded from Google Fonts, as the closest open metric match (x-height and stroke contrast within ~2% at body sizes per the source). **Arial** is the documented fallback. **Please provide the NVIDIA-EMEA / brand font binaries to make this pixel-accurate.**

---

## Index / manifest

Root:
- `styles.css` — global entry; `@import`s all token files. Consumers link this one file.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skills-compatible entry point.
- `thumbnail.html` — homepage tile for the design system.

`tokens/` — `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `fonts.css`.

`guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups) rendered in the Design System tab.

`components/` — reusable React primitives, grouped by concern:
- `buttons/` — `Button` (primary / primary-active / outline / outline-on-dark / ghost-link / disabled variants), `PillTab`.
- `forms/` — `TextInput`, `SearchInput`.
- `content/` — `Card` (product / feature / resource / callout-stat variants), `Badge`, `CornerSquare`, `StatCallout`.
- `navigation/` — `UtilityBar`, `PrimaryNav`, `Breadcrumb`, `SubNav`, `Footer`.
- `overlays/` — `HeroChapter`, `CtaStrip`.

`ui_kits/marketing/` — full-screen recreation of the marketing site (`index.html` + screen JSX).

## Intentional additions

- **`CornerSquare`** — the spec describes the corner square as a decorative motif rather than a named React primitive; exposed here as a tiny component so kits can attach it consistently.
- **Font Awesome 6 Free** (CDN) substituted for the licensed Pro/Sharp kit — flagged above.
