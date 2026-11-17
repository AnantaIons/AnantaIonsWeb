# ANANTA IONS website — handover

Last updated: 17 Nov 2026. Read this fully before changing anything.

## 1. Where things are

| What | Where |
|---|---|
| Live site | https://anantaions.github.io/AnantaIonsWeb/ |
| Repository | https://github.com/AnantaIons/AnantaIonsWeb (public) |
| Live branch | `main` — every push to `main` builds, runs the QA audit, and deploys to GitHub Pages if QA passes |
| Other branches | `flagship` (same as main today), `site-v2`, `claude/add-more-files-wq4cwl` (old, can be ignored) |
| Deploy workflow | `.github/workflows/deploy.yml` (the only workflow — two older conflicting ones were deleted on purpose) |
| Search engines | Site is currently **noindex** on purpose (preview). Switch on only when the owner says so. |

## 2. The business (what the site must say)

- **ANANTA IONS**, Jaipur, Rajasthan. Owner goes by "White Wolf".
- Five areas, LED displays first:
  1. **Ananta Displays** — LED notice boards / scrolling displays made to order (P10 panels). The speciality.
  2. **Ananta Digital** — websites for shops, schools, coaching centres, small businesses.
  3. **Ananta Engineering** — firmware, IoT, electronics/PCB, product development.
  4. **Ananta Components** — parts shop, ordered on WhatsApp (no online payment).
  5. **College Projects** — final-year/mini projects; **10% student discount** and **10% referral commission** (both real offers).
- Contact (real, published): phone/WhatsApp **+91 78911 47275**, email **ananta.ions@outlook.com**, Jaipur.
- Real builds only: Campus Display Network (in development), GSM SMS Notice Board (built), GSM Remote Switch on ATtiny85 (complete). See `src/content/projects.js`.

## 3. Rules the owner has set (follow these)

1. **No fake content.** No invented customers, testimonials, stats, prices, stock or installations. Demos must be clearly labelled as fictional.
2. **Plain, human copy.** The owner rejected "AI-sounding" text and the old logo-meaning paragraph. Short, concrete sentences.
3. **Do not describe the internal hardware of the owner's own product** (controller chip, ports, level shifters) on product/marketing pages. Generic educational explanations (e.g. the PCB explorer) are fine.
4. **No personal details of the owner** on the site (name, employer, job). The owner is employed elsewhere — keep that out entirely.
5. **Gold and copper are the identity.** Cyan is allowed only as a small technical accent.
6. **Show changes for review first** (screenshots), then deploy only when the owner says "go live".
7. Accessibility and performance stay as-is: QA must pass before every deploy.

## 4. Tech stack and commands

- Vite + Preact (React API via preact/compat), every page **prerendered to static HTML** and then hydrated.
- No backend. Forms and the quote list open WhatsApp/email with a prefilled message.

```bash
npm ci
npx playwright install chromium        # needed for QA
BASE_PATH=/AnantaIonsWeb/ npm run build
BASE_PATH=/AnantaIonsWeb/ node scripts/serve-dist.mjs &   # serves dist on :8125
BASE_PATH=/AnantaIonsWeb/ npm run qa    # must end with "All technical checks passed."
```

`BASE_PATH` matters: the site lives under `/AnantaIonsWeb/` on GitHub Pages. Always build links with `path('/route/')` from `src/lib/paths.js`, never hard-coded `/`.

QA (`scripts/qa.mjs`) checks: one h1, heading order, landmarks, axe-core accessibility, contrast, 9 screen widths (no overflow, 24px+ tap targets), no-JS readability, SEO meta/JSON-LD, illegible SVG text (<10px fails), and a list of deep links (`#fragments`). If you rename a section id, update the deep-link list in `qa.mjs`.

## 5. Project structure

```
src/
  lib/pages.js        ← REGISTRY: every route, title, description. Product + article pages are generated from data here.
  lib/schema.js       ← JSON-LD
  lib/basket.js       ← quote list (localStorage)
  lib/wa.js           ← WhatsApp links
  entry-server.jsx    ← prerender: add new page components to PAGES
  entries/*.jsx       ← one client entry per page key (product.jsx/article.jsx are shared)
  pages/              ← Home, Displays, BoardGallery, Engineering, Websites, CollegeProjects, Shop, Product, Journal, Article, Start (contact), NotFound
  components/         ← UI pieces (see below)
  content/            ← ALL TEXT AND DATA lives here
  styles/site.css     ← single stylesheet (Aurum & Patina tokens at top)
scripts/              ← pages.mjs (HTML shells), prerender, sitemap, qa, serve-dist
public/demos/         ← 3 standalone demo websites (plain HTML)
public/design/        ← old Claude Design export preview (noindex), can be deleted
```

**Adding a page:** add an entry in `src/lib/pages.js` → create `src/pages/X.jsx` → create `src/entries/<key>.jsx` (`mount(X)`) → add `X` to `PAGES` in `entry-server.jsx` (and `entries/preview.jsx`) → nav in `src/content/site.js` if needed → build + QA.

