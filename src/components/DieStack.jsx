import { useState } from 'react';

/* THE PACKAGE, EXPLODED

   An isometric cutaway of a controller with its layers lifted apart: the
   pinned carrier at the bottom, then doped silicon, the transistors in it, the
   metal wiring them together, the logic that wiring forms, the data leaving
   the die, and the firmware above deciding what any of it does.

   Drawn, not rendered. A photoreal die render would be someone else's stock
   image and would imply a specific part nobody has verified — and this site
   has committed to drawings for exactly that reason. The isometric holds up
   better anyway: it is measurable, it is in the brand's own copper and gold,
   and every plate can be lit independently, which a flat render cannot do.

   Motion: the stack assembles from collapsed to exploded as it enters view,
   one plate at a time from the substrate up, then a signal climbs the via
   column through all of them. Hovering or focusing a layer in the list lights
   that plate — the list is the control, so it works from the keyboard.

   Everything collapses to a still, fully-exploded stack under
   prefers-reduced-motion, and the list alone carries the meaning for screen
   readers and for widths where the drawing's type would be too small. */

const W = 168;          // plate half-width
const D = 84;           // plate half-depth (2:1 isometric)
const T = 9;            // plate thickness
const CX = 250;
const BASE = 522;       // centre of the lowest plate
const GAP = 70;         // vertical separation between plates

/* Unit space [0,1]² -> isometric plate face. Lets each layer's contents be
   drawn as if on flat graph paper. */
const face = (cy) => `matrix(${W} ${D} ${-W} ${D} ${CX} ${cy - D})`;

const LAYERS = [
  { id: 'substrate',    no: '01', name: 'Substrate',    tint: 'var(--ai-copper-deep)' },
  { id: 'device',       no: '02', name: 'Device',       tint: 'var(--ai-copper)' },
  { id: 'interconnect', no: '03', name: 'Interconnect', tint: 'var(--ai-copper-txt)' },
  { id: 'logic',        no: '04', name: 'Logic',        tint: 'var(--ai-gold)' },
  { id: 'signal',       no: '05', name: 'Signal',       tint: 'var(--ai-gold)' },
  { id: 'firmware',     no: '06', name: 'Firmware',     tint: 'var(--ai-ivory)' },
];

function Plate({ layer, index, active, last, children }) {
  const cy = BASE - index * GAP;
  const top = `${CX},${cy - D} ${CX + W},${cy} ${CX},${cy + D} ${CX - W},${cy}`;
  return (
    <g
      className={`stack3d__plate${active ? ' is-active' : ''}`}
      style={{ '--i': index, '--collapse': `${index * GAP}px`, '--tint': layer.tint }}
    >
      {/* extruded sides */}
      <polygon points={`${CX - W},${cy} ${CX},${cy + D} ${CX},${cy + D + T} ${CX - W},${cy + T}`}
               className="stack3d__side" />
      <polygon points={`${CX + W},${cy} ${CX},${cy + D} ${CX},${cy + D + T} ${CX + W},${cy + T}`}
               className="stack3d__side stack3d__side--lit" />
      {/* face */}
      <polygon points={top} className="stack3d__face" />
      <g transform={face(cy)} className="stack3d__content">{children}</g>
      <polygon points={top} className="stack3d__edge" />
      {/* the via rising into the plate above — drawn with this plate so it
          travels with it, and visible in the gap because the plate above is
          painted later */}
      {!last && (
        <>
          <line x1={CX} y1={cy} x2={CX} y2={cy - GAP} className="stack3d__via" />
          <line x1={CX} y1={cy} x2={CX} y2={cy - GAP}
                className="trace-live stack3d__climb"
                style={{ '--live-len': GAP, '--live-delay': `${index * 0.28}s`, '--dur-flow': '2.6s' }} />
        </>
      )}
    </g>
  );
}

