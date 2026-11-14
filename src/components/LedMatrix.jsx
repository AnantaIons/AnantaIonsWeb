/* A P10 LED board, drawn — the product itself as the hero image.

   Four P10 panels side by side: 128 × 16 LEDs. The unlit grid is one rect
   filled with a dot pattern; the message is one path of 2 × 2 blocks filled
   with a lit-dot pattern, so every glyph pixel resolves into four discrete
   LEDs exactly as on the real panel. The whole thing is a few kilobytes and
   is in the prerendered HTML, so it shows without JavaScript; with JavaScript
   the message scrolls one LED column per step, never between LEDs. */

const FONT = {
  A: ['01110','10001','10001','11111','10001','10001','10001'],
  B: ['11110','10001','10001','11110','10001','10001','11110'],
  H: ['10001','10001','10001','11111','10001','10001','10001'],
  X: ['10001','10001','01010','00100','01010','10001','10001'],
  C: ['01110','10001','10000','10000','10000','10001','01110'],
  D: ['11110','10001','10001','10001','10001','10001','11110'],
  E: ['11111','10000','10000','11110','10000','10000','11111'],
  I: ['11111','00100','00100','00100','00100','00100','11111'],
  K: ['10001','10010','10100','11000','10100','10010','10001'],
  L: ['10000','10000','10000','10000','10000','10000','11111'],
  M: ['10001','11011','10101','10101','10001','10001','10001'],
  N: ['10001','11001','10101','10011','10001','10001','10001'],
  O: ['01110','10001','10001','10001','10001','10001','01110'],
  P: ['11110','10001','10001','11110','10000','10000','10000'],
  R: ['11110','10001','10001','11110','10100','10010','10001'],
  S: ['01111','10000','10000','01110','00001','00001','11110'],
  T: ['11111','00100','00100','00100','00100','00100','00100'],
  U: ['10001','10001','10001','10001','10001','10001','01110'],
  W: ['10001','10001','10001','10101','10101','10101','01010'],
  Y: ['10001','10001','01010','00100','00100','00100','00100'],
  0: ['01110','10011','10101','10101','11001','10001','01110'],
  1: ['00100','01100','00100','00100','00100','00100','01110'],
  2: ['01110','10001','00001','00010','00100','01000','11111'],
  3: ['11110','00001','00001','01110','00001','00001','11110'],
  '-': ['00000','00000','00000','01110','00000','00000','00000'],
  '·': ['00000','00000','00000','00110','00110','00000','00000'],
  ' ': ['00000','00000','00000','00000','00000','00000','00000'],
};

const COLS = 128;            // four P10 panels wide
const SCALE = 2;             // each glyph pixel = 2 × 2 LEDs
const ADVANCE = 6 * SCALE;   // 5 columns + 1 gap

function glyphPath(text, x0, top) {
  let d = '';
  [...text].forEach((ch, i) => {
    const g = FONT[ch] || FONT[' '];
    g.forEach((row, y) => {
      for (let x = 0; x < 5; x++) {
        if (row[x] === '1') d += `M${x0 + i * ADVANCE + x * SCALE} ${top + y * SCALE}h2v2h-2z`;
      }
    });
  });
  return d;
}

/* `lines`: one per panel row (16 LEDs tall). A line with `scroll` loops
   right-to-left; the others are centred and static. Default is the first
   real build: a 4 × 3 board, 12 panels. */
const DEFAULT_LINES = [
  { text: 'ANANTA IONS · CAMPUS DISPLAY NETWORK · ', scroll: true },
  { text: 'P10 · HUB12' },
  { text: 'ESP32-S3' },
];

export default function LedMatrix({ lines = DEFAULT_LINES, label = '4 × 3 P10 · 128 × 48 LEDs' }) {
  const ROWS = lines.length * 16;
  return (
    <figure className="matrix" aria-hidden="true">
      <div className="matrix__frame">
        <svg viewBox={`0 0 ${COLS} ${ROWS}`} preserveAspectRatio="xMidYMid meet" focusable="false">
          <defs>
            <pattern id="led-off" width="1" height="1" patternUnits="userSpaceOnUse">
              <circle cx=".5" cy=".5" r=".36" className="matrix__off" />
            </pattern>
            <pattern id="led-on" width="1" height="1" patternUnits="userSpaceOnUse">
              <circle cx=".5" cy=".5" r=".4" className="matrix__on" />
            </pattern>
          </defs>
          <rect width={COLS} height={ROWS} fill="url(#led-off)" />
          {lines.map((l, i) => {
            const top = i * 16 + 1;
            if (l.scroll) {
              const width = l.text.length * ADVANCE;
              return (
                <g key={i} className="matrix__scroll"
                  style={{ '--shift': `-${width}px`, '--steps': width, '--dur': `${(width / 24).toFixed(1)}s` }}>
                  <path d={glyphPath(l.text, 0, top) + glyphPath(l.text, width, top)} fill="url(#led-on)" />
                </g>
              );
            }
            const w = l.text.length * ADVANCE - SCALE;
            const x0 = Math.floor((COLS - w) / 2);
            return <path key={i} d={glyphPath(l.text, x0, top)} fill="url(#led-on)" />;
          })}
        </svg>
      </div>
      <figcaption className="matrix__meta">
        <span>{label}</span>
        <span>Wi-Fi managed</span>
      </figcaption>
    </figure>
  );
}
