import React from 'react';

/**
 * TextInput — labelled text field. Gold 2px focus border is the only focus signal.
 */
export function TextInput({ label, error, id, style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const borderColor = error ? 'var(--color-error)' : focused ? 'var(--color-primary)' : 'var(--color-hairline)';
  return (
    <label htmlFor={inputId} style={{ display: 'block', fontFamily: 'var(--font-family)' }}>
      {label && (
        <span style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: 'var(--color-ink)', marginBottom: '8px' }}>{label}</span>
      )}
      <input
        id={inputId}
        onFocus={(e) => { setFocused(true); rest.onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); rest.onBlur?.(e); }}
        style={{
          width: '100%',
          height: '44px',
          padding: '12px 16px',
          fontFamily: 'var(--font-family)',
          fontSize: '16px',
          color: 'var(--color-ink)',
          background: 'var(--color-canvas)',
          border: `${focused || error ? 2 : 1}px solid ${borderColor}`,
          borderRadius: 'var(--radius-sm)',
          outline: 'none',
          boxSizing: 'border-box',
          ...style,
        }}
        {...rest}
      />
      {error && (
        <span style={{ display: 'block', fontSize: '12px', color: 'var(--color-error)', marginTop: '6px' }}>{error}</span>
      )}
    </label>
  );
}