export default function DieStack({ id = 'stack3d' }) {
  const [active, setActive] = useState(null);
  const clip = `${id}-clip`;

  return (
    <figure className="stack3d">
      <div className="stack3d__figure">
        <svg className="stack3d__svg" viewBox="0 72 500 592" role="presentation"
             aria-hidden="true" preserveAspectRatio="xMidYMid meet">
          <defs>
            <clipPath id={clip} clipPathUnits="objectBoundingBox">
              <rect x="0" y="0" width="1" height="1" />
            </clipPath>
          </defs>

          {/* pinned carrier — pins hang from the package's two lower edges */}
          {Array.from({ length: 14 }, (_, i) => {
            const t = (i + 0.6) / 15;
            return (
              <line key={`pl${i}`}
                    x1={CX - W + t * W} y1={BASE + t * D + T}
                    x2={CX - W + t * W} y2={BASE + t * D + T + 26}
                    className="stack3d__pin" />
            );
          })}
          {Array.from({ length: 14 }, (_, i) => {
            const t = (i + 0.6) / 15;
            return (
              <line key={`pr${i}`}
                    x1={CX + t * W} y1={BASE + D - t * D + T}
                    x2={CX + t * W} y2={BASE + D - t * D + T + 26}
                    className="stack3d__pin" />
            );
          })}

          {LAYERS.map((l, i) => (
            <Plate key={l.id} layer={l} index={i} active={active === i}
                   last={i === LAYERS.length - 1}>
              {i === 0 && (
                <>
                  {Array.from({ length: 9 }, (_, k) => (
                    <line key={k} x1={k / 9} y1="0" x2={k / 9} y2="1"
                          className="stack3d__hatch" vectorEffect="non-scaling-stroke" />
                  ))}
                </>
              )}
              {i === 1 && Array.from({ length: 16 }, (_, k) => (
                <rect key={k} x={0.1 + (k % 4) * 0.24} y={0.1 + Math.floor(k / 4) * 0.24}
                      width="0.1" height="0.1" className="stack3d__cell" />
              ))}
              {i === 2 && (
                <>
                  {[0.2, 0.4, 0.6, 0.8].map((v) => (
                    <line key={`h${v}`} x1="0.06" y1={v} x2="0.94" y2={v}
                          className="stack3d__wire" vectorEffect="non-scaling-stroke" />
                  ))}
                  {[0.25, 0.5, 0.75].map((v) => (
                    <line key={`v${v}`} x1={v} y1="0.06" x2={v} y2="0.94"
                          className="stack3d__wire" vectorEffect="non-scaling-stroke" />
                  ))}
                </>
              )}
              {i === 3 && (
                <>
                  <rect x="0.08" y="0.08" width="0.44" height="0.42" className="stack3d__block" />
                  <rect x="0.56" y="0.08" width="0.36" height="0.2"  className="stack3d__block" />
                  <rect x="0.56" y="0.32" width="0.36" height="0.18" className="stack3d__block" />
                  <rect x="0.08" y="0.56" width="0.84" height="0.36" className="stack3d__block" />
                </>
              )}
              {i === 4 && [0.25, 0.42, 0.58, 0.75].map((v) => (
                <line key={v} x1="0.06" y1={v} x2="0.94" y2={v}
                      className="stack3d__bus" vectorEffect="non-scaling-stroke" />
              ))}
              {i === 5 && (
                <>
                  <rect x="0.08" y="0.08" width="0.84" height="0.84"
                        className="stack3d__code" vectorEffect="non-scaling-stroke" />
                  {[0.24, 0.38, 0.52, 0.66, 0.8].map((v, k) => (
                    <line key={v} x1="0.18" y1={v} x2={k % 2 ? 0.62 : 0.8} y2={v}
                          className="stack3d__codeline" vectorEffect="non-scaling-stroke" />
                  ))}
                </>
              )}
            </Plate>
          ))}
        </svg>
      </div>

      <figcaption className="stack3d__legend">
        <p className="label label--muted">Layer by layer</p>
        <ol className="stack3d__list">
          {[...LAYERS].reverse().map((l) => {
            const i = LAYERS.indexOf(l);
            return (
              <li key={l.id}>
                <button
                  type="button"
                  className={`stack3d__item${active === i ? ' is-active' : ''}`}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  aria-pressed={active === i}
                >
                  <span className="mono stack3d__item-no">{l.no}</span>
                  <span className="stack3d__item-name">{l.name}</span>
                  <span className="stack3d__item-def">{DEFS[l.id]}</span>
                </button>
              </li>
            );
          })}
        </ol>
        <p className="stack3d__disclaimer">
          Engineering drawing — a representative package, not a photograph of a specific
          ANANTA IONS part.
        </p>
      </figcaption>
    </figure>
  );
}

const DEFS = {
  substrate:    'Doped silicon. The physics every guarantee above it rests on.',
  device:       'Transistors built into the crystal — the switches themselves.',
  interconnect: 'Metal levels wiring those switches into something that computes.',
  logic:        'Core, memory and peripherals: the behaviour the part actually has.',
  signal:       'Data on the bus and off the die, toward the rest of the system.',
  firmware:     'Deterministic control written against the datasheet.',
};
