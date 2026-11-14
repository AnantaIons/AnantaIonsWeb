import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

/** Uppercase category / document-type tag on a soft-gray fill ("WHITE PAPER", "WEBINAR"). */
export function Badge(props: BadgeProps): JSX.Element;
