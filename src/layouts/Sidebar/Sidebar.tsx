import { FC } from 'react';

import { Box, CustomLink } from '@common';

import { Library } from './Library/Library';

import styles from './Sidebar.module.css';

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = () => (
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

    {/* <main className={styles.main}>
      <Box className={styles.main_wrapper}>{children}</Box>
    </main> */}
  </Box>
);