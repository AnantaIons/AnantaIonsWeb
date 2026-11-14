import * as React from 'react';

export interface SubNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: string[];
  active?: string;
  onSelect?: (item: string) => void;
}

/** 56px soft-gray section-nav strip; active anchor gets a 3px gold underline. */
export function SubNav(props: SubNavProps): JSX.Element;
