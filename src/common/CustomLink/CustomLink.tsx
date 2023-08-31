import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './CustomLink.module.css';

interface CustomLinkProps {
  children: ReactNode;
  path: string;
}

export const CustomLink: FC<CustomLinkProps> = ({ children, path }) => (
  <NavLink
    to={path}
    className={({ isActive }) => (isActive ? `text-white ${styles.customLink}` : styles.customLink)}
  >
    {children}
  </NavLink>
);
