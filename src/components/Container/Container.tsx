import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <div className={`${className} h-fit w-full rounded-lg bg-neutral-900`}>{children}</div>
);
