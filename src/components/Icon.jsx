/* A small, purpose-built stroke-icon family. Replaces the Font Awesome CDN
   (≈100 KB + a third-party connection) with ~2 KB of inline SVG in one
   consistent optical style: 24px grid, 1.5 stroke, square caps — drawing
   instruments, not app icons. Icons are decorative by default; pass a
   `title` only when the icon is the sole carrier of meaning. */

const P = {
  arrow:      'M3.5 12h15M12.5 5.5 19 12l-6.5 6.5',
  chevron:    'M9 5.5 15.5 12 9 18.5',
  chevronDown:'M5.5 9 12 15.5 18.5 9',
  menu:       'M3 6.5h18M3 12h18M3 17.5h18',
  close:      'M5.5 5.5l13 13M18.5 5.5l-13 13',
  check:      'M4 12.5l5 5L20 6.5',
  chip:       'M7.5 7.5h9v9h-9zM10 3.5v4M14 3.5v4M10 16.5v4M14 16.5v4M3.5 10h4M3.5 14h4M16.5 10h4M16.5 14h4',
  signal:     'M1.5 12h3.5l3-8 4.5 16 3-8h6.5',
  broadcast:  'M12 10.5v0M8.2 8.2a5.4 5.4 0 0 0 0 7.6M15.8 8.2a5.4 5.4 0 0 1 0 7.6M5.4 5.4a9.4 9.4 0 0 0 0 13.2M18.6 5.4a9.4 9.4 0 0 1 0 13.2',
  network:    'M12 3.5v5M12 15.5v5M6 12H3.5M20.5 12H18M12 8.5 6 12M12 8.5l6 3.5M6 12l6 3.5M18 12l-6 3.5',
  display:    'M3 4.5h18v11H3zM9 19.5h6M12 15.5v4',
  power:      'M13.5 2.5 5.5 13.5h5l-1 8 8-11h-5z',
  layers:     'M12 3 3 7.5l9 4.5 9-4.5zM3 12l9 4.5 9-4.5M3 16.5 12 21l9-4.5',
  gauge:      'M4 18a8.5 8.5 0 1 1 16 0M12 12.5l4-3.5',
  clip:       'M16.5 7.5 9 15a2.8 2.8 0 0 0 4 4l7-7a5 5 0 0 0-7-7L5 12.5a7.2 7.2 0 0 0 10 10l6-6',
  mail:       'M2.5 5.5h19v13h-19zM2.5 6l9.5 7 9.5-7',
  external:   'M14 4.5h5.5V10M19.5 4.5 11 13M17 13.5v6h-13v-13h6',
  alert:      'M12 3.5 2.5 20h19zM12 9.5v5M12 17v0',
  loader:     'M12 3.5a8.5 8.5 0 1 0 8.5 8.5',
};

export default function Icon({ name, size = 20, title, className = '', strokeWidth = 1.5 }) {
  const d = P[name];
  if (!d) return null;
  return (
    <svg
      className={`icon ${className}`.trim()}
      width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="square" strokeLinejoin="miter"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : 'true'}
      aria-label={title || undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <path d={d} />
    </svg>
  );
}
