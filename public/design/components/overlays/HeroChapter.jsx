import React from 'react';
import { Button } from '../buttons/Button.jsx';
import { CornerSquare } from '../content/CornerSquare.jsx';

/**
 * HeroChapter — black hero: full-bleed image (optional) with a dark gradient overlay,
 * copy hugging the left, a single gold CTA (optionally paired with an outline-on-dark).
 */
export function HeroChapter({
  eyebrow,
  headline,
  subhead,
  image,
  primaryCta = 'Get started',
  secondaryCta,
  onPrimary,
  onSecondary,
  cornerSquare = true,
  style,
  ...rest
}) {
  const bg = image
    ? { backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.92) 0%, rgba(0,0,0,.7) 45%, rgba(0,0,0,.25) 100%), url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { background: 'var(--color-surface-dark)' };

  return (
    <section style={{ position: 'relative', color: 'var(--color-on-dark)', fontFamily: 'var(--font-family)', ...bg, ...style }} {...rest}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '80px 24px', boxSizing: 'border-box' }}>
        <div style={{ position: 'relative', maxWidth: '620px', paddingLeft: '20px' }}>
          {cornerSquare && <CornerSquare position="top-left" size={16} />}
          {eyebrow && <div style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.5px', color: 'var(--color-primary)', marginBottom: '16px' }}>{eyebrow}</div>}
          <h1 style={{ margin: 0, fontSize: '48px', fontWeight: 700, lineHeight: 1.25 }}>{headline}</h1>
          {subhead && <p style={{ margin: '16px 0 0', fontSize: '22px', fontWeight: 400, lineHeight: 1.4, color: 'var(--color-on-dark-mute)' }}>{subhead}</p>}
          <div style={{ display: 'flex', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
            {primaryCta && <Button variant="primary" size="lg" onClick={onPrimary}>{primaryCta}</Button>}
            {secondaryCta && <Button variant="outline-on-dark" size="lg" onClick={onSecondary}>{secondaryCta}</Button>}
          </div>
        </div>
      </div>
    </section>
  );
}
