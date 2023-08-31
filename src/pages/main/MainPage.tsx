import { Box, Card } from '@common/index';
import Header from '@layouts/Header/Header';
import Sidebar from '@layouts/Sidebar/Sidebar';

import styles from './MainPage.module.css';

export const MainPage = () => (
  <Sidebar>
    <Header>
      <Box className={styles.main}>
        <h1 className={styles.main_title}>Spotify Playlists</h1>
        <Box className={styles.main_list}>
          <Card />
        </Box>
      </Box>
    </Header>
  </Sidebar>
);
