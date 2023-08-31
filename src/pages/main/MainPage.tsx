import { Box, Card } from '@common';
import songImg from '@static/images/song.jpg';

import styles from './MainPage.module.css';

export const MainPage = () => (
  <Box className={styles.main}>
    <h1 className={styles.main_title}>Spotify Playlists</h1>
    <Box className={styles.main_list}>
      <Card image={songImg} title='Test' description='desc test' />
    </Box>
  </Box>
);
