import { FC } from 'react';

import { BoxProps } from '../../../@types/box';

import styles from './Box.module.css';

export const Box: FC<BoxProps> = ({ children, className }) => (
  <div className={`${className} ${styles.box}`}>{children}</div>
);
