import React from 'react';

/**
 * Footer — dense multi-column black footer with a fine-print bar.
 * columns: [{ heading, links: [] }]
 */
export function Footer({
  brand = 'ANANTA IONS',
  columns = [],
  social = ['fa-brands fa-x-twitter', 'fa-brands fa-linkedin-in', 'fa-brands fa-youtube', 'fa-brands fa-github'],
  legal = '© 2026 Ananta Ions. All rights reserved.',
  legalLinks = ['Privacy Policy', 'Terms of Use', 'Cookie Settings'],
  style,
  ...rest
}) {
  return (
    <footer style={{ background: 'var(--color-surface-dark)', color: 'var(--color-on-dark-mute)', fontFamily: 'var(--font-family)', ...style }} {...rest}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.max(columns.length, 1)}, 1fr)`, gap: '32px' }}>
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 style={{ margin: '0 0 16px', fontSize: '16px', fontWeight: 700, color: 'var(--color-on-dark)' }}>{col.heading}</h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map((l) => (
                  <li key={l}><a style={{ fontSize: '15px', fontWeight: 400, color: 'var(--color-on-dark-mute)', textDecoration: 'none', cursor: 'pointer' }}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--color-hairline-strong)', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '.5px', color: 'var(--color-on-dark)' }}>
            <span style={{ color: 'var(--color-primary)' }}>▪</span>&nbsp;{brand}
          </span>
          <div style={{ display: 'flex', gap: '18px' }}>
            {social.map((s) => (
              <span key={s} style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-hairline-strong)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-on-dark)', cursor: 'pointer' }}>
                <i className={s} aria-hidden="true" style={{ fontSize: '14px' }}></i>
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.3px', color: 'var(--color-mute)' }}>{legal}</span>
          {legalLinks.map((l) => (
            <span key={l} style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.3px', color: 'var(--color-mute)', cursor: 'pointer' }}>{l}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
