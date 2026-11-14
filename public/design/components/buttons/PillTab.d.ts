import * as React from 'react';

export interface PillTabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Selected state — flips the tab to a solid black fill with white text. */
  active?: boolean;
  children?: React.ReactNode;
}

/** Segmented-control tab used in filter strips. Inverts to black-on-selection. */
export function PillTab(props: PillTabProps): JSX.Element;
