import React from 'react';

/**
 * CornerSquare — the brand's signature 12px gold square, anchored to a card corner.
 * position: top-left | top-right | bottom-left | bottom-right
 */
export function CornerSquare({ position = 'top-left', size = 12, color = 'var(--color-primary)', style, ...rest }) {
  const [v, h] = position.split('-');
  return (
    <span
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: size,
        height: size,
        background: color,
        [v]: 0,
        [h]: 0,
        ...style,
      }}
      {...rest}
    />
  );
}
