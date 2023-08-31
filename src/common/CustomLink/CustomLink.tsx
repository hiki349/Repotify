import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './CustomLink.module.css';

interface CustomLinkProps {
  children: ReactNode;
  path: string;
  className?: string;
}

export const CustomLink: FC<CustomLinkProps> = ({ children, path, className }) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      isActive
        ? `text-white ${styles.customLink} ${className}`
        : `${styles.customLink} ${className}`
    }
  >
    {children}
  </NavLink>
);
