import * as React from 'react';

export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  placeholder?: string;
  style?: React.CSSProperties;
}

/** 40px search field with a leading magnifier glyph. Requires Font Awesome to be loaded. */
export function SearchInput(props: SearchInputProps): JSX.Element;
