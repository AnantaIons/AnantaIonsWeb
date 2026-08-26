# ANANTA IONS — QA report

Generated 2026-08-26T08:56:19.200Z by `npm run qa` against the production build in `dist/`.

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
  PASS  canonical correct  https://anantaions.github.io/AnantaIonsWeb/
  PASS  open graph complete
  PASS  page advertises absolute URLs to verify  8
  PASS  every advertised URL resolves
  PASS  JSON-LD graph present
  PASS  no console errors
  PASS  no duplicate ids
  PASS  no illegible SVG type
  PASS  skip link is focusable

 /engineering/
  PASS  axe (desktop)
  PASS  axe (390px)
  PASS  exactly one h1  found 1
  PASS  heading levels never skip
  PASS  landmarks present
  PASS  every image has alt  0 missing
  PASS  skip link present
  PASS  html lang set
  PASS  title present and <= 70 chars  61
  PASS  meta description 70–200 chars  151
  PASS  canonical correct  https://anantaions.github.io/AnantaIonsWeb/engineering/
  PASS  open graph complete
  PASS  page advertises absolute URLs to verify  9
  PASS  every advertised URL resolves
  PASS  JSON-LD graph present
  PASS  no console errors
  PASS  no duplicate ids
  PASS  no illegible SVG type
  PASS  skip link is focusable

 /capabilities/
  PASS  axe (desktop)
  PASS  axe (390px)
  PASS  exactly one h1  found 1
  PASS  heading levels never skip
  PASS  landmarks present
  PASS  every image has alt  0 missing
  PASS  skip link present
  PASS  html lang set
  PASS  title present and <= 70 chars  59
  PASS  meta description 70–200 chars  191
  PASS  canonical correct  https://anantaions.github.io/AnantaIonsWeb/capabilities/
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
  PASS  title present and <= 70 chars  54
  PASS  meta description 70–200 chars  142
  PASS  canonical correct  https://anantaions.github.io/AnantaIonsWeb/projects/
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
  PASS  title present and <= 70 chars  65
  PASS  meta description 70–200 chars  141
  PASS  canonical correct  https://anantaions.github.io/AnantaIonsWeb/about/
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
  PASS  title present and <= 70 chars  50
  PASS  meta description 70–200 chars  156
  PASS  canonical correct  https://anantaions.github.io/AnantaIonsWeb/start/
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
  PASS  meta description 70–200 chars  115
  PASS  canonical correct  https://anantaions.github.io/AnantaIonsWeb/404.html
  PASS  open graph complete
  PASS  page advertises absolute URLs to verify  9
  PASS  every advertised URL resolves
  PASS  JSON-LD graph present
  PASS  no console errors
  PASS  no duplicate ids
  PASS  no illegible SVG type
  PASS  skip link is focusable

DEEP LINKS
  PASS  /engineering/#process lands on target  top 96
  PASS  /engineering/#connectivity lands on target  top 96
  PASS  /about/#industries lands on target  top 96
  PASS  /start/#contact lands on target  top 96
  PASS  /projects/#ble-sensor-bridge lands on target  top 78
  PASS  /#stack lands on target  top 96

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
  PASS  / readable without JS  9343 chars (min 500), 0 hidden
  PASS  /engineering/ readable without JS  4952 chars (min 500), 0 hidden
  PASS  /capabilities/ readable without JS  3504 chars (min 500), 0 hidden
  PASS  /projects/ readable without JS  6185 chars (min 500), 0 hidden
  PASS  /about/ readable without JS  2011 chars (min 500), 0 hidden
  PASS  /start/ readable without JS  1313 chars (min 500), 0 hidden
  PASS  /404.html readable without JS  363 chars (min 200), 0 hidden

WEIGHT
  PASS  weight budget found assets to measure  6 files
  PASS  both JS and CSS were measured  js 64557 B, css 50432 B
  PASS  first-load JS under 120 kB  63.0 kB
  PASS  CSS under 60 kB  49.3 kB

CONTENT INTEGRITY  (reported, does not fail the build)
  TODO  project "DLMS/COSEM Protocol Analyzer" is unverified placeholder content
  TODO  project "Environment Monitoring Node" is unverified placeholder content
  TODO  project "Sub-GHz Telemetry Gateway" is unverified placeholder content
  TODO  project "Tamper-Aware Metering Module" is unverified placeholder content
  TODO  project "BLE Sensor Bridge" is unverified placeholder content
  TODO  project "CAN Industrial Controller" is unverified placeholder content
  TODO  no phone number supplied
  TODO  no location supplied
  TODO  intake form has no endpoint — submission is disabled and says so

========================================================================
All technical checks passed.
NOT LAUNCH-READY: 9 content item(s) still unverified. See docs/CONTENT-TODO.md.
========================================================================
```
