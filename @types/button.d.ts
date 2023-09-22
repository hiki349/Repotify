import React from 'react';

import { IconProps } from './icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: IconProps;
  alt?: string;
  className?: string;
  children?: ReactNode;
}
