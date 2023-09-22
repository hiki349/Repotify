import { FC } from 'react';

import { ButtonProps } from '../../../@types/button';

import styles from './Button.module.css';

export const Button: FC<ButtonProps> = ({
  className = '',
  children,
  disabled,
  startIcon,
  ...props
}) => (
  <button className={`${className} ${styles.button}`} disabled={disabled} {...props}>
    {children}
  </button>
);
