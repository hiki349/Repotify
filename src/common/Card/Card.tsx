import { FC } from 'react';

import { Box, Button } from '@common';
import PlayIcon from '@static/icons/Play';

import { CardProps } from '../../../@types/card';

import styles from './Card.module.css';

export const Card: FC<CardProps> = ({ image, title, description }) => (
  <Box className={`group ${styles.card} `}>
    <Box className={styles.card_image}>
      <img src={image} alt='song-1' />
    </Box>
    <Box className={styles.card_content}>
      <h2 className={styles.card_content__title}>{title}</h2>
      <p className={styles.card_content__text}>{description}</p>
    </Box>
    <div className={styles.card_action}>
      <Button
        className={`${styles.card_action__button} group-hover:translate-y-0 group-hover:opacity-100`}
      >
        <PlayIcon width={16} height={16} />
      </Button>
    </div>
  </Box>
);
