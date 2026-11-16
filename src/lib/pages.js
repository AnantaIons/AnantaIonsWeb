/* Single source of truth for the site's pages: routing, <head> metadata and
   structured data all derive from this list, so a page cannot drift out of
   the sitemap, the nav or its own canonical URL. */

/* The production domain. SITE_ORIGIN overrides it so a preview deployment
   (GitHub Pages) emits canonicals, Open Graph URLs and a sitemap that point at
   where it is actually served, rather than at a domain that is not live yet.

   The host is lowercased. Hostnames are case-insensitive and every URL parser
   normalises them, so "https://AnantaIons.github.io" and the lowercase form are
   the same address — but they are not the same *string*, and a canonical is
   compared as a string. The GitHub Actions context hands back the account's
   display casing, so without this a canonical would be emitted mixed-case and
   read back lowercase from the DOM, which is both sloppy output and a false
   mismatch. Normalising once here fixes the emitted URL and the comparison. */
const RAW_ORIGIN =
  (typeof process !== 'undefined' && process.env && process.env.SITE_ORIGIN) ||
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_ORIGIN) ||
  'https://anantaions.com';

export const ORIGIN = RAW_ORIGIN.replace(
  /^([a-zA-Z][a-zA-Z0-9+.-]*:\/\/)([^/?#]+)/,
  (_, scheme, host) => scheme.toLowerCase() + host.toLowerCase(),
).replace(/\/$/, '');

export const pages = [
  {
    key: 'home', route: '/', file: 'index.html', component: 'Home',
    title: 'ANANTA IONS | LED Displays, Websites & College Projects, Jaipur',
    description:
      'LED display boards made to order, websites for local businesses, college projects ' +
      'and electronic components — from ANANTA IONS in Jaipur.',
    priority: '1.0',
  },
  {
    key: 'displays', route: '/displays/', file: 'displays/index.html', component: 'Displays',
    title: 'LED display boards in Jaipur — made to order | ANANTA IONS',
    description:
      'Custom LED notice boards and scrolling displays for schools, colleges, shops and ' +
      'offices, updated by SMS or Wi-Fi. Try the live demo.',
    priority: '1.0',
  },
  {
    key: 'websites', route: '/websites/', file: 'websites/index.html', component: 'Websites',
    title: 'Websites for shops, schools and small businesses | ANANTA IONS',
    description:
      'Fast, mobile-friendly websites with WhatsApp and call buttons, set up on your own ' +
      'domain. Built in Jaipur by ANANTA IONS.',
    priority: '0.9',
  },
  {
    key: 'college-projects', route: '/college-projects/', file: 'college-projects/index.html', component: 'CollegeProjects',
    title: 'College projects — electronics, IoT, LED displays | ANANTA IONS',
    description:
      'Final-year and mini projects that work: hardware, source code and viva support. ' +
      '10% student discount. ANANTA IONS, Jaipur.',
    priority: '0.9',
  },
  {
    key: 'shop', route: '/shop/', file: 'shop/index.html', component: 'Shop',
    title: 'Components — P10 LED modules, ESP32, Arduino | ANANTA IONS',
    description:
      'P10 LED modules, LED power supplies, ESP32 and Arduino boards and GSM modules. ' +
      'Order on WhatsApp, pickup in Jaipur.',
    priority: '0.9',
  },
  {
    key: 'start', route: '/start/', file: 'start/index.html', component: 'Start',
    title: 'Contact | ANANTA IONS',
    description:
      'Contact ANANTA IONS in Jaipur by WhatsApp, phone or email about LED displays, ' +
      'websites, college projects or components.',
    priority: '0.8',
  },
  {
    key: 'notfound', route: '/404.html', file: '404.html', component: 'NotFound',
    title: 'Page not found | ANANTA IONS',
    description:
      'That page is not here. Routes back to the ANANTA IONS LED displays, websites, ' +
      'college projects, shop and contact page.',
    priority: '0.0',
    // Not a destination: kept out of the sitemap and marked noindex.
    indexable: false,
  },
];

export const pageByKey = (key) => pages.find((p) => p.key === key);
