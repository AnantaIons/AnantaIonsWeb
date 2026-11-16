/* ============================================================================
   What ANANTA IONS offers — four areas, LED displays first.
   Each entry drives a home-page card, a nav item, and a schema.org Service.
   ========================================================================= */

export const capabilities = [
  {
    id: 'displays', route: '/displays/', icon: 'display', label: 'LED Display Systems',
    short: 'LED displays',
    what: 'Custom LED notice boards and scrolling displays for schools, colleges, shops and offices — updated over Wi-Fi or by SMS.',
  },
  {
    id: 'websites', route: '/websites/', icon: 'layers', label: 'Websites',
    short: 'Websites',
    what: 'Fast, mobile-friendly websites for shops, schools, coaching centres and small businesses, with a WhatsApp button built in.',
  },
  {
    id: 'college-projects', route: '/college-projects/', icon: 'book', label: 'College Projects',
    short: 'College projects',
    what: 'Final-year and mini projects in electronics, embedded, IoT and LED displays — working hardware, code and viva support.',
  },
  {
    id: 'shop', route: '/shop/', icon: 'chip', label: 'Electronic Components',
    short: 'Components',
    what: 'P10 LED modules, power supplies, microcontroller boards and modules. Order on WhatsApp, collect in Jaipur.',
  },
];

/* ---------------------------------------------------------------------------
   LED displays — what we make. Statuses are real; nothing here claims
   installations or customers.
   ------------------------------------------------------------------------- */
export const displayTypes = [
  {
    icon: 'display', title: 'Custom LED notice boards',
    body: 'Single-colour LED boards made to the size you need, from a single panel to a full wall.',
    status: 'Made to order',
  },
  {
    icon: 'broadcast', title: 'SMS-updated boards',
    body: 'Change the message by sending an SMS from an approved number. Works where there is no Wi-Fi.',
    status: 'Built',
  },
  {
    icon: 'network', title: 'Wi-Fi boards',
    body: 'Update the board from your phone or computer over Wi-Fi. No USB stick, no ladder.',
    status: 'In development',
  },
  {
    icon: 'layers', title: 'Campus display network',
    body: 'Every board on a campus run from one dashboard, with schedules and emergency alerts.',
    status: 'In development',
  },
];

export const displayUses = [
  ['Schools & colleges', 'Notices, timetables, exam halls, gates'],
  ['Shops & showrooms', 'Offers, timings, scrolling shop name'],
  ['Offices & hospitals', 'Token numbers, directions, announcements'],
  ['Temples & events', 'Aarti timings, event schedules, welcome messages'],
];

/* ---------------------------------------------------------------------------
   Websites.
   ------------------------------------------------------------------------- */
export const websiteKinds = [
  { icon: 'chip', title: 'Shop & business websites', body: 'Your products, services, timings and location on one clean site, with a WhatsApp button so customers can message you directly.' },
  { icon: 'book', title: 'School & coaching websites', body: 'Courses, faculty, notices, results and admissions enquiries — easy for parents to find on a phone.' },
  { icon: 'signal', title: 'Landing pages', body: 'A single focused page for a launch, an event or an ad campaign.' },
];

export const websiteIncludes = [
  'Works on every phone, tablet and computer',
  'Loads fast, even on slow mobile data',
  'WhatsApp and call buttons on every page',
  'Set up for Google search and Google Maps',
  'Hosting and your own domain name set up for you',
  'Simple to update later — or we update it for you',
];

/* ---------------------------------------------------------------------------
   College projects — a stated programme.
   ------------------------------------------------------------------------- */
export const studentProgram = {
  title: 'Final-year and mini projects',
  body:
    'We help engineering and diploma students build projects that actually work. You get ' +
    'working hardware, the source code and a clear explanation, so you can answer ' +
    'questions confidently in your viva.',
  areas: [
    ['display', 'LED display projects', 'Scrolling notice boards, SMS boards, Wi-Fi boards'],
    ['broadcast', 'GSM & IoT projects', 'Control and monitor devices by SMS, call or app'],
    ['chip', 'Embedded projects', 'Arduino, ESP32 and microcontroller-based systems'],
    ['power', 'Electronics projects', 'Sensors, power circuits and automation'],
  ],
  points: [
    'Working project with source code',
    'Circuit diagram and report support',
    'Explanation so you can answer viva questions',
    'Help with code and debugging if your project is already started',
    'Guidance on writing your research paper',
  ],
  offers: [
    ['10%', 'discount for students'],
    ['10%', 'referral commission when you bring in a new client'],
  ],
};
