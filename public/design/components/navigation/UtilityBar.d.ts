import * as React from 'react';

export interface UtilityBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Right-aligned utility links. */
  items?: string[];
}

/** 32px black utility strip pinned above the primary nav. */
export function UtilityBar(props: UtilityBarProps): JSX.Element;
