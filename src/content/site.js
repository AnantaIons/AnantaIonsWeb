/* ============================================================================
   ANANTA IONS — site-level content.

   CONTENT INTEGRITY RULE
   Anything not established by supplied ANANTA IONS source material carries
   `verified: false` and renders with a visible PLACEHOLDER marker. Nothing
   unverified is ever presented as fact. `npm run qa` lists every unverified
   item; see docs/CONTENT-TODO.md.
   ========================================================================= */

export const site = {
  name: 'ANANTA IONS',
  // The core brand idea, supplied in the brief.
  proposition: 'LED displays, websites, embedded engineering and electronic components — from Jaipur.',
  discipline: 'Displays · Websites · Engineering · Components',
  description:
    'ANANTA IONS designs electronics and firmware for companies, startups and students in ' +
    'Jaipur, and is building LED notice boards for campuses.',
  // Replace with the production origin before launch. Used for canonical URLs,
  // Open Graph and sitemap generation.
  origin: 'https://anantaions.com',
};

/* Contact details. `verified: true` means the value was supplied by ANANTA
   IONS; anything still false renders with a visible placeholder marker. */
export const contact = {
  email:    { value: 'ananta.ions@outlook.com',        verified: true },
  github:   { value: 'https://github.com/AnantaIons',  verified: true },
  phone:    { value: '+91 78911 47275',                verified: true },
  whatsapp: { value: '917891147275',                   verified: true },
  location: { value: 'Jaipur, Rajasthan, India',       verified: true },
  /* Where the intake form POSTs. Leave null and the form tells the visitor
     honestly that submission is not connected, and offers the email route —
     it never shows a false confirmation. */
  formEndpoint: null,
};

export const nav = [
  { label: 'Displays',         href: '/displays/'         },
  { label: 'Websites',         href: '/websites/'         },
  { label: 'Engineering',      href: '/engineering/'      },
  { label: 'Shop',             href: '/shop/'             },
  { label: 'College Projects', href: '/college-projects/' },
  { label: 'Journal',          href: '/journal/'          },
];

export const primaryCta = { label: 'Contact us', href: '/start/' };
