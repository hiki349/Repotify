import { useLoaderData } from 'react-router-dom';

import { Box, Card } from '@common';

import { PlaylistsResponse } from '../../../@types/playlistResponse';

import styles from './MainPage.module.css';

export const MainPage = () => {
  const playList = useLoaderData() as PlaylistsResponse;

  return (
    <Box className={styles.main}>
      <h1 className={styles.main_title}>Spotify Playlists</h1>
      <Box className={styles.main_list}>
        {playList.playlists.items.map((playListItem) => (
          <Card
            key={playListItem.id}
            image={playListItem.images[0].url}
            title={playListItem.name}
            description={playListItem.description}
          />
        ))}
      </Box>
    </Box>
  );
};
