import * as React from 'react';

export interface StatCalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The big number, e.g. "4×" or "60%". */
  value: string;
  /** Caption below, e.g. "faster training throughput". */
  caption: string;
  cornerSquare?: boolean;
  bordered?: boolean;
}

/** Large gold display-lg numeric + caption for long-form industry pages. */
export function StatCallout(props: StatCalloutProps): JSX.Element;
