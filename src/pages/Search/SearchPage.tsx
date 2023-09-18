import { FC, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Box, Card, Input, Typography } from '@common';

import styles from './SearchPage.module.css';

interface SearchPageProps {}

export const SearchPage: FC<SearchPageProps> = () => {
  const [value, setValue] = useState('');
  const allPlaylists = useLoaderData() as CategoriesResponse;

  return (
    <Box className={styles.search}>
      <Typography variable='h5'>Search</Typography>
      <Input
        placeholder='What do you want to listen to ?'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Box className={styles.categories_list}>
        {allPlaylists.categories.items.map((playListItem) => (
          <Card
            key={playListItem.id}
            image={playListItem.icons[0].url}
            title={playListItem.name}
            description={playListItem.description}
          />
        ))}
      </Box>
    </Box>
  );
};
