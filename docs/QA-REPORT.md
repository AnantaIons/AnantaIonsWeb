# ANANTA IONS — QA report

Generated 2026-11-16T12:04:44.261Z by `npm run qa` against the production build in `dist/`.

```
ACCESSIBILITY, STRUCTURE & SEO

 /
  PASS  axe (desktop)
  PASS  axe (390px)
  PASS  exactly one h1  found 1
  PASS  heading levels never skip
  PASS  landmarks present
  PASS  every image has alt  0 missing
  PASS  skip link present
  PASS  html lang set
  PASS  title present and <= 70 chars  63
  PASS  meta description 70–200 chars  137
  PASS  canonical correct  https://anantaions.com/AnantaIonsWeb/
  PASS  open graph complete
  PASS  page advertises absolute URLs to verify  16
  PASS  every advertised URL resolves
  PASS  JSON-LD graph present
  PASS  no console errors
  PASS  no duplicate ids
  PASS  no illegible SVG type
  PASS  skip link is focusable

 /displays/
  PASS  axe (desktop)
  PASS  axe (390px)
  PASS  exactly one h1  found 1
  PASS  heading levels never skip
  PASS  landmarks present
  PASS  every image has alt  0 missing
  PASS  skip link present
  PASS  html lang set
  PASS  title present and <= 70 chars  58
  PASS  meta description 70–200 chars  133
  PASS  canonical correct  https://anantaions.com/AnantaIonsWeb/displays/
  PASS  open graph complete
  PASS  page advertises absolute URLs to verify  9
  PASS  every advertised URL resolves
  PASS  JSON-LD graph present
  PASS  no console errors
  PASS  no duplicate ids
  PASS  no illegible SVG type
  PASS  skip link is focusable

 /websites/
  PASS  axe (desktop)
  PASS  axe (390px)
  PASS  exactly one h1  found 1
  PASS  heading levels never skip
  PASS  landmarks present
  PASS  every image has alt  0 missing
  PASS  skip link present
  PASS  html lang set
  PASS  title present and <= 70 chars  62
  PASS  meta description 70–200 chars  121
  PASS  canonical correct  https://anantaions.com/AnantaIonsWeb/websites/
  PASS  open graph complete
  PASS  page advertises absolute URLs to verify  9
  PASS  every advertised URL resolves
  PASS  JSON-LD graph present
  PASS  no console errors
  PASS  no duplicate ids
  PASS  no illegible SVG type
  PASS  skip link is focusable

 /college-projects/
  PASS  axe (desktop)
  PASS  axe (390px)
  PASS  exactly one h1  found 1
  PASS  heading levels never skip
  PASS  landmarks present
  PASS  every image has alt  0 missing
  PASS  skip link present
  PASS  html lang set
  PASS  title present and <= 70 chars  63
  PASS  meta description 70–200 chars  122
  PASS  canonical correct  https://anantaions.com/AnantaIonsWeb/college-projects/
  PASS  open graph complete
  PASS  page advertises absolute URLs to verify  9
  PASS  every advertised URL resolves
  PASS  JSON-LD graph present
  PASS  no console errors
  PASS  no duplicate ids
  PASS  no illegible SVG type
  PASS  skip link is focusable

 /shop/
  PASS  axe (desktop)
  PASS  axe (390px)
  PASS  exactly one h1  found 1
  PASS  heading levels never skip
  PASS  landmarks present
  PASS  every image has alt  0 missing
  PASS  skip link present
  PASS  html lang set
  PASS  title present and <= 70 chars  58
  PASS  meta description 70–200 chars  115
  PASS  canonical correct  https://anantaions.com/AnantaIonsWeb/shop/
  PASS  open graph complete
  PASS  page advertises absolute URLs to verify  9
  PASS  every advertised URL resolves
  PASS  JSON-LD graph present
  PASS  no console errors
  PASS  no duplicate ids
  PASS  no illegible SVG type
  PASS  skip link is focusable

 /start/
  PASS  axe (desktop)
  PASS  axe (390px)
  PASS  exactly one h1  found 1
  PASS  heading levels never skip
  PASS  landmarks present
  PASS  every image has alt  0 missing
  PASS  skip link present
  PASS  html lang set
  PASS  title present and <= 70 chars  21
  PASS  meta description 70–200 chars  119
  PASS  canonical correct  https://anantaions.com/AnantaIonsWeb/start/
  PASS  open graph complete
  PASS  page advertises absolute URLs to verify  8
  PASS  every advertised URL resolves
  PASS  JSON-LD graph present
  PASS  no console errors
  PASS  no duplicate ids
  PASS  no illegible SVG type
  PASS  skip link is focusable

 /404.html
  PASS  axe (desktop)
  PASS  axe (390px)
  PASS  exactly one h1  found 1
  PASS  heading levels never skip
  PASS  landmarks present
  PASS  every image has alt  0 missing
  PASS  skip link present
  PASS  html lang set
  PASS  title present and <= 70 chars  28
  PASS  meta description 70–200 chars  118
  PASS  canonical correct  https://anantaions.com/AnantaIonsWeb/404.html
  PASS  open graph complete
  PASS  page advertises absolute URLs to verify  9
  PASS  every advertised URL resolves
  PASS  JSON-LD graph present
  PASS  no console errors
  PASS  no duplicate ids
  PASS  no illegible SVG type
  PASS  skip link is focusable

DEEP LINKS
  PASS  /displays/#try lands on target  top 80
  PASS  /displays/#order lands on target  top 80
  PASS  /college-projects/#offer lands on target  top 80
  PASS  /shop/#catalogue lands on target  top 80
  PASS  /start/#contact lands on target  top 80
  PASS  /college-projects/#gsm-remote-controller lands on target  top 80
  PASS  /#try lands on target  top 80

RESPONSIVE
  PASS  360px
  PASS  375px
  PASS  390px
  PASS  430px
  PASS  768px
  PASS  1024px
  PASS  1280px
  PASS  1440px
  PASS  1920px

WITHOUT JAVASCRIPT
  PASS  / readable without JS  3385 chars (min 500), 0 hidden
  PASS  /displays/ readable without JS  3561 chars (min 500), 0 hidden
  PASS  /websites/ readable without JS  1465 chars (min 500), 0 hidden
  PASS  /college-projects/ readable without JS  2179 chars (min 500), 0 hidden
  PASS  /shop/ readable without JS  1470 chars (min 500), 0 hidden
  PASS  /start/ readable without JS  716 chars (min 500), 0 hidden
  PASS  /404.html readable without JS  302 chars (min 200), 0 hidden

WEIGHT
  PASS  weight budget found assets to measure  7 files
  PASS  both JS and CSS were measured  js 45890 B, css 38149 B
  PASS  first-load JS under 120 kB  44.8 kB
  PASS  CSS under 60 kB  37.3 kB

CONTENT INTEGRITY  (reported, does not fail the build)

========================================================================
All technical checks passed.
Content: every item verified.
========================================================================
```
