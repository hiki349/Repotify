import React, { FC } from 'react';

import Box from '@common/Box/Box';
import CustomLink from '@common/CustomLink/CustomLink';
import Library from '@common/Library/Library';

import styles from './Sidebar.module.css';

interface SidebarProps {
  children?: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => (
  <div className={styles.Sidebar}>
    <div className={styles.sidebar__container}>
      <Box className={styles.nav}>
        <CustomLink path='/'>
          Home
          {/* Icon home */}
        </CustomLink>
        <CustomLink path='/search'>
          Search
          {/* Icon search */}
        </CustomLink>
      </Box>
      <Box className={styles.library}>
        <Library />
      </Box>
    </div>
    <main className={styles.main}>{children}</main>
  </div>
);

export default Sidebar;
