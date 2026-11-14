import * as React from 'react';

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  /** Bold label rendered above the field. */
  label?: string;
  /** Error message; turns the border red and shows the message below. */
  error?: string;
  style?: React.CSSProperties;
}

/** 44px text field. The 2px gold focus border is the system's only focus signal. */
export function TextInput(props: TextInputProps): JSX.Element;
