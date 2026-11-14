/* THE DIE, IN CROSS-SECTION

   A microcontroller cut open and read bottom to top: doped silicon, the
   transistors built into it, the metal levels that wire them together, the
   logic those wires form, the data that logic produces, and the firmware
   deciding what any of it does.

   It replaces a top-down board drawing, which showed boxes connected by
   traces and said nothing a stock diagram would not. This says the actual
   argument the company makes — that they work at every layer between silicon
   and the real world — because the layers are the picture.

   Still a DRAWING, not a photograph: no ANANTA IONS hardware imagery was
   supplied, and a stock die shot would imply a specific part that has not
   been verified. Meaning lives in the adjacent HTML list, so a screen reader
   and a 390px screen both get it; the in-diagram type is reinforcement and
   steps aside where it would be too small to read. */

const LAYERS = [
  { no: '01', y: 472, h: 52,  label: 'Substrate',     sub: 'doped silicon' },
  { no: '02', y: 406, h: 56,  label: 'Device',        sub: 'transistors' },
  { no: '03', y: 262, h: 134, label: 'Interconnect',  sub: 'metal M1–M4' },
  { no: '04', y: 168, h: 84,  label: 'Logic',         sub: 'core, memory, peripherals' },
  { no: '05', y: 106, h: 52,  label: 'Signal',        sub: 'bus & data' },
  { no: '06', y: 44,  h: 52,  label: 'Firmware',      sub: 'deterministic control' },
];

const X0 = 150, X1 = 660;
// Lowest band first: M1 sits nearest the devices it connects to.
const METAL = [380, 346, 312, 278];
const BLOCKS = [
  { x: 170, w: 150, t: 'CORE' },
  { x: 336, w: 110, t: 'SRAM' },
  { x: 462, w: 90,  t: 'TIMERS' },
  { x: 568, w: 76,  t: 'ADC' },
];

/* Three runs of the Engineering Trace, telling the sequence:
   charge leaves a transistor and climbs the metal into the logic; the logic
   puts data on the bus and out of the die; firmware comes down into the core
   and decides what happens. */
const RUNS = [
  { d: 'M196 428 V380 H300 V346 H400 V312 H500 V278 H590 V238', len: 700, tint: 'var(--ai-copper-txt)', delay: 0 },
  { d: 'M244 182 V132 H700',                                    len: 520, tint: 'var(--ai-gold)',       delay: 1.1 },
  { d: 'M300 96 V182',                                          len: 90,  tint: 'var(--ai-ivory)',      delay: 0.6 },
];

