# AnantaIonsWeb

Marketing site for **ANANTA IONS** — a static, build-free React site. Pages load React,
ReactDOM and Babel Standalone from a CDN and compile the `.jsx` sources in the browser,
so there is no bundler step: open a page over a local HTTP server and it runs.

```bash
python3 -m http.server 8000   # then visit http://localhost:8000/index.html
```

(`file://` will not work — the browser blocks the `text/babel` script fetches.)

## Layout

| Path | What it is |
| --- | --- |
| `index.html` | Home page — composes `Nav`, `Hero`, `Trust`, `EngineeringStack`, `Capabilities`, `Projects`, `CustomEng`, `FinalCTA`, `SiteFooter` |
| `about.html` | About page — `PageHero`, `Trust`, `EngineeringStack`, `Process`, `Industries`, `Why`, `FinalCTA` |
| `projects.html` | Project marketplace — the filterable `Projects` grid |
| `services.html` | Engineering services — `Capabilities`, `Firmware`, `Connectivity`, `Intelligence` |
| `start.html` | Intake page — hosts `StartProject` inline |
| `data.jsx` | Content model: stack layers, capabilities, project catalog, industries, process, nav links. **Placeholder copy — clearly marked as such.** |
| `primitives.jsx` | Shared primitives: `Reveal`, `Mark`, `Wordmark`, `Eyebrow`, `DarkCard`, `GhostLink` |
| `home-sections.jsx` | `Nav`, `Hero`, `PageHero`, `Trust`, `EngineeringStack`, `Capabilities`, `Projects` |
| `home-sections2.jsx` | `CustomEng`, `Firmware`, `Connectivity`, `Intelligence`, `Industries`, `Process`, `Why`, `FinalCTA`, `SiteFooter` |
| `start-project.jsx` | `StartProject` — the multi-step project-intake form |
| `site.css` | Site-level theme: dark `--ai-*` palette, layout helpers, reveal/hover animations |
| `assets/logo.png` | Brand mark (copper ring, ivory ion) |
| `_ds/ananta-ions-design-system-…/` | Design system: `_ds_bundle.js` (components), `tokens/*.css`, `styles.css`, `readme.md` (the full spec), and `_adherence.oxlintrc.json` (lint rules enforcing token + prop usage) |
| `dist/ANANTA_IONS_Homepage_offline.html` | Self-extracting single-file build of the home page — everything inlined, opens offline from `file://` |
| `websiteguide.html` | Internal website guide — structure, editing tasks, pre-launch checklist. Printable via `<doc-page>`. |
| `doc-page.js` | `<doc-page>` web component — the paged-document shell `websiteguide.html` loads |
| `docs/design-system-readme.pdf` | Print export of the design system's `readme.md` |
| `docs/reference/` | Electronics-project and Payhip reference PDFs |

## Design system

Every page links the token stylesheets, then `_ds_bundle.js`, which publishes components on
`window.AnantaIonsDesignSystem_e44e3f` (`Button`, `Card`, `HeroChapter`, `PrimaryNav`, …).
The visual rules: one saturated gold accent (`--color-primary: #d4af37`) carries every CTA and
active state, 2px radius everywhere, hairline borders instead of shadows, and hierarchy from
weight and size rather than color.

## Before launch

- `data.jsx` ships **placeholder** projects, specs and pricing — all content lives in that one file.
- The intake form validates and confirms but does not submit anywhere; wire up the final branch of `next()` in `start-project.jsx`.
- Footer contact and social links are placeholders (`SiteFooter` in `home-sections2.jsx`).
- Pages transform JSX in the browser. For production, precompile the `.jsx` files to plain JS.

`websiteguide.html` covers all of this in more detail.
