import { FC } from 'react';

import Button from '@common/Button/Button';
import image from '@static/images/image-1.jpg';

import styles from './Card.module.css';

interface CardProps {}

const Card: FC<CardProps> = () => (
  <div className={`group ${styles.card} `}>
    <div className={styles.card_image}>
      <img src={image} alt='song-1' />
    </div>
    <div className={styles.card_content}>
      <p className={styles.card_content__title}>All Out 80s</p>
      <p className={styles.card_content__text}>The biggest song</p>
    </div>
    <div className={styles.card_action}>
      <Button
        className={`${styles.card_action__button} group-hover:translate-y-0 group-hover:opacity-100`}
      >
        &#9654;
      </Button>
    </div>
  </div>
);

export default Card;
