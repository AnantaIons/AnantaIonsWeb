import React from 'react';

/**
 * Breadcrumb — 48px soft-gray strip, uppercase caption type, chevron separators.
 */
export function Breadcrumb({ items = [], style, ...rest }) {
  return (
    <div style={{ background: 'var(--color-surface-soft)', height: '48px', fontFamily: 'var(--font-family)', ...style }} {...rest}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', height: '100%', padding: '0 24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        {items.map((it, i) => (
          <React.Fragment key={i}>
            {i > 0 && <i className="fa-solid fa-chevron-right" aria-hidden="true" style={{ fontSize: '10px', color: 'var(--color-mute)' }}></i>}
            <span style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.3px', color: i === items.length - 1 ? 'var(--color-ink)' : 'var(--color-mute)', cursor: i === items.length - 1 ? 'default' : 'pointer' }}>{it}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