## 6. Content files (edit these, not the components)

| File | Holds |
|---|---|
| `content/site.js` | name, contact, nav, primary CTA, proposition line |
| `content/capabilities.js` | the 5 areas, LED display types/uses, website kinds/includes, student programme |
| `content/catalogue.js` | **shop**: categories, 10 products (specs, "confirm" list, docs links, price, stock), 4 project kits |
| `content/templates.js` | Board Gallery: 10 ad templates on real P10 sizes |
| `content/journal.js` | 3 articles |
| `content/projects.js` | real builds (problem/solution/status) |
| `content/products.js` | campus display network features + roadmap |

**Catalogue policy:** `specs` contain only datasheet-checked facts for the standard part. Anything depending on the exact stock item goes in `confirm` and shows as "We confirm with you". `price: null` shows "Ask price". `stock`: `'confirm' | 'in' | 'out'`. Product images are SVG illustrations in `components/ProductArt.jsx` labelled "Illustration — photos coming soon"; replace with real photos when supplied.

## 7. Features on the live site

- **Home:** hero "Engineering the physical. Designing the digital." with layered LED board + phone + circuit card; LED ticker; 5 division cards; one story section per area (live LED demo, website preview, PCB explorer, featured parts, student offer, journal).
- **Displays:** display options with honest statuses, live "type a notice" LED demo, **P10 size calculator** (wall size → panels, sends size on WhatsApp), uses, built systems, campus network (coming), how to order.
- **Board Gallery** (`/displays/templates/`): 10 templates (shop sign, sale, menu, token, school notice, admissions, aarti timings, rate board, counter), 4 LED colours, 4 font sizes, scroll/blink effects, filter, "I want this board" WhatsApp.
- **Engineering:** 4 services, **interactive PCB explorer** (`PcbExplorer.jsx`, keyboard accessible), real builds, process.
- **Websites:** 3 working demos (Kesar & Clay commerce, Suryansh Solar business, Studio Ira portfolio — all fictional, labelled) shown live in desktop + phone frames; what's included; process.
- **Shop:** category tiles, search + filters, product cards, **product pages** (`/shop/<id>/`: specs/overview/docs tabs, breadcrumbs, quantity, sticky mobile bar), **quote list** in header (sends one WhatsApp message), **Shop by project** kits, ordering steps.
- **College Projects:** areas, what students get, offers, example builds, steps.
- **Journal:** `/journal/` + 3 articles.
- **Contact** (`/start/`): **5-step guided enquiry** (service → details → budget → timeline → contact → review → WhatsApp/email). `?service=display|website|engineering|college|components` preselects.
- Site-wide: floating WhatsApp button, cursor-revealed electronics background (desktop, behind content), current-flow traces in heroes, scroll reveal, shrinking header, page fade transitions. Everything respects `prefers-reduced-motion`.

## 8. Design system — Aurum & Patina (Future Signature v2.0)

- Light sections: ivory `#F5F1E8`, cards `#FFFFFF`, text espresso `#211E19`, secondary `#635B52`.
- Dark sections (scoped with `.dark`): obsidian `#11100E`, surfaces `#191815`, text `#F3EEE3`.
- Gold (primary): `#D6B66B` on dark; on light use `#785D30` for small text (contrast).
- Copper (secondary): `#A96142` / text `#C58960` on dark, `#985537` on light.
- Patina (positive + WhatsApp/order buttons): `#286A4D`.
- Cyan (technical accent only): `#39C6D6` on dark, `#0B6F7A` on light.
- LED amber `#FFA000` is product imagery, not a theme colour.
- Fonts (self-hosted in `public/fonts`): Manrope (UI), Playfair Display italic (one highlighted phrase per headline, class `.hl`), JetBrains Mono (numbers/specs).
- Radius: buttons/inputs 10px, cards 16px. Primary buttons = gold fill + dark text everywhere.
- Contrast exceptions are documented at the top of `site.css`.

## 9. Open items (need the owner)

1. **Shop data:** real product list, exact variants (which ESP32 board, SMPS rating, LED colours, original vs compatible Arduino), prices, stock, photos.
2. **LED colours:** gallery says amber, red, white, green — confirm which are actually supplied.
3. **Websites:** confirm hosting + domain setup is offered; any other real sites to list in the portfolio.
4. **Engineering page:** owner should confirm it doesn't conflict with current employment before promoting it.
5. **Email:** site uses `ananta.ions@outlook.com`; `shriannantlabs@gmail.com` also exists — confirm.
6. **Search engines:** site is noindex; switch on (and connect a custom domain) when ready.
7. Real photos/videos of boards would improve the site most.

## 10. Ideas not done yet

Interactive pinout diagrams per product, product comparison, bulk quotation for institutions, BOM upload, more journal articles, real testimonials (only when real).
