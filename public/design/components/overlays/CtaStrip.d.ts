import * as React from 'react';

export interface CtaStripProps extends React.HTMLAttributes<HTMLElement> {
  headline: string;
  cta?: string;
  onClick?: () => void;
}

/** Compressed one-row black "ready to get started?" band between content sections. */
export function CtaStrip(props: CtaStripProps): JSX.Element;
