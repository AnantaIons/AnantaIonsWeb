/* The ANANTA IONS mark, as geometry.

   It was a 143 kB PNG painted at 28 CSS pixels, in the masthead and again in
   the footer. The mark is two shapes — an open copper ring and an ivory ion
   sitting in its gap — so it is drawn rather than shipped: about 300 bytes,
   sharp at any size, and it takes the brand tokens so it recolours with the
   palette instead of being baked.

   Geometry: ring radius 26 in a 100-unit box, band 10 wide, gap centred on 45°
   spanning 40°, ion on the same 45° ray. The arc runs the long way round, so
   large-arc-flag is 1 and sweep is 0 (θ increasing is counter-clockwise once
   the y axis is flipped for SVG). */

export default function Mark({ size = 28, className = '' }) {
  return (
    <svg
      className={className}
      width={size} height={size} viewBox="0 0 100 100"
      role="presentation" aria-hidden="true" focusable="false"
    >
      <path
        d="M60.99 26.44 A26 26 0 1 0 73.56 39.01"
        fill="none"
        stroke="var(--ai-copper, #c66a25)"
        strokeWidth="10"
        strokeLinecap="butt"
      />
      <circle cx="68.38" cy="31.62" r="5.6" fill="var(--ai-ivory, #f3e1ad)" />
    </svg>
  );
}
