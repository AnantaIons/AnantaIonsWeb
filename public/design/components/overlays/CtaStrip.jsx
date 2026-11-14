import React from 'react';
import { Button } from '../buttons/Button.jsx';

/**
 * CtaStrip — compressed one-row black band bridging content sections.
 */
export function CtaStrip({ headline, cta = 'Contact sales', onClick, style, ...rest }) {
  return (
    <section style={{ background: 'var(--color-surface-dark)', color: 'var(--color-on-dark)', fontFamily: 'var(--font-family)', ...style }} {...rest}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
        <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 700, lineHeight: 1.25 }}>{headline}</h2>
        <Button variant="primary" onClick={onClick}>{cta}</Button>
      </div>
    </section>
  );
}
