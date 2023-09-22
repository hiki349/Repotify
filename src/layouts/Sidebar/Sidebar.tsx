import { FC } from 'react';

import { Box, Button, CustomLink } from '@common';
import HomeIcon from '@static/icons/Home';
import SearchIcon from '@static/icons/Search';

import { Library } from './Library/Library';

import styles from './Sidebar.module.css';

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = () => (
  <Box className={styles.sidebar}>
    <Box className={styles.sidebar__container}>
      <Box className={styles.nav}>
        <CustomLink path='/'>
          <Button className={styles.nav_button}>
            <HomeIcon width={16} height={16} />
            Home
          </Button>
        </CustomLink>
        <CustomLink path='/search'>
          <Button className={styles.nav_button}>
            <SearchIcon width={16} height={16} />
            Search
          </Button>
        </CustomLink>
      </Box>
      <Library />
    </Box>
  </Box>
);
