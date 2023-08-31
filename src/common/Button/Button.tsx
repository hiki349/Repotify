import { ButtonHTMLAttributes, FC } from 'react';

import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ className, children, disabled, ...props }) => (
  <button className={`${className} ${styles.Button}`} disabled={disabled} {...props}>
    {children}
  </button>
);

Button.displayName = 'Button';
// const Button: FC<ButtonProps> = () => <div className={styles.Button}>Button Component</div>;
