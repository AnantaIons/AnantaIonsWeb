import { textPath, textWidth } from './LedMatrix.jsx';

/* A single-colour P10 board of any size, with text placed like a real
   advertising controller would: each item has its own font size, position
   and effect.

   panels: [across, down] — each P10 is 32 × 16 LEDs (320 × 160 mm).
   items:  { text, y, size: 1|2|3|4, align: 'left'|'center'|'right', x,
             effect: 'static'|'scroll'|'blink', speed }
   colour: 'amber' | 'red' | 'white' | 'green'

   Everything is in the prerendered SVG, so boards read without JavaScript;
   scroll and blink are CSS and stop under reduced motion. */

export const LED_COLOURS = {
  amber: { label: 'Amber', on: '#FFA000', off: '#2B1600', glow: '255, 140, 0' },
  red:   { label: 'Red',   on: '#FF3B2F', off: '#2A0806', glow: '255, 50, 35' },
  white: { label: 'White', on: '#F2F4FF', off: '#1B1C21', glow: '220, 228, 255' },
  green: { label: 'Green', on: '#2BE07F', off: '#06240F', glow: '40, 220, 120' },
};

export default function LedBoard({ id, panels, items, colour = 'amber', framed = true }) {
  const [across, down] = panels;
  const cols = across * 32;
  const rows = down * 16;
  const c = LED_COLOURS[colour];

  return (
    <div
      className={`board${framed ? ' board--framed' : ''}`}
      style={{ '--led-on': c.on, '--led-off': c.off, '--led-glow': c.glow, aspectRatio: `${cols} / ${rows}` }}
      aria-hidden="true"
    >
      <svg viewBox={`0 0 ${cols} ${rows}`} preserveAspectRatio="xMidYMid meet" focusable="false">
        <defs>
          <pattern id={`${id}-off`} width="1" height="1" patternUnits="userSpaceOnUse">
            <circle cx=".5" cy=".5" r=".36" className="board__off" />
          </pattern>
          <pattern id={`${id}-on`} width="1" height="1" patternUnits="userSpaceOnUse">
            <circle cx=".5" cy=".5" r=".42" className="board__on" />
          </pattern>
          <clipPath id={`${id}-clip`}><rect width={cols} height={rows} /></clipPath>
        </defs>
        <rect width={cols} height={rows} fill={`url(#${id}-off)`} />
        {/* panel seams, faint, the way real boards show them up close */}
        <g className="board__seams">
          {Array.from({ length: across - 1 }, (_, i) => (
            <line key={`v${i}`} x1={(i + 1) * 32} y1="0" x2={(i + 1) * 32} y2={rows} />
          ))}
          {Array.from({ length: down - 1 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={(i + 1) * 16} x2={cols} y2={(i + 1) * 16} />
          ))}
        </g>
        <g clipPath={`url(#${id}-clip)`}>
          {items.map((it, i) => {
            const size = it.size || 1;
            const w = textWidth(it.text, size);
            const y = it.y ?? 1;
            if (it.effect === 'scroll') {
              // Enters from the right edge, leaves past the left, repeats —
              // like a real board. Static (no JS / reduced motion): parked at the left edge.
              const travel = cols + w;
              return (
                <g key={i} className="board__scroll"
                  style={{ '--park': `-${cols - 2}px`, '--travel': `-${travel}px`, '--steps': travel, '--dur': `${(travel / (it.speed || 24)).toFixed(1)}s` }}>
                  <path d={textPath(it.text, cols, y, size)} fill={`url(#${id}-on)`} />
                </g>
              );
            }
            const x = it.x ?? (it.align === 'left' ? 2 : it.align === 'right' ? cols - w - 2 : Math.floor((cols - w) / 2));
            return (
              <path key={i} d={textPath(it.text, x, y, size)} fill={`url(#${id}-on)`}
                className={it.effect === 'blink' ? 'board__blink' : undefined} />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
