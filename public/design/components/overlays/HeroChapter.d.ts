import * as React from 'react';

export interface HeroChapterProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  headline: string;
  subhead?: string;
  /** Full-bleed background image; a left-to-right dark gradient overlay is applied for legibility. */
  image?: string;
  primaryCta?: string;
  secondaryCta?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  cornerSquare?: boolean;
}

/**
 * Black hero chapter anchoring the top of a landing page — copy hugs the left, imagery fills the right.
 * @startingPoint section="Overlays" subtitle="Black hero chapter" viewport="1280x520"
 */
export function HeroChapter(props: HeroChapterProps): JSX.Element;
