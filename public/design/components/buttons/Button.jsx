import React from 'react';

const FS = { lg: '18px', md: '16px', sm: '14.4px' };

const base = {
  fontFamily: 'var(--font-family)',
  fontWeight: 700,
  lineHeight: 1.25,
  borderRadius: 'var(--radius-sm)',
  border: '2px solid transparent',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  transition: 'background-color .15s ease, color .15s ease, border-color .15s ease',
  boxSizing: 'border-box',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
};

/**
 * Button — the universal Ananta Ions CTA.
 * variant: primary | outline | outline-on-dark | ghost | disabled
 */
export function Button({
  variant = 'primary',
  size = 'md',
  children,
  disabled = false,
  as = 'button',
  href,
  ...rest
}) {
  const isDisabled = disabled || variant === 'disabled';
  const pad = size === 'lg' ? '13px 28px' : size === 'sm' ? '9px 16px' : '11px 24px';
  const height = size === 'lg' ? 48 : size === 'sm' ? 36 : 44;

  const variants = {
    primary: { background: 'var(--color-primary)', color: 'var(--color-on-primary)', borderColor: 'var(--color-primary)' },
    outline: { background: 'transparent', color: 'var(--color-ink)', borderColor: 'var(--color-primary)' },
    'outline-on-dark': { background: 'transparent', color: 'var(--color-on-dark)', borderColor: 'var(--color-on-dark)', borderWidth: '1px' },
    ghost: { background: 'transparent', color: 'var(--color-primary)', borderColor: 'transparent', padding: 0, letterSpacing: '.1px' },
    disabled: { background: 'var(--color-surface-soft)', color: 'var(--color-ash)', borderColor: 'var(--color-surface-soft)', cursor: 'not-allowed' },
  };

  const style = {
    ...base,
    fontSize: FS[size] || FS.md,
    padding: variant === 'ghost' ? 0 : pad,
    height: variant === 'ghost' ? 'auto' : height,
    letterSpacing: size === 'sm' ? '.144px' : 0,
    ...(isDisabled ? variants.disabled : variants[variant]),
  };

  const Tag = href ? 'a' : as;
  return (
    <Tag style={style} href={href} disabled={Tag === 'button' ? isDisabled : undefined} {...rest}>
      {children}
      {variant === 'ghost' && <span aria-hidden="true">→</span>}
    </Tag>
  );
}
