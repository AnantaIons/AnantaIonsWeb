import React from 'react';

/**
 * Badge — uppercase document-type / category tag on a soft-gray fill.
 */
export function Badge({ children, style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: 'var(--font-family)',
        fontSize: '14px',
        fontWeight: 700,
        lineHeight: 1.43,
        textTransform: 'uppercase',
        letterSpacing: '.3px',
        color: 'var(--color-body)',
        background: 'var(--color-surface-soft)',
        padding: '4px 10px',
        borderRadius: 'var(--radius-sm)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
