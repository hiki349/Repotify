import React, { FC, forwardRef } from 'react';

import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => (
    <button
      type={type}
      className={`${className} ${styles.Button}`}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button';
// const Button: FC<ButtonProps> = () => <div className={styles.Button}>Button Component</div>;

export default Button;
