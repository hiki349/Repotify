import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button } from '@common';
import leftArrowIcon from '@static/icons/chevron-left.svg';
import rightArrowIcon from '@static/icons/chevron-right.svg';
import homeIcon from '@static/icons/home.svg';
import searchIcon from '@static/icons/search.svg';

import styles from './Header.module.css';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const navigate = useNavigate();

  return (
    <Box className={styles.header}>
      <Box className={styles.header_wrapper}>
        <Box className={styles.header_stepper}>
          <Button
            onClick={() => navigate(-1)}
            startIcon={leftArrowIcon}
            alt='left arrow'
            className={styles.header_stepper__button}
          />
          <Button
            onClick={() => navigate(1)}
            startIcon={rightArrowIcon}
            alt='right arrow'
            className={styles.header_stepper__button}
          />
        </Box>
        <Box className={styles.header_mobile}>
          <Button startIcon={homeIcon} alt='home' className={styles.header_mobile__button} />
          <Button startIcon={searchIcon} alt='search' className={styles.header_mobile__button} />
        </Box>
        <Box className={styles.header_auth}>
          <Button className={styles.header_auth__signup}>Sign up</Button>
          <Button className={styles.header_auth__login}>Sign in</Button>
        </Box>
      </Box>
    </Box>
  );
};