export default function SiliconStack({ annotations, id = 'die' }) {
  const hatch = `${id}-hatch`;
  const grid = `${id}-grid`;

  return (
    <figure className="die">
      <div className="die__figure">
        <svg className="die__svg" viewBox="0 0 720 560" role="presentation"
             aria-hidden="true" preserveAspectRatio="xMidYMid meet">
          <defs>
            <pattern id={hatch} width="8" height="8" patternUnits="userSpaceOnUse"
                     patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="8" stroke="var(--ai-copper-deep)" strokeWidth="1" />
            </pattern>
            <pattern id={grid} width="18" height="18" patternUnits="userSpaceOnUse">
              <path d="M18 0H0" fill="none" stroke="var(--ai-line)" strokeWidth="0.5" opacity="0.45" />
            </pattern>
          </defs>

          {/* layer bands + left-hand callouts */}
          {LAYERS.map((l) => (
            <g key={l.no}>
              <rect x={X0} y={l.y} width={X1 - X0} height={l.h}
                    fill="var(--ai-panel)" stroke="var(--ai-line-2)" strokeWidth="0.75" />
              <line x1="136" y1={l.y + l.h / 2} x2={X0} y2={l.y + l.h / 2}
                    stroke="var(--ai-line-2)" strokeWidth="0.75" />
              <text x="128" y={l.y + l.h / 2 - 3} textAnchor="end" className="die__no">{l.no}</text>
              <text x="128" y={l.y + l.h / 2 + 12} textAnchor="end" className="die__layer">{l.label}</text>
            </g>
          ))}

          {/* 01 substrate — the crystal itself */}
          <rect x={X0} y="472" width={X1 - X0} height="52" fill={`url(#${hatch})`} opacity="0.5" />
          <text x={X0 + 14} y="504" className="die__note">p-Si</text>

          {/* 02 device — transistors sitting in it */}
          {[0, 1, 2, 3, 4].map((i) => {
            const x = 180 + i * 96;
            return (
              <g key={`t${i}`}>
                <rect x={x} y="430" width="22" height="16" fill="var(--ai-panel-3)" stroke="var(--ai-line-2)" strokeWidth="0.75" />
                <rect x={x + 48} y="430" width="22" height="16" fill="var(--ai-panel-3)" stroke="var(--ai-line-2)" strokeWidth="0.75" />
                <line x1={x + 22} y1="446" x2={x + 48} y2="446" stroke="var(--ai-copper)" strokeWidth="1" />
                <rect x={x + 24} y="414" width="22" height="12" fill="var(--ai-gold)" opacity="0.85" />
                <line x1={x + 24} y1="428" x2={x + 46} y2="428" stroke="var(--ai-ivory)" strokeWidth="0.75" opacity="0.7" />
              </g>
            );
          })}

          {/* 03 interconnect — four metal levels and the vias between them */}
          <rect x={X0} y="262" width={X1 - X0} height="134" fill={`url(#${grid})`} />
          {METAL.map((y, i) => (
            <g key={`m${y}`}>
              <line x1={X0 + 16} y1={y} x2={X1 - 16} y2={y}
                    stroke="var(--ai-copper)" strokeWidth="1.25" opacity={0.45 + i * 0.1} />
              <text x={X1 - 8} y={y + 4} textAnchor="end" className="die__metal">{`M${i + 1}`}</text>
            </g>
          ))}
          {[240, 330, 420, 510, 600].map((x, i) => (
            <rect key={`v${x}`} x={x} y={METAL[3]} width="5" height={METAL[0] - METAL[3]}
                  fill="var(--ai-copper-deep)" opacity={0.5 + (i % 2) * 0.25} />
          ))}

          {/* 04 logic */}
          {BLOCKS.map((b) => (
            <g key={b.t}>
              <rect x={b.x} y="182" width={b.w} height="56" rx="1"
                    fill="var(--ai-panel-2)" stroke="var(--ai-gold)" strokeWidth="0.9" opacity="0.95" />
              <text x={b.x + b.w / 2} y="215" textAnchor="middle" className="die__block">{b.t}</text>
            </g>
          ))}

          {/* 05 signal — the bus, and data leaving the die */}
          {[118, 132, 146].map((y) => (
            <line key={y} x1={X0 + 20} y1={y} x2={X1 - 40} y2={y}
                  stroke="var(--ai-line-2)" strokeWidth="1" />
          ))}
          <path d="M604 146 h12 v-28 h12 v28 h12 v-28 h12"
                fill="none" stroke="var(--ai-gold)" strokeWidth="1.25" opacity="0.9" />

          {/* 06 firmware — the layer that decides */}
          <rect x={X0 + 12} y="56" width={X1 - X0 - 24} height="28" rx="1" fill="none"
                stroke="var(--ai-ivory)" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.55" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line key={`f${i}`} x1={X0 + 30 + i * 74} y1="70" x2={X0 + 30 + i * 74 + (i % 2 ? 40 : 24)} y2="70"
                  stroke="var(--ai-ivory)" strokeWidth="1.5" opacity="0.35" />
          ))}

          {/* the signal actually moving through the stack */}
          {RUNS.map((r) => (
            <g key={r.d}>
              <path d={r.d} fill="none" stroke={r.tint} strokeWidth="1.25" opacity="0.32" />
              <path className="trace-live" d={r.d} stroke={r.tint}
                    style={{ '--live-len': r.len, '--live-delay': `${r.delay}s`, '--dur-flow': '3.4s' }} />
            </g>
          ))}

          {/* die outline */}
          <rect x={X0} y="44" width={X1 - X0} height="480" fill="none"
                stroke="var(--ai-line-2)" strokeWidth="1" />
        </svg>
      </div>

      <figcaption className="die__annotations">
        <p className="label label--muted die__annotations-title">Layer by layer</p>
        <dl className="die__list">
          {annotations.map((a) => (
            <div className="die__item" key={a.term}>
              <dt className="die__term">
                <span className="trace-node" aria-hidden="true" />
                {a.term}
              </dt>
              <dd className="die__def">{a.def}</dd>
            </div>
          ))}
        </dl>
        <p className="die__disclaimer">
          Engineering drawing — a representative cross-section, not a photograph of a
          specific ANANTA IONS part.
        </p>
      </figcaption>
    </figure>
  );
}
