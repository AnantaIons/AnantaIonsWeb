import React from 'react';
import { Button } from '../buttons/Button.jsx';

/**
 * PrimaryNav — 64px black bar: wordmark, centered nav, search + login + gold CTA.
 * No logo was provided; the wordmark renders as plain uppercase type.
 */
export function PrimaryNav({
  brand = 'ANANTA IONS',
  links = ['Products', 'Solutions', 'Industries', 'Resources', 'Support', 'Company'],
  activeLink,
  cta = 'Get started',
  onNavigate,
  style,
  ...rest
}) {
  return (
    <nav style={{ background: 'var(--color-surface-dark)', color: 'var(--color-on-dark)', height: '64px', fontFamily: 'var(--font-family)', ...style }} {...rest}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', height: '100%', padding: '0 24px', display: 'flex', alignItems: 'center', gap: '32px' }}>
        <span style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '.5px', color: 'var(--color-on-dark)', whiteSpace: 'nowrap' }}>
          <span style={{ color: 'var(--color-primary)' }}>▪</span>&nbsp;{brand}
        </span>
        <div style={{ display: 'flex', gap: '24px', flex: 1 }}>
          {links.map((l) => (
            <a
              key={l}
              onClick={() => onNavigate?.(l)}
              style={{
                fontSize: '16px',
                fontWeight: 700,
                color: l === activeLink ? 'var(--color-primary)' : 'var(--color-on-dark)',
                cursor: 'pointer',
                textDecoration: 'none',
                borderBottom: l === activeLink ? '2px solid var(--color-primary)' : '2px solid transparent',
                paddingBottom: '2px',
              }}
            >{l}</a>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <i className="fa-solid fa-magnifying-glass" aria-hidden="true" style={{ color: 'var(--color-on-dark)', fontSize: '16px', cursor: 'pointer' }}></i>
          <a style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-on-dark)', cursor: 'pointer', textDecoration: 'none' }}>Login</a>
          <Button variant="primary" size="sm">{cta}</Button>
        </div>
      </div>
    </nav>
  );
}
