# Content to supply before launch

The site is technically launch-ready. It is **not** content-ready, and it says so
on the pages themselves rather than hiding it.

No customer, deployment, statistic, certification, award, result or performance
figure has been invented anywhere in this build. Where a fact was needed and not
available in the supplied source material, the site either omits it or marks it
visibly as a placeholder. `npm run qa` lists every outstanding item and reports
the site as not launch-ready while any remain.

## 1. Projects — `src/content/projects.js`

All six entries are placeholders, inherited from the supplied content model,
which describes its own catalogue as *"illustrative and to be replaced with real
listings."* They are examples of the **kind** of work described, not claims about
delivered work.

For each real project, fill in:

| Field | What it must contain |
| --- | --- |
| `title`, `domain`, `status` | The real project, its sector, its true lifecycle state |
| `problem` | The real-world problem it addresses |
| `approach` | The engineering approach actually taken |
| `architecture` | The real system shape |
| `technology` | Real platform, connectivity and interface |
| `engineering` | What was genuinely hard about it |
| `result` | **Only a verified outcome.** Leave `null` and the page says the outcome is not published — it never invents one |
| `verified` | Set to `true` only when every field above is true |

Delete any placeholder you cannot replace. Six honest projects are better than
six; three honest projects are better than six placeholders.

## 2. Contact details — `src/content/site.js`

| Field | Status |
| --- | --- |
| `contact.email` | `hello@anantaions.com` is an assumption. Confirm it, then set `verified: true` |
| `contact.phone` | Not supplied. Add it or leave `null` (the UI degrades cleanly) |
| `contact.location` | Not supplied. Same |
| `site.origin` and `ORIGIN` in `src/lib/pages.js` | Set to the real production domain — canonicals, Open Graph URLs and the sitemap all derive from it |

## 3. The intake form endpoint — `src/content/site.js`

`contact.formEndpoint` is `null`, so the form **does not submit**. It validates,
collects the answers, and then tells the visitor plainly that the submission
route is not connected, offering a prefilled email instead. It never shows a
confirmation for a message that was not delivered.

Set `formEndpoint` to a real POST endpoint to enable submission. The form sends
`multipart/form-data` including a `summary` field and an optional `attachment`,
expects a 2xx response, and handles non-2xx and network failure with an error
state and a retry — all four paths are tested.

Spam protection is a honeypot field plus a minimum fill time, both local. If the
endpoint you choose adds its own captcha, remove one of them rather than stacking
both on the visitor.

## 4. Photography

No ANANTA IONS hardware photography was supplied. Rather than use stock or
generated imagery — which would imply a product that has not been verified to
exist — the site uses original engineering **drawings**, labelled as such.

When real photography exists, it should replace the board drawing in the hero and
the hardware scene, and the per-project glyphs in the case studies. Until then the
drawings claim exactly what they are.

## 5. Brand typeface

The design system records the production face as NVIDIA-EMEA, which is
proprietary and was not supplied. **Inter** is substituted, self-hosted as a
variable font. Supply the licensed binaries to make the typography exact; the
swap is two `@font-face` blocks in `src/styles/base.css` and one token.
