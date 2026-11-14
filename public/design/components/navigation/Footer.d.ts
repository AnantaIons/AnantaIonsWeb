import * as React from 'react';

export interface FooterColumn {
  heading: string;
  links: string[];
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  brand?: string;
  /** Link columns (6 at desktop). */
  columns?: FooterColumn[];
  /** Font Awesome classes for social icons. */
  social?: string[];
  legal?: string;
  legalLinks?: string[];
}

/**
 * Dense multi-column black footer closing every page, with a uppercase fine-print bar.
 * @startingPoint section="Navigation" subtitle="Global multi-column footer" viewport="1280x420"
 */
export function Footer(props: FooterProps): JSX.Element;
