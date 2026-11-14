import * as React from 'react';

export interface PrimaryNavProps extends React.HTMLAttributes<HTMLElement> {
  /** Wordmark text (no logo mark provided). */
  brand?: string;
  links?: string[];
  activeLink?: string;
  /** Gold CTA label. */
  cta?: string;
  onNavigate?: (link: string) => void;
}

/**
 * 64px black primary navigation: wordmark, centered links, search + login + gold CTA.
 * @startingPoint section="Navigation" subtitle="Primary black nav bar" viewport="1280x96"
 */
export function PrimaryNav(props: PrimaryNavProps): JSX.Element;
