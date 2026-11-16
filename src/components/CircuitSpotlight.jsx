import { useEffect, useRef } from 'react';

/* A layer of electronic components — ICs, resistors, capacitors, an LED, a
   transistor, a crystal and copper traces — drawn faintly over the page and
   revealed in a soft circle around the mouse cursor.

   Pointer devices only (hover: hover). Touch screens, keyboard users and
   reduced-motion users never see it, and it never takes pointer events, so
   it cannot get in the way of reading or clicking. */

const STROKE = '#B08A3A';
const TILE = `
<svg xmlns='http://www.w3.org/2000/svg' width='360' height='360' viewBox='0 0 360 360' fill='none' stroke='${STROKE}' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'>
  <!-- IC (DIP-8) -->
  <rect x='34' y='40' width='74' height='46' rx='3'/>
  <path d='M64 40a7 7 0 0 0 14 0'/>
  <path d='M44 40v-10M58 40v-10M72 40v-10M86 40v-10M100 40v-10M44 86v10M58 86v10M72 86v10M86 86v10M100 86v10'/>
  <!-- traces from IC -->
  <path d='M44 96v26l14 14h54'/><circle cx='115' cy='136' r='3.5'/>
  <path d='M100 30v-12h60l12 12h44'/><circle cx='219' cy='30' r='3.5'/>
  <!-- resistor -->
  <path d='M150 82h20l5-9 9 18 9-18 9 18 9-18 5 9h20'/>
  <path d='M236 82h22l18 18v38'/><circle cx='276' cy='141' r='3.5'/>
  <!-- capacitor -->
  <path d='M40 196h28M68 180v32M78 180v32M78 196h28'/>
  <path d='M106 196h30l16 -16h30'/><circle cx='185' cy='180' r='3.5'/>
  <!-- electrolytic capacitor -->
  <circle cx='300' cy='60' r='18'/><path d='M288 60h24M300 42v-14M300 78v14'/>
  <!-- LED -->
  <path d='M220 210l22 14-22 14z M242 210v28 M202 224h18 M242 224h20'/>
  <path d='M232 200l8-10M240 204l8-10'/><path d='M240 190l1 5-5-1M248 194l1 5-5-1'/>
  <!-- transistor -->
  <circle cx='98' cy='288' r='20'/><path d='M90 276v24M90 284l14-10M90 292l14 10M104 302v14M104 274v-14M70 288h20'/>
  <path d='M104 260h40l12-12h26'/><circle cx='185' cy='248' r='3.5'/>
  <!-- crystal -->
  <rect x='252' y='280' width='16' height='26' rx='2'/><path d='M244 284v18M276 284v18M226 293h18M276 293h40'/>
  <!-- long bus traces -->
  <path d='M0 150h20l10 10h0'/><path d='M330 150h30'/><path d='M180 360v-24l10-10h40'/>
  <path d='M310 230h22l10-10v-30'/><circle cx='342' cy='187' r='3.5'/>
  <!-- solder pads -->
  <circle cx='160' cy='300' r='2.5'/><circle cx='170' cy='300' r='2.5'/><circle cx='180' cy='300' r='2.5'/><circle cx='190' cy='300' r='2.5'/>
</svg>`;

export const circuitTile = `url("data:image/svg+xml,${encodeURIComponent(TILE.replace(/<!--.*?-->/g, '').replace(/\s+/g, ' ').trim())}")`;

export default function CircuitSpotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || still) return undefined;

    let raf = 0; let x = -999; let y = -999;
    const paint = () => { raf = 0; el.style.setProperty('--mx', `${x}px`); el.style.setProperty('--my', `${y}px`); };
    const move = (e) => {
      x = e.clientX; y = e.clientY;
      el.classList.add('is-on');
      if (!raf) raf = requestAnimationFrame(paint);
    };
    const leave = () => el.classList.remove('is-on');
    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', leave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="circuit-spot" aria-hidden="true" style={{ backgroundImage: circuitTile }} />;
}
