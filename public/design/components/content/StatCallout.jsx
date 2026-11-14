import React from 'react';
import { CornerSquare } from './CornerSquare.jsx';

/**
 * StatCallout — a massive gold numeric with a caption. Used in long-form pages.
 */
export function StatCallout({ value, caption, cornerSquare = false, bordered = true, style, ...rest }) {
  return (
    <div
      style={{
        position: 'relative',
        background: 'var(--color-canvas)',
        border: bordered ? '1px solid var(--color-hairline)' : 'none',
        borderRadius: 'var(--radius-sm)',
        padding: '32px',
        fontFamily: 'var(--font-family)',
        boxSizing: 'border-box',
        ...style,
      }}
      {...rest}
    >
      {cornerSquare && <CornerSquare position="top-left" />}
      <div style={{ fontSize: '36px', fontWeight: 700, lineHeight: 1.25, color: 'var(--color-primary)' }}>{value}</div>
      <div style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.5, color: 'var(--color-body)', marginTop: '8px' }}>{caption}</div>
    </div>
  );
}
