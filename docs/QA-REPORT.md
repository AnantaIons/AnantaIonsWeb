# ANANTA IONS — QA report

Generated 2026-11-14T06:39:04.024Z by `npm run qa` against the production build in `dist/`.

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
  PASS  title present and <= 70 chars  56
  PASS  meta description 70–200 chars  160
  PASS  canonical correct  https://anantaions.com/AnantaIonsWeb/
  PASS  open graph complete
  PASS  page advertises absolute URLs to verify  8
  PASS  every advertised URL resolves
  PASS  JSON-LD graph present
  PASS  no console errors
  PASS  no duplicate ids
  PASS  no illegible SVG type
  PASS  skip link is focusable

 /products/
  PASS  axe (desktop)
  PASS  axe (390px)
  PASS  exactly one h1  found 1
  PASS  heading levels never skip
  PASS  landmarks present
  PASS  every image has alt  0 missing
  PASS  skip link present
  PASS  html lang set
  PASS  title present and <= 70 chars  50
  PASS  meta description 70–200 chars  163
  PASS  canonical correct  https://anantaions.com/AnantaIonsWeb/products/
  PASS  open graph complete
  PASS  page advertises absolute URLs to verify  9
  PASS  every advertised URL resolves
  PASS  JSON-LD graph present
  PASS  no console errors
  PASS  no duplicate ids
  PASS  no illegible SVG type
  PASS  skip link is focusable

 /services/
  PASS  axe (desktop)
  PASS  axe (390px)
  PASS  exactly one h1  found 1
  PASS  heading levels never skip
  PASS  landmarks present
  PASS  every image has alt  0 missing
  PASS  skip link present
  PASS  html lang set
  PASS  title present and <= 70 chars  69
  PASS  meta description 70–200 chars  163
  PASS  canonical correct  https://anantaions.com/AnantaIonsWeb/services/
  PASS  open graph complete
  PASS  page advertises absolute URLs to verify  16
  PASS  every advertised URL resolves
  PASS  JSON-LD graph present
  PASS  no console errors
  PASS  no duplicate ids
  PASS  no illegible SVG type
  PASS  skip link is focusable

 /projects/
  PASS  axe (desktop)
  PASS  axe (390px)
  PASS  exactly one h1  found 1
  PASS  heading levels never skip
  PASS  landmarks present
  PASS  every image has alt  0 missing
  PASS  skip link present
  PASS  html lang set
  PASS  title present and <= 70 chars  55
  PASS  meta description 70–200 chars  166
  PASS  canonical correct  https://anantaions.com/AnantaIonsWeb/projects/
  PASS  open graph complete
  PASS  page advertises absolute URLs to verify  9
  PASS  every advertised URL resolves
  PASS  JSON-LD graph present
  PASS  no console errors
  PASS  no duplicate ids
  PASS  no illegible SVG type
  PASS  skip link is focusable

 /about/
  PASS  axe (desktop)
  PASS  axe (390px)
  PASS  exactly one h1  found 1
  PASS  heading levels never skip
  PASS  landmarks present
  PASS  every image has alt  0 missing
  PASS  skip link present
  PASS  html lang set
  PASS  title present and <= 70 chars  54
  PASS  meta description 70–200 chars  146
  PASS  canonical correct  https://anantaions.com/AnantaIonsWeb/about/
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
  PASS  title present and <= 70 chars  39
  PASS  meta description 70–200 chars  157
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
  PASS  meta description 70–200 chars  106
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
  PASS  /products/#hardware lands on target  top 80
  PASS  /services/#students lands on target  top 80
  PASS  /services/#connectivity lands on target  top 80
  PASS  /about/#principles lands on target  top 80
  PASS  /start/#contact lands on target  top 80
  PASS  /projects/#gsm-remote-controller lands on target  top 80
  PASS  /#process lands on target  top 80

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
  PASS  / readable without JS  3250 chars (min 500), 0 hidden
  PASS  /products/ readable without JS  2594 chars (min 500), 0 hidden
  PASS  /services/ readable without JS  4194 chars (min 500), 0 hidden
  PASS  /projects/ readable without JS  2305 chars (min 500), 0 hidden
  PASS  /about/ readable without JS  1988 chars (min 500), 0 hidden
  PASS  /start/ readable without JS  897 chars (min 500), 0 hidden
  PASS  /404.html readable without JS  273 chars (min 200), 0 hidden

WEIGHT
  PASS  weight budget found assets to measure  8 files
  PASS  both JS and CSS were measured  js 46164 B, css 14733 B
  PASS  first-load JS under 120 kB  45.1 kB
  PASS  CSS under 60 kB  14.4 kB

CONTENT INTEGRITY  (reported, does not fail the build)

========================================================================
All technical checks passed.
Content: every item verified.
========================================================================
```
