import React, { FC } from 'react';

import styles from './Box.module.css';

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: FC<BoxProps> = ({ children, className }) => (
  <div className={`${className} ${styles.box}`}>{children}</div>
);

export default Box;
