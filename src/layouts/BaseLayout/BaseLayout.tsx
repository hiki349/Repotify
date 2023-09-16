import { Outlet } from 'react-router-dom';

import { Box } from '@common';

import { Header } from '../Header/Header';
import { Player } from '../Player/Player';
import { Sidebar } from '../Sidebar/Sidebar';

import styles from './BaseLAyout.module.css';

export const BaseLayout = () => (
  <>
    <Box className={styles.layout}>
      <Sidebar />
      <Box className={styles.layout_wrapper}>
        <Box className={styles.layout_wrapper__content}>
          <Header />
          <Box className={styles.layout_wrapper__main}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
    <Player />
  </>
);
