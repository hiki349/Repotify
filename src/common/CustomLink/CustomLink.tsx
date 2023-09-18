import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { CustomLinkProps } from '../../../@types/link';

import styles from './CustomLink.module.css';

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
