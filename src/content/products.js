/* The ANANTA IONS display network — the company's own product.

   Everything here describes the design as it stands (Rev A). Status is stated
   plainly: the controller and the content platform are in development, so
   nothing below claims installations, customers or measured performance. */

export const product = {
  name: 'ANANTA IONS Display Network',
  status: 'In development',
  oneLine:
    'P10 LED boards connected over Wi-Fi, so every board on a campus can be updated ' +
    'from one dashboard.',
  audience: 'Schools, colleges and institutions',
};

/* What a campus gets. */
export const benefits = [
  { value: 'One', caption: 'dashboard to update every board on campus' },
  { value: 'Instant', caption: 'emergency messages on all boards at once' },
  { value: 'Scheduled', caption: 'notices that change automatically through the day' },
];

/* The content platform. Features listed are the ones in development. */
export const platform = [
  {
    icon: 'layers', title: 'Playlists and scheduling',
    body: 'Set what each board shows and when. For example, assembly notices in the ' +
          'morning and exam timings on exam days.',
  },
  {
    icon: 'alert', title: 'Emergency override',
    body: 'Show an urgent message on every board at once. When it is cleared, the boards ' +
          'go back to their normal schedule.',
  },
  {
    icon: 'network', title: 'Content from existing systems',
    body: 'Show timetables and notices from the software the school already uses, ' +
          'without typing them again.',
  },
  {
    icon: 'display', title: 'Animation library',
    body: 'Ready-made scrolling and transition effects for single-colour boards.',
  },
];

export const roadmap = [
  ['Now', 'Building and testing the first full-size board.'],
  ['Next', 'Pilot installations at schools and colleges in Jaipur.'],
  ['Then', 'Wider rollout, with all boards on a campus showing content in sync.'],
];
