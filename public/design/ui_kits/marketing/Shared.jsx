/* global React */
// Shared bits for the Ananta Ions marketing UI kit.
(function(){

const FOOTER_COLS = [
  { heading: 'Products', links: ['Accelerators', 'Systems', 'Networking', 'Software'] },
  { heading: 'Solutions', links: ['AI', 'Data science', 'Inference', 'HPC'] },
  { heading: 'Industries', links: ['Healthcare', 'Manufacturing', 'Finance', 'Energy'] },
  { heading: 'Resources', links: ['Documentation', 'White papers', 'Webinars', 'Blog'] },
  { heading: 'Company', links: ['About', 'Careers', 'Newsroom', 'Investors'] },
  { heading: 'Support', links: ['Contact', 'Developer forum', 'Downloads', 'Status'] },
];

// Neutral technical-imagery placeholder (no real photography was provided).
function Placeholder({ ratio = '16 / 9', label = 'Rendered scene', icon = 'fa-solid fa-image', dark = false }) {
  return (
    <div style={{
      aspectRatio: ratio,
      background: dark ? '#0d0d0d' : 'var(--color-surface-soft)',
      border: '1px solid var(--color-hairline)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px',
      color: 'var(--color-stone)', fontFamily: 'var(--font-family)',
    }}>
      <i className={icon} aria-hidden="true" style={{ fontSize: '28px' }}></i>
      <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.5px' }}>{label}</span>
    </div>
  );
}

function SectionHead({ eyebrow, title, sub }) {
  return (
    <div style={{ marginBottom: '32px', maxWidth: '760px' }}>
      {eyebrow && <div style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.5px', color: 'var(--color-primary)', marginBottom: '12px' }}>{eyebrow}</div>}
      <h2 style={{ margin: 0, fontSize: '36px', fontWeight: 700, lineHeight: 1.25, color: 'var(--color-ink)' }}>{title}</h2>
      {sub && <p style={{ margin: '16px 0 0', fontSize: '18px', lineHeight: 1.5, color: 'var(--color-body)' }}>{sub}</p>}
    </div>
  );
}

const Section = ({ children, soft, style }) => (
  <section style={{ background: soft ? 'var(--color-surface-soft)' : 'var(--color-canvas)', ...style }}>
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px 24px' }}>{children}</div>
  </section>
);

Object.assign(window, { KitFooterCols: FOOTER_COLS, KitPlaceholder: Placeholder, KitSectionHead: SectionHead, KitSection: Section });
})();
