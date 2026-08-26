/* Single source of truth for the site's pages: routing, <head> metadata and
   structured data all derive from this list, so a page cannot drift out of
   the sitemap, the nav or its own canonical URL. */

export const ORIGIN = 'https://anantaions.com';

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
    key: 'engineering', route: '/engineering/', file: 'engineering/index.html', component: 'Engineering',
    title: 'Engineering — the stack from silicon to product | ANANTA IONS',
    description:
      'The six layers ANANTA IONS engineers across: silicon, hardware, firmware, ' +
      'connectivity, on-device intelligence and production. Plus how a project runs.',
    priority: '0.9',
  },
  {
    key: 'capabilities', route: '/capabilities/', file: 'capabilities/index.html', component: 'Capabilities',
    title: 'Capabilities — electronics, firmware, edge AI | ANANTA IONS',
    description:
      'Seven engineering disciplines: electronics, embedded systems, firmware, ' +
      'connectivity, intelligent systems, displays and product engineering — what each ' +
      'does, how, and the failure it prevents.',
    priority: '0.9',
  },
  {
    key: 'projects', route: '/projects/', file: 'projects/index.html', component: 'Projects',
    title: 'Projects — embedded systems case studies | ANANTA IONS',
    description:
      'Embedded and electronics systems engineered by ANANTA IONS: the problem, the ' +
      'architecture, the technology and the engineering behind each one.',
    priority: '0.8',
  },
  {
    key: 'about', route: '/about/', file: 'about/index.html', component: 'About',
    title: 'About — an engineering partner, not a services desk | ANANTA IONS',
    description:
      'How ANANTA IONS works: engineering-first decisions, low-level expertise, hardware ' +
      'and firmware together, and the industries the work runs in.',
    priority: '0.7',
  },
  {
    key: 'start', route: '/start/', file: 'start/index.html', component: 'Start',
    title: 'Start a project — engineering intake | ANANTA IONS',
    description:
      'Tell ANANTA IONS what has to work. A four-step engineering intake covering the ' +
      'problem, the hardware, the firmware and intelligence, and how it has to ship.',
    priority: '0.9',
  },
  {
    key: 'notfound', route: '/404.html', file: '404.html', component: 'NotFound',
    title: 'Page not found | ANANTA IONS',
    description:
      'That page is not here. Routes back to the ANANTA IONS engineering stack, ' +
      'capabilities, projects and project intake.',
    priority: '0.0',
    // Not a destination: kept out of the sitemap and marked noindex.
    indexable: false,
  },
];

export const pageByKey = (key) => pages.find((p) => p.key === key);
