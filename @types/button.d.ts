import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: string;
  alt?: string;
  className?: string;
  children?: ReactNode;
}
