import React from 'react';

/**
 * SearchInput — 40px search field with a leading magnifier glyph (Font Awesome).
 */
export function SearchInput({ placeholder = 'Search', style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', fontFamily: 'var(--font-family)' }}>
      <i className="fa-solid fa-magnifying-glass" aria-hidden="true" style={{ position: 'absolute', left: '14px', color: 'var(--color-mute)', fontSize: '14px', pointerEvents: 'none' }}></i>
      <input
        type="search"
        placeholder={placeholder}
        onFocus={(e) => { setFocused(true); rest.onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); rest.onBlur?.(e); }}
        style={{
          width: '100%',
          height: '40px',
          padding: '10px 16px 10px 38px',
          fontFamily: 'var(--font-family)',
          fontSize: '16px',
          color: 'var(--color-ink)',
          background: 'var(--color-canvas)',
          border: `${focused ? 2 : 1}px solid ${focused ? 'var(--color-primary)' : 'var(--color-hairline)'}`,
          borderRadius: 'var(--radius-sm)',
          outline: 'none',
          boxSizing: 'border-box',
          ...style,
        }}
        {...rest}
      />
    </div>
  );
}
