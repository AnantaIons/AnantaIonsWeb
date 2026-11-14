import React from 'react';
import { CornerSquare } from './CornerSquare.jsx';
import { Badge } from './Badge.jsx';
import { Button } from '../buttons/Button.jsx';

/**
 * Card — flat white rectangle with hairline border and gold corner square.
 * variant: product | feature | resource
 */
export function Card({
  variant = 'resource',
  badge,
  image,
  imageNode,
  icon,
  title,
  description,
  action = 'Learn more',
  cornerSquare = true,
  cornerPosition = 'top-left',
  style,
  children,
  ...rest
}) {
  const padding = variant === 'feature' ? '32px' : '24px';
  const aspect = variant === 'product' ? '1 / 1' : variant === 'resource' ? '3 / 2' : '16 / 9';

  return (
    <div
      style={{
        position: 'relative',
        background: 'var(--color-canvas)',
        border: '1px solid var(--color-hairline)',
        borderRadius: 'var(--radius-sm)',
        padding,
        boxSizing: 'border-box',
        fontFamily: 'var(--font-family)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        ...style,
      }}
      {...rest}
    >
      {cornerSquare && <CornerSquare position={cornerPosition} />}

      {variant === 'feature' && icon && (
        <i className={icon} aria-hidden="true" style={{ fontSize: '24px', color: 'var(--color-primary)' }}></i>
      )}

      {variant !== 'feature' && imageNode && (
        <div style={{ margin: `-${parseInt(padding)}px -${parseInt(padding)}px 4px` }}>{imageNode}</div>
      )}

      {variant !== 'feature' && !imageNode && image && (
        <div style={{ margin: `-${parseInt(padding)}px -${parseInt(padding)}px 4px`, aspectRatio: aspect, overflow: 'hidden', background: 'var(--color-surface-soft)' }}>
          <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      )}

      {badge && <div><Badge>{badge}</Badge></div>}

      {title && (
        <h3 style={{
          margin: 0,
          fontSize: variant === 'feature' ? '20px' : '17px',
          fontWeight: 700,
          lineHeight: variant === 'feature' ? 1.25 : 1.47,
          color: 'var(--color-ink)',
        }}>{title}</h3>
      )}

      {description && (
        <p style={{ margin: 0, fontSize: variant === 'feature' ? '16px' : '15px', fontWeight: 400, lineHeight: variant === 'feature' ? 1.5 : 1.67, color: 'var(--color-body)' }}>{description}</p>
      )}

      {children}

      {action && (
        <div style={{ marginTop: 'auto', paddingTop: '4px' }}>
          <Button variant="ghost">{action}</Button>
        </div>
      )}
    </div>
  );
}
