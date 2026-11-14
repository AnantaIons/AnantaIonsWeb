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
      'ANANTA IONS engineers electronics, embedded systems, firmware, connectivity and ' +
      'intelligent products — from architecture and prototype to real-world deployment.',
    priority: '1.0',
  },
  {
    key: 'products', route: '/products/', file: 'products/index.html', component: 'Products',
    title: 'P10 LED display network for campuses | ANANTA IONS',
    description:
      'A Wi-Fi managed P10 LED display controller built on the ESP32-S3, with a cloud ' +
      'content system for schools, colleges and institutions. Now in development in Jaipur.',
    priority: '1.0',
  },
  {
    key: 'services', route: '/services/', file: 'services/index.html', component: 'Services',
    title: 'Services — firmware, electronics, IoT, student projects | ANANTA IONS',
    description:
      'Embedded firmware, electronics design, connectivity, display systems, edge ' +
      'intelligence and engineering projects for students — what each covers and what it fixes.',
    priority: '0.9',
  },
  {
    key: 'projects', route: '/projects/', file: 'projects/index.html', component: 'Projects',
    title: 'Projects — embedded systems we have built | ANANTA IONS',
    description:
      'Embedded systems engineered by ANANTA IONS: the P10 display controller, a GSM SMS ' +
      'notice board and a GSM remote controller on an ATtiny85 — problem, build and status.',
    priority: '0.8',
  },
  {
    key: 'about', route: '/about/', file: 'about/index.html', component: 'About',
    title: 'About — embedded engineering from Jaipur | ANANTA IONS',
    description:
      'ANANTA IONS is a hardware and embedded systems company in Jaipur: how it works, ' +
      'what it believes about engineering, and the sectors it builds for.',
    priority: '0.7',
  },
  {
    key: 'start', route: '/start/', file: 'start/index.html', component: 'Start',
    title: 'Contact — start a project | ANANTA IONS',
    description:
      'Tell ANANTA IONS what has to work. Send the brief on WhatsApp or by email, or call. ' +
      'Display systems, firmware, electronics and student projects, from Jaipur.',
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
