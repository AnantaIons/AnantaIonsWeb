/* The ANANTA IONS display network — the company's own product.

   Everything here describes the design as it stands (Rev A). Status is stated
   plainly: the controller and the content platform are in development, so
   nothing below claims installations, customers or measured performance. */

export const product = {
  name: 'ANANTA IONS Display Network',
  status: 'In development',
  oneLine:
    'Wi-Fi managed P10 LED displays for campuses — one controller per board, one ' +
    'dashboard for every board on site.',
  audience: 'Schools, colleges and institutions',
};

/* Design facts for the Rev A controller. */
export const specs = [
  { value: 'ESP32-S3', caption: 'dual-core Wi-Fi MCU, 16 MB flash and 8 MB PSRAM (WROOM-1-N16R8)' },
  { value: '8', caption: 'HUB12 output ports per controller, each series-terminated' },
  { value: '4×3', caption: 'P10 panels on the first build — a 12-panel board' },
];

export const hardware = [
  ['Controller', 'ESP32-S3-WROOM-1-N16R8 — dual-core, Wi-Fi, 16 MB flash, 8 MB PSRAM.'],
  ['Panel interface', 'HUB12, single-colour P10 modules, 1/4 scan.'],
  ['Level shifting', '74AHCT245 buffers lift the 3.3 V logic to the 5 V the panels expect.'],
  ['Signal integrity', '33 Ω series termination on every output line across all eight ports.'],
  ['Power', 'Dedicated SMPS supply sized for the panel load, separate from logic power.'],
];

/* The content platform. Features listed are the ones in development. */
export const platform = [
  {
    icon: 'layers', title: 'Playlists and scheduling',
    body: 'Content is scheduled on the server. Morning assembly, class changes and exam ' +
          'days each get their own playlist, and the board follows the clock.',
  },
  {
    icon: 'alert', title: 'Emergency override',
    body: 'One action replaces every board on campus with an alert, and returns them to ' +
          'their schedule when it is cleared.',
  },
  {
    icon: 'network', title: 'Content from existing systems',
    body: 'Timetables, notices and results pulled from the systems a school already uses, ' +
          'so nobody retypes a notice for the board.',
  },
  {
    icon: 'display', title: 'Animation library',
    body: 'Built-in transitions and effects designed for a single-colour matrix, ready to ' +
          'apply without drawing anything.',
  },
];

export const roadmap = [
  ['Now', 'First 12-panel board built on the Rev A controller design.'],
  ['Next', 'Pilot installations at schools and colleges in Jaipur.'],
  ['Then', 'Over-the-air updates and synchronised playback across boards.'],
];
