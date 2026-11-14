import * as React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual treatment. primary = gold fill, outline = gold border on light, outline-on-dark = white border on black, ghost = inline arrow link, disabled = flat gray. */
  variant?: 'primary' | 'outline' | 'outline-on-dark' | 'ghost' | 'disabled';
  /** Height/padding tier. */
  size?: 'lg' | 'md' | 'sm';
  disabled?: boolean;
  /** Render as an anchor when set. */
  href?: string;
  as?: 'button' | 'a';
  children?: React.ReactNode;
}

/**
 * The universal Ananta Ions CTA. Pair a `primary` (gold fill) with an `outline` (gold border)
 * for primary+secondary action pairs. Keep gold scarce per fold.
 * @startingPoint section="Buttons" subtitle="Primary, outline, ghost CTAs" viewport="700x160"
 */
export function Button(props: ButtonProps): JSX.Element;
