import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, ButtonImg, CustomLink } from '@common';
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
          <Button onClick={() => navigate(-1)} className={styles.header_stepper__button}>
            <ButtonImg path={leftArrowIcon} alt='left arrow' className={styles.stepper__icon} />
          </Button>
          <Button onClick={() => navigate(1)} className={styles.header_stepper__button}>
            <ButtonImg path={rightArrowIcon} alt='right arrow' className={styles.stepper__icon} />
          </Button>
        </Box>
        <Box className={styles.header_mobile}>
          <Button className={styles.header_mobile__button}>
            <ButtonImg path={homeIcon} alt='home' />
          </Button>
          <Button className={styles.header_mobile__button}>
            <ButtonImg path={searchIcon} alt='search' />
          </Button>
        </Box>
        <Box className={styles.header_auth}>
          <CustomLink className={styles.header_auth__signup} path=''>
            Sign up
          </CustomLink>
          <CustomLink className={styles.header_auth__login} path=''>
            Sign in
          </CustomLink>
        </Box>
      </Box>
    </Box>
  );
};
