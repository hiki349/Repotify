import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './SidebarLink.module.css';

interface SidebarLinkProps {
  label: string;
  active?: boolean;
  href: string;
}

const SidebarLink: FC<SidebarLinkProps> = ({ label, active, href }) => (
  <NavLink to={href} className={`${styles.SidebarLink} ${active && 'text-white'} `}>
    {label}
  </NavLink>
);

export default SidebarLink;
