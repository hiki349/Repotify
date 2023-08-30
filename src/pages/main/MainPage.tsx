import Box from '@common/Box/Box';
import Card from '@pages/main/Card/Card';
import Header from '@pages/main/Header/Header';
import Sidebar from '@pages/main/Sidebar/Sidebar';

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
