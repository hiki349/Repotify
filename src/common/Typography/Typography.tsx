import { createElement, FC, ReactNode } from 'react';

import styles from './Typography.module.css';

export interface TypographyProps {
  children: ReactNode;
  variable?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  style?: string;
}

export const Typography: FC<TypographyProps> = ({ children, variable = 'span', style = '' }) =>
  createElement(variable, { className: `${styles.typography} ${style}` }, children);
