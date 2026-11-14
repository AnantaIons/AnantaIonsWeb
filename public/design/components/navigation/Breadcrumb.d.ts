import * as React from 'react';

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Trail, root first. Last item renders in ink (current page). */
  items?: string[];
}

/** 48px soft-gray breadcrumb strip with uppercase caption type and chevron separators. */
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
