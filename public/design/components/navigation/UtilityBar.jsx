import React from 'react';

/**
 * UtilityBar — 32px black strip at the very top; right-aligned locale / login cluster.
 */
export function UtilityBar({ items = ['Locale: EN', 'Login', 'Account'], style, ...rest }) {
  return (
    <div style={{ background: 'var(--color-surface-dark)', color: 'var(--color-on-dark)', height: '32px', fontFamily: 'var(--font-family)', ...style }} {...rest}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', height: '100%', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '20px' }}>
        {items.map((it, i) => (
          <span key={i} style={{ fontSize: '12px', fontWeight: 400, color: 'var(--color-on-dark-mute)', cursor: 'pointer' }}>{it}</span>
        ))}
      </div>
    </div>
  );
}
