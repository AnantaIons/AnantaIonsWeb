import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** product = 1:1 image + tight copy; feature = gold icon + heading; resource = badge + 3:2 image + description. */
  variant?: 'product' | 'feature' | 'resource';
  /** Uppercase category tag (resource cards). */
  badge?: string;
  /** Image URL (product/resource). */
  image?: string;
  /** A React node rendered in the image slot instead of an <img> (e.g. a placeholder). */
  imageNode?: React.ReactNode;
  /** Font Awesome class for the feature-card icon, e.g. "fa-solid fa-microchip". */
  icon?: string;
  title?: string;
  description?: string;
  /** Ghost-link label; pass empty string to hide. */
  action?: string;
  cornerSquare?: boolean;
  cornerPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  children?: React.ReactNode;
}

/**
 * Flat white card with hairline border and gold corner square — no shadow, no lift.
 * @startingPoint section="Cards" subtitle="Product, feature, resource cards" viewport="700x360"
 */
export function Card(props: CardProps): JSX.Element;
