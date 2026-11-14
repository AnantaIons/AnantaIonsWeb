import React from 'react';

/**
 * SubNav — 56px soft-gray section nav strip anchored above content.
 */
export function SubNav({ items = [], active, onSelect, style, ...rest }) {
  return (
    <div style={{ background: 'var(--color-surface-soft)', height: '56px', borderBottom: '1px solid var(--color-hairline)', fontFamily: 'var(--font-family)', ...style }} {...rest}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', height: '100%', padding: '0 24px', display: 'flex', alignItems: 'stretch', gap: '28px' }}>
        {items.map((it) => (
          <a
            key={it}
            onClick={() => onSelect?.(it)}
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '16px',
              fontWeight: 700,
              color: it === active ? 'var(--color-ink)' : 'var(--color-body)',
              borderBottom: it === active ? '3px solid var(--color-primary)' : '3px solid transparent',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >{it}</a>
        ))}
      </div>
    </div>
  );
}
