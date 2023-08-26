import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './CustomLink.module.css';

interface CustomLinkProps {
  children: ReactNode;
  href: string;
}

const CustomLink: FC<CustomLinkProps> = ({ children, href }) => (
  <NavLink
    to={href}
    className={({ isActive }) => (isActive ? `text-white ${styles.customLink}` : styles.customLink)}
  >
    {children}
  </NavLink>
);

export default CustomLink;
