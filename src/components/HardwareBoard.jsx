/* An annotated board drawing.

   Deliberately a DRAWING, not a photograph. No ANANTA IONS hardware
   photography was supplied, and a stock or generated "product" image would
   imply a product that has not been verified to exist. An engineering diagram
   claims exactly what it is.

   Accessibility and small screens are handled the same way: the SVG carries no
   meaning of its own (aria-hidden), and the annotations are real HTML text in
   the adjacent list — readable by a screen reader, by a crawler, and at 390px
   where 11px SVG type would not be. */

const BLOCKS = [
  { id: 'power',   x: 60,  y: 66,  w: 150, h: 104, tag: 'PWR' },
  { id: 'sensor',  x: 60,  y: 206, w: 150, h: 96,  tag: 'SNS' },
  { id: 'control', x: 60,  y: 338, w: 150, h: 96,  tag: 'CTL' },
  { id: 'radio',   x: 470, y: 66,  w: 170, h: 116, tag: 'RF'  },
  { id: 'display', x: 470, y: 300, w: 170, h: 134, tag: 'DSP' },
];

const TRACES = [
  { d: 'M210 118 H268 V226 H300',            len: 230, signal: false },
  { d: 'M210 254 H268 V254 H300',            len: 96,  signal: false },
  { d: 'M210 386 H252 V300 H300',            len: 180, signal: false },
  { d: 'M420 226 H452 V124 H470',            len: 150, signal: true  },
  { d: 'M420 288 H446 V352 H470',            len: 140, signal: true  },
];

export default function HardwareBoard({ annotations }) {
  return (
    <figure className="board">
      <div className="board__figure">
        <svg
          className="board__svg"
          viewBox="0 0 700 500"
          role="presentation"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <pattern id="board-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20 0H0V20" fill="none" stroke="var(--ai-line)" strokeWidth="0.5" opacity="0.5" />
            </pattern>
            <linearGradient id="board-face" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#12151a" />
              <stop offset="1" stopColor="#0a0c10" />
            </linearGradient>
          </defs>

          {/* substrate */}
          <rect x="24" y="30" width="652" height="440" rx="2"
                fill="url(#board-face)" stroke="var(--ai-line-2)" />
          <rect x="24" y="30" width="652" height="440" fill="url(#board-grid)" />

          {/* mounting holes */}
          {[[44, 50], [656, 50], [44, 450], [656, 450]].map(([cx, cy]) => (
            <g key={`${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r="7" fill="none" stroke="var(--ai-line-2)" />
              <circle cx={cx} cy={cy} r="3" fill="var(--ai-black)" />
            </g>
          ))}

          {/* functional blocks */}
          {BLOCKS.map((b) => (
            <g key={b.id}>
              <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="1"
                    fill="var(--ai-panel-2)" stroke="var(--ai-line-2)" />
              <rect x={b.x} y={b.y} width="3" height={b.h} fill="var(--ai-copper)" />
              <text x={b.x + 14} y={b.y + 24} className="board__tag">{b.tag}</text>
              {[0, 1, 2, 3].map((i) => (
                <rect key={i} x={b.x + 14 + i * 13} y={b.y + b.h - 20}
                      width="7" height="7" fill="var(--ai-line-2)" />
              ))}
            </g>
          ))}

          {/* antenna keep-out meander on the radio block */}
          <path d="M646 78 h18 v14 h-18 v14 h18 v14 h-18"
                fill="none" stroke="var(--ai-copper)" strokeWidth="1.5" opacity="0.8" />

          {/* the traces — drawn by the Engineering Trace when the scene goes live */}
          {TRACES.map((t) => (
            <path
              key={t.d}
              className={`trace-path${t.signal ? ' trace-path--signal' : ''}`}
              style={{ '--trace-length': t.len }}
              d={t.d}
            />
          ))}

          {/* the controller — the intelligent centre of the board */}
          <g>
            {Array.from({ length: 7 }, (_, i) => (
              <g key={i}>
                <rect x={296} y={238 + i * 12} width="10" height="4" fill="var(--ai-line-2)" />
                <rect x={414} y={238 + i * 12} width="10" height="4" fill="var(--ai-line-2)" />
                <rect x={316 + i * 12} y={218} width="4" height="10" fill="var(--ai-line-2)" />
                <rect x={316 + i * 12} y={322} width="4" height="10" fill="var(--ai-line-2)" />
              </g>
            ))}
            <rect x="300" y="222" width="120" height="120" rx="1"
                  fill="var(--ai-panel-3)" stroke="var(--ai-gold)" strokeWidth="1.25" />
            <circle cx="316" cy="238" r="4" fill="var(--ai-gold)" />
            <text x="360" y="278" textAnchor="middle" className="board__chip">MCU</text>
            <text x="360" y="298" textAnchor="middle" className="board__chip-sub">FIRMWARE</text>
          </g>
        </svg>
      </div>

      <figcaption className="board__annotations">
        <p className="label label--muted board__annotations-title">Board annotations</p>
        <dl className="board__list">
          {annotations.map((a) => (
            <div className="board__item" key={a.term}>
              <dt className="board__term">
                <span className="trace-node" aria-hidden="true" />
                {a.term}
              </dt>
              <dd className="board__def">{a.def}</dd>
            </div>
          ))}
        </dl>
        <p className="board__disclaimer">
          Engineering drawing — a representative architecture, not a photograph of a
          specific ANANTA IONS product.
        </p>
      </figcaption>
    </figure>
  );
}
