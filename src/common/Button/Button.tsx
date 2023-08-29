import React, { FC } from 'react';

import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ className, children, disabled, type = 'button', ...props }) => (
  <button type={type} className={`${className} ${styles.Button}`} disabled={disabled} {...props}>
    {children}
  </button>
);

Button.displayName = 'Button';
// const Button: FC<ButtonProps> = () => <div className={styles.Button}>Button Component</div>;

export default Button;
