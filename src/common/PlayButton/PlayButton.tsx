import { FC } from 'react';

import styles from './PlayButton.module.css';

interface PlayButtonProps {}

const PlayButton: FC<PlayButtonProps> = () => (
  <button className={styles.PlayButton}>&#9654;</button>
);

export default PlayButton;
