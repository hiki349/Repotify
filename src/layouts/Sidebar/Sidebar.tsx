import { FC } from 'react';

import { Box, Button, CustomLink } from '@common';
import homeIcon from '@static/icons/home.svg';
import searchIcon from '@static/icons/search.svg';

import { Library } from './Library/Library';

import styles from './Sidebar.module.css';

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = () => (
  <Box className={styles.sidebar}>
    <Box className={styles.sidebar__container}>
      <Box className={styles.nav}>
        <CustomLink path='/'>
          <Button startIcon={homeIcon} alt='home' className={styles.nav_button} />
          Home
        </CustomLink>
        <CustomLink path='/search'>
          <Button startIcon={searchIcon} alt='search' className={styles.nav_button} />
          Search
        </CustomLink>
      </Box>
      <Library />
    </Box>
  </Box>
);
