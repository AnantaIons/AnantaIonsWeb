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
  proposition: 'Engineering intelligence between silicon and the real world.',
  discipline: 'Electronics & Embedded Product Engineering',
  description:
    'ANANTA IONS engineers electronics, embedded systems, firmware, connectivity ' +
    'and intelligent products — from architecture and prototype to real-world deployment.',
  // Replace with the production origin before launch. Used for canonical URLs,
  // Open Graph and sitemap generation.
  origin: 'https://anantaions.com',
};

/* Contact details. `verified: true` means the value was supplied by ANANTA
   IONS; anything still false renders with a visible placeholder marker. */
export const contact = {
  email:    { value: 'ananta.ions@outlook.com',        verified: true },
  github:   { value: 'https://github.com/AnantaIons',  verified: true },
  phone:    { value: null,                             verified: false },
  location: { value: null,                             verified: false },
  /* Where the intake form POSTs. Leave null and the form tells the visitor
     honestly that submission is not connected, and offers the email route —
     it never shows a false confirmation. */
  formEndpoint: null,
};

export const nav = [
  { label: 'Engineering',  href: '/engineering/'  },
  { label: 'Capabilities', href: '/capabilities/' },
  { label: 'Projects',     href: '/projects/'     },
  { label: 'About',        href: '/about/'        },
  { label: 'Contact',      href: '/start/'        },
];

export const primaryCta = { label: 'Start a project', href: '/start/' };
