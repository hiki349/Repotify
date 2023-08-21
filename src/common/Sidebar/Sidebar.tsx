import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import Box from '@common/Box/Box';
import SidebarLink from '@common/SidebarLink/SidebarLink';

import styles from './Sidebar.module.css';

interface SidebarProps {
  children?: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const params = useLocation();

  const routes = React.useMemo(
    () => [
      {
        label: 'Home',
        active: params.pathname !== '/search',
        href: '/'
      },
      {
        label: 'Search',
        active: params.pathname === '/search',
        href: '/search'
      }
    ],
    [params.pathname]
  );

  return (
    <div className={styles.Sidebar}>
      <div className={styles.sidebar__container}>
        <Box>
          {routes.map((item) => (
            <SidebarLink key={item.label} {...item} />
          ))}
        </Box>
        <Box className={styles.library}>Song Library</Box>
      </div>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Sidebar;
