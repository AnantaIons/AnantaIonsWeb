import React from 'react';

/**
 * PillTab — segmented-control tab. Flips fully inverted (black fill) when active.
 */
export function PillTab({ active = false, children, ...rest }) {
  const style = {
    fontFamily: 'var(--font-family)',
    fontSize: '14.4px',
    fontWeight: 700,
    letterSpacing: '.144px',
    lineHeight: 1,
    padding: '10px 18px',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid var(--color-hairline)',
    cursor: 'pointer',
    transition: 'background-color .15s ease, color .15s ease',
    background: active ? 'var(--color-ink)' : 'transparent',
    color: active ? 'var(--color-on-dark)' : 'var(--color-ink)',
    borderColor: active ? 'var(--color-ink)' : 'var(--color-hairline)',
  };
  return <button style={style} aria-pressed={active} {...rest}>{children}</button>;
}
