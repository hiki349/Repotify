import { FC } from 'react';

import { Box, ButtonImg, CustomLink } from '@common';
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
          <ButtonImg path={homeIcon} alt='home' />
          Home
        </CustomLink>
        <CustomLink path='/search'>
          <ButtonImg path={searchIcon} alt='search' />
          Search
        </CustomLink>
      </Box>
      <Library />
    </Box>
  </Box>
);
