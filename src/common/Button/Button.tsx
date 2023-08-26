import React, { FC, forwardRef } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => (
    <button
      type={type}
      className={`w-full rounded-full border border-transparent bg-black px-6 py-3 text-base font-bold text-white transition  disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
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
