# Running the site locally

Needs **Node.js 18 or newer** (`node -v` to check).

```bash
npm install
npm run dev
```

Vite prints a URL (usually `http://localhost:5173`). Anything you change under
`src/` hot-reloads in the browser.

## The scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Full production build into `dist/` |
| `npm run serve:dist` | Serves `dist/` at `http://localhost:8125` with clean URLs |
| `npm run qa` | Accessibility + SEO + performance gate (needs Chromium) |
| `npm run single` | Bundles the whole site into one shareable `.html` file |

`dev` and `build` are not the same thing. `dev` renders on the client only;
`build` also prerenders every route to static HTML and writes the sitemap. To
check what will actually ship, run `build` then `serve:dist`.

## Viewing a build in VS Code with Live Server

`npm run serve:dist` is the reliable option, but Live Server works too — with
one condition: **open `dist` as its own folder** (`File → Open Folder… → dist`),
then right-click `index.html` → *Open with Live Server*.

The build uses root-absolute asset paths (`/assets/…`, `/fonts/…`), the same
paths it will use on the real domain. Live Server serves from whatever folder
you opened, so opening the repo root instead makes `/assets/…` resolve one
level too high and the page loads unstyled. Opening `dist` directly lines the
paths up.

Opening `dist/index.html` as a `file://` URL will not work either, for the same
reason. It needs a server — any server.

## Environment switches

| Variable | Default | Effect |
|---|---|---|
| `BASE_PATH` | `/` | Path prefix for a subdirectory deploy, e.g. `/AnantaIonsWeb/` |
| `SITE_ORIGIN` | `https://anantaions.com` | Origin used for canonicals, Open Graph and the sitemap |
| `VITE_SITE_ORIGIN` | — | Same, for code that runs in the browser bundle |
| `INDEXABLE` | `false` | `true` drops the `noindex` meta tag. Set it only for the real launch |

The GitHub Pages workflow sets all four for a preview deployment: subpath base,
the `github.io` origin, and `noindex`.

## Where things live

```
src/
  content/       ← ALL COPY AND FACTS. Edit here first.
    site.js          contact details, nav, footer
    projects.js      the six case studies
  components/    ← the visual pieces (SVG diagrams, motion, cards)
  pages/         ← one file per route
  styles/
    tokens.css       colours, type scale, spacing, motion durations
  lib/pages.js   ← routes + per-page <title>/description/canonical
scripts/         ← build pipeline (page shells, prerender, sitemap, QA)
public/          ← files copied verbatim (logo, favicon, robots.txt)
brand/           ← the full-resolution logo master; not shipped
```

The loose files at the top of the repo (`about.html`, `site.css`,
`home-sections.jsx`, `websiteguide.html`, …) are the original uploads, kept for
reference. They are not part of the build.

## Before this goes public

`docs/CONTENT-TODO.md` lists the items that are still placeholders — the six
project case studies, the phone number, the office location, and the
contact-form endpoint. Anything unverified is marked `verified: false` in
`src/content/` and renders with a visible placeholder badge, so nothing
invented ever reads as fact.

The contact form has no endpoint (`contact.formEndpoint = null`). By design it
tells the visitor to email instead — it will never show a "thanks, we got it"
message for a submission that did not actually send.
