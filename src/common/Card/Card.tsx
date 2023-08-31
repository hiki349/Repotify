import { FC } from 'react';

import { Box, Button } from '@common/index';
import image from '@static/images/song.jpg';

import styles from './Card.module.css';

interface CardProps {}

export const Card: FC<CardProps> = () => (
  <Box className={`group ${styles.card} `}>
    <Box className={styles.card_image}>
      <img src={image} alt='song-1' />
    </Box>
    <Box className={styles.card_content}>
      <p className={styles.card_content__title}>All Out 80s</p>
      <p className={styles.card_content__text}>The biggest song</p>
    </Box>
    <div className={styles.card_action}>
      <Button
        className={`${styles.card_action__button} group-hover:translate-y-0 group-hover:opacity-100`}
      >
        &#9654;
      </Button>
    </div>
  </Box>
);
