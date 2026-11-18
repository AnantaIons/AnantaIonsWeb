import { useEffect, useRef } from 'react';

/* A faint layer of small electronic parts — ICs, resistors, capacitors, an
   LED, a transistor, a crystal, a header and copper traces, each with its
   reference and value (U1, R12 10k, C4 100nF …), numbers, engineering
   symbols and the ANANTA IONS mark — revealed in a soft circle
   around the mouse cursor, behind the page content.

   The drawing is used as a MASK, so its colour comes from CSS
   (--circuit-ink) and follows the time of day: copper by day, warm amber at
   night.

   Mouse: follows the cursor. Touch: shows under the finger while scrolling,
   then fades. It sits above the page (so it shows over dark sections too) but
   is faint and never takes pointer events. Off for reduced-motion users. */

const TILE = `
<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240' fill='none' stroke='#000' stroke-width='1.1' stroke-linecap='round' stroke-linejoin='round'>
  <g font-family='ui-monospace,Menlo,Consolas,monospace' font-size='7' fill='#000' stroke='none'>
    <text x='24' y='20'>U1</text><text x='24' y='70'>ATmega</text>
    <text x='104' y='45'>R12 10k</text>
    <text x='22' y='118'>C4 100nF</text>
    <text x='188' y='22'>C7 470µF</text>
    <text x='144' y='140'>D3</text>
    <text x='52' y='212'>Q2</text>
    <text x='168' y='232'>Y1 16MHz</text>
    <text x='196' y='120'>J1</text>
    <text x='100' y='176'>+5V</text><text x='4' y='160'>GND</text>
    <text x='4' y='100'>1010 0110</text><text x='150' y='96'>0x3F</text><text x='92' y='232'>3.3V</text>
    <text x='214' y='196'>2.4GHz</text><text x='120' y='126'>V = IR</text><text x='4' y='236'>f = 1/T</text>
    <text x='84' y='150'>π</text><text x='174' y='174'>±5%</text><text x='122' y='96'>λ</text>
  </g>
  <g font-family='Georgia,serif' font-size='11' fill='#000' stroke='none'>
    <text x='122' y='22'>Ω</text><text x='90' y='98'>Σ</text><text x='6' y='60'>∫</text><text x='176' y='112'>√2</text>
    <text x='30' y='176'>Δt</text><text x='140' y='206'>∞</text><text x='226' y='150'>µ</text><text x='218' y='236'>θ</text>
  </g>
  <g transform='translate(212 74) scale(.24)'><path d='M60.99 26.44 A26 26 0 1 0 73.56 39.01' stroke-width='10' stroke-linecap='butt'/><circle cx='68.38' cy='31.62' r='5.6' fill='#000' stroke='none'/></g>
  <rect x='24' y='26' width='46' height='30' rx='2'/>
  <path d='M42 26a5 5 0 0 0 10 0'/>
  <path d='M30 26v-6M39 26v-6M48 26v-6M57 26v-6M66 26v-6M30 56v6M39 56v6M48 56v6M57 56v6M66 56v6'/>
  <path d='M30 62v14l8 8h34'/><circle cx='74' cy='84' r='2.2'/>
  <path d='M66 20v-8h40l8 8h26'/><circle cx='142' cy='20' r='2.2'/>
  <path d='M96 54h12l3-5 6 10 6-10 6 10 6-10 3 5h12'/>
  <path d='M150 54h14l12 12v24'/><circle cx='176' cy='92' r='2.2'/>
  <path d='M24 128h18M42 118v20M48 118v20M48 128h18'/>
  <path d='M66 128h20l10-10h20'/><circle cx='118' cy='118' r='2.2'/>
  <circle cx='204' cy='40' r='11'/><path d='M196 40h16M204 29v-9M204 51v9'/>
  <path d='M144 146l14 9-14 9z M158 146v18 M132 155h12 M158 155h14'/>
  <path d='M152 142l5-6M158 145l5-6'/>
  <circle cx='64' cy='194' r='13'/><path d='M59 186v16M59 191l9-6M59 197l9 6M68 203v10M68 185v-9M46 194h13'/>
  <path d='M68 176h26l8-8h16'/><circle cx='120' cy='168' r='2.2'/>
  <rect x='176' y='206' width='10' height='17' rx='1.5'/><path d='M171 209v11M191 209v11M160 214h11M191 214h26'/>
  <rect x='196' y='126' width='10' height='36' rx='1'/><circle cx='201' cy='132' r='1.6'/><circle cx='201' cy='144' r='1.6'/><circle cx='201' cy='156' r='1.6'/>
  <path d='M0 100h12l6 6'/><path d='M222 100h18'/><path d='M120 240v-16l6-6h26'/>
  <path d='M206 162v12l8 8h26'/><path d='M0 166h20'/>
  <circle cx='104' cy='200' r='1.8'/><circle cx='111' cy='200' r='1.8'/><circle cx='118' cy='200' r='1.8'/><circle cx='125' cy='200' r='1.8'/>
</svg>`;

/* The tile is drawn in its final colour (copper by day, amber at night) and
   shown as a plain background — no mask-composite, which some browsers
   (older Safari, Samsung Internet, in-app browsers) do not support. Only the
   single radial "torch" mask is applied to the wrapper. */
const tile = (colour) => `url("data:image/svg+xml,${encodeURIComponent(
  TILE.replace(/<!--.*?-->/g, '').replace(/\s+/g, ' ').trim().replace(/#000/g, colour),
)}")`;
const TILE_DAY = tile('#A0522D');
const TILE_NIGHT = tile('#E0915A');

export default function CircuitSpotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let raf = 0; let x = -999; let y = -999; let hide = 0;
    const paint = () => { raf = 0; el.style.setProperty('--mx', `${x}px`); el.style.setProperty('--my', `${y}px`); };
    const show = (cx, cy, touch) => {
      x = cx; y = cy;
      el.classList.add('is-on');
      if (!raf) raf = requestAnimationFrame(paint);
      // Touch screens have no hover: reveal under the finger, then fade out.
      if (touch) { clearTimeout(hide); hide = setTimeout(() => el.classList.remove('is-on'), 1400); }
    };
    const move = (e) => show(e.clientX, e.clientY, e.pointerType !== 'mouse');
    const touch = (e) => { const t = e.touches && e.touches[0]; if (t) show(t.clientX, t.clientY, true); };
    const leave = () => el.classList.remove('is-on');
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerdown', move, { passive: true });
    window.addEventListener('touchmove', touch, { passive: true });
    document.documentElement.addEventListener('pointerleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', move);
      window.removeEventListener('touchmove', touch);
      document.documentElement.removeEventListener('pointerleave', leave);
      clearTimeout(hide);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="circuit-spot" aria-hidden="true">
      <div className="circuit-spot__tile circuit-spot__tile--day" style={{ backgroundImage: TILE_DAY }} />
      <div className="circuit-spot__tile circuit-spot__tile--night" style={{ backgroundImage: TILE_NIGHT }} />
    </div>
  );
}
