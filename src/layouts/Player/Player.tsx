import { FC } from 'react';

import { Box, Button, Typography } from '@common';

import styles from './Player.module.css';

interface PlayerProps {}

export const Player: FC<PlayerProps> = () => (
  <Box className={styles.player}>
    <Box className={styles.player_wrapper}>
      <Box className={styles.player_media__box}>
        <Box className={styles.media_box}>
          <Button className={styles.media_button} />
          <Box className={styles.media_content}>
            <Typography variable='h6' style={styles.media_content__title}>
              Title
            </Typography>
            <Typography variable='h6' style={styles.media_content__author}>
              By Author
            </Typography>
          </Box>
        </Box>
        <Button />
      </Box>
      <Box className={styles.player_wrapper__mobile}>
        <Box className={styles.player_media__mobile}>
          <Button className='text-black' />
        </Box>
      </Box>

      <Box className={styles.player_control__box}>
        <Box className={styles.player_button__wrapper}>
          <Button className={styles.player_button} />
        </Box>

        <Box className={styles.button_play__wrapper}>
          <Button className={styles.player_button__play} />
        </Box>

        <Box className={styles.player_button__wrapper}>
          <Button className={styles.player_button} />
        </Box>
      </Box>
      <Box className={styles.player_volume__wrapper}>
        <Box className={styles.player_button__volume}>
          <Button className={styles.player_button} />
        </Box>
      </Box>
    </Box>
  </Box>
);
