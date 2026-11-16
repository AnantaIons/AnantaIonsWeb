/* Copper traces behind the hero with pulses of "current" running along them.
   Pure SVG + CSS: visible without JavaScript as static traces; pulses stop
   under reduced motion. Decorative only. */

const TRACES = [
  'M-20 120 H180 L230 170 H420 L460 130 H700',
  'M-20 420 H120 L170 370 H360 L400 410 H620 L660 370 H900',
  'M640 -20 V80 L690 130 V300 L740 350 H1000',
  'M260 620 V520 L310 470 H520 L560 510 H760 L800 470 H1100',
  'M1000 60 H880 L840 100 V220 L800 260 H700',
];
const VIAS = [[460, 130], [400, 410], [690, 300], [560, 510], [840, 100], [230, 170], [170, 370], [800, 470]];

export default function HeroCircuit() {
  return (
    <svg className="hero-circuit" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <g className="hero-circuit__traces">
        {TRACES.map((d, i) => <path key={i} d={d} />)}
        {VIAS.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="5" />)}
      </g>
      <g className="hero-circuit__pulses">
        {TRACES.map((d, i) => <path key={i} d={d} style={{ '--i': i }} pathLength="100" />)}
      </g>
    </svg>
  );
}
