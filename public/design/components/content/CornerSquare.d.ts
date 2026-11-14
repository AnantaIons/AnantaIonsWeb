import * as React from 'react';

export interface CornerSquareProps extends React.HTMLAttributes<HTMLSpanElement> {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /** Square size in px. 12 standard, 16 on hero callouts. */
  size?: number;
  color?: string;
}

/** The system's one ornamental motif: a solid-gold square pinned to a card corner.
 * Its parent must be `position: relative`. */
export function CornerSquare(props: CornerSquareProps): JSX.Element;
