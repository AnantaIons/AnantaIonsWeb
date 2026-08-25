/* JSON-LD. Machine readers get the same facts as human readers, and no facts
   the human page does not also state. Nothing unverified is emitted here —
   placeholder projects are deliberately NOT published as structured data,
   because schema.org output is exactly where an unverified claim would travel
   furthest. */

import { ORIGIN } from './pages.js';

const ORG_ID = `${ORIGIN}/#organization`;

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'ANANTA IONS',
    url: `${ORIGIN}/`,
    logo: `${ORIGIN}/logo.png`,
    description:
      'ANANTA IONS engineers electronics, embedded systems, firmware, connectivity and ' +
      'intelligent products — from architecture and prototype to real-world deployment.',
    slogan: 'Engineering intelligence between silicon and the real world.',
    knowsAbout: [
      'Embedded systems engineering', 'Firmware development', 'Electronics design',
      'Printed circuit board bring-up', 'Real-time operating systems',
      'Bluetooth Low Energy', 'LoRa', 'Wi-SUN', 'CAN bus', 'RS-485',
      'Edge AI', 'TinyML', 'Digital signal processing', 'Energy metrology',
      'Industrial IoT', 'Embedded displays',
    ],
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${ORIGIN}/#website`,
    url: `${ORIGIN}/`,
    name: 'ANANTA IONS',
    publisher: { '@id': ORG_ID },
    inLanguage: 'en',
  };
}

export function webPageSchema(page) {
  return {
    '@type': 'WebPage',
    '@id': `${ORIGIN}${page.route}#webpage`,
    url: `${ORIGIN}${page.route}`,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': `${ORIGIN}/#website` },
    about: { '@id': ORG_ID },
    inLanguage: 'en',
  };
}

export function servicesSchema(capabilities) {
  return capabilities.map((c) => ({
    '@type': 'Service',
    '@id': `${ORIGIN}/capabilities/#${c.id}`,
    name: c.label,
    serviceType: c.label,
    description: c.what,
    provider: { '@id': ORG_ID },
    areaServed: 'Worldwide',
  }));
}

export function breadcrumbSchema(page) {
  if (page.route === '/') return null;
  const name = page.title.split('—')[0].split('|')[0].trim();
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
      { '@type': 'ListItem', position: 2, name, item: `${ORIGIN}${page.route}` },
    ],
  };
}

/** The full graph for one page. */
export function graphFor(page, { capabilities } = {}) {
  const graph = [organizationSchema(), websiteSchema(), webPageSchema(page)];
  const crumbs = breadcrumbSchema(page);
  if (crumbs) graph.push(crumbs);
  if (page.key === 'capabilities' && capabilities) graph.push(...servicesSchema(capabilities));
  return { '@context': 'https://schema.org', '@graph': graph };
}
