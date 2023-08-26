import React, { FC } from 'react';

import Box from '@common/Box/Box';
import CustomLink from '@common/CustomLink/CustomLink';

import styles from './Sidebar.module.css';
import Library from '@common/Library/Library';

interface SidebarProps {
  children?: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => (
  <div className={styles.Sidebar}>
    <div className={styles.sidebar__container}>
      <Box className={styles.nav}>
        <CustomLink href='/'>
          Home
          {/* Icon home */}
        </CustomLink>
        <CustomLink href='/search'>
          Search
          {/* Icon search */}
        </CustomLink>
      </Box>
      <Box>
        <Library />
      </Box>
    </div>
    <main className={styles.main}>{children}</main>
  </div>
);

export default Sidebar;
