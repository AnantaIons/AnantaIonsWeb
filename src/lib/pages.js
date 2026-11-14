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
    title: 'ANANTA IONS | Electronics & Embedded Product Engineering',
    description:
      'ANANTA IONS designs electronics and firmware for companies, startups and students in ' +
      'Jaipur, and is building LED notice boards for campuses.',
    priority: '1.0',
  },
  {
    key: 'products', route: '/products/', file: 'products/index.html', component: 'Products',
    title: 'LED notice boards for schools and colleges | ANANTA IONS',
    description:
      'LED notice boards for campuses that can all be updated from one dashboard, with ' +
      'scheduled notices and emergency alerts. In development in Jaipur.',
    priority: '1.0',
  },
  {
    key: 'services', route: '/services/', file: 'services/index.html', component: 'Services',
    title: 'Services — firmware, electronics, IoT, student projects | ANANTA IONS',
    description:
      'Firmware, circuit design, IoT, LED displays and help with engineering student ' +
      'projects, from ANANTA IONS in Jaipur.',
    priority: '0.9',
  },
  {
    key: 'projects', route: '/projects/', file: 'projects/index.html', component: 'Projects',
    title: 'Projects | ANANTA IONS',
    description:
      'Projects by ANANTA IONS: a campus LED display network, an SMS-controlled notice ' +
      'board and a GSM remote switch, with the problem each one solves.',
    priority: '0.8',
  },
  {
    key: 'about', route: '/about/', file: 'about/index.html', component: 'About',
    title: 'About | ANANTA IONS',
    description:
      'ANANTA IONS is a small electronics and embedded engineering company in Jaipur. ' +
      'Who we are, what we care about and how a project runs.',
    priority: '0.7',
  },
  {
    key: 'start', route: '/start/', file: 'start/index.html', component: 'Start',
    title: 'Contact | ANANTA IONS',
    description:
      'Contact ANANTA IONS in Jaipur by WhatsApp, phone or email about LED displays, ' +
      'firmware, electronics or student projects.',
    priority: '0.9',
  },
  {
    key: 'notfound', route: '/404.html', file: '404.html', component: 'NotFound',
    title: 'Page not found | ANANTA IONS',
    description:
      'That page is not here. Routes back to the ANANTA IONS display system, ' +
      'services, projects and contact page.',
    priority: '0.0',
    // Not a destination: kept out of the sitemap and marked noindex.
    indexable: false,
  },
];

export const pageByKey = (key) => pages.find((p) => p.key === key);
