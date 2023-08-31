import { FC, ReactNode } from 'react';

import { Box, CustomLink } from '@common/index';
import Library from '@layouts/Sidebar/Library/Library';

import styles from './Sidebar.module.css';

interface SidebarProps {
  children?: ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => (
  <Box className={styles.sidebar}>
    <Box className={styles.sidebar__container}>
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
      <Library />
    </Box>

    <main className={styles.main}>
      <Box className={styles.main_wrapper}>{children}</Box>
    </main>
  </Box>
);

export default Sidebar;
