import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button } from '@common';
import ChevronLeftIcon from '@static/icons/ChevronLeft';
import ChevronRightIcon from '@static/icons/ChevronRight';
import HomeIcon from '@static/icons/Home';
import SearchIcon from '@static/icons/Search';

import styles from './Header.module.css';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const navigate = useNavigate();

  return (
    <Box className={styles.header}>
      <Box className={styles.header_wrapper}>
        <Box className={styles.header_stepper}>
          <Button onClick={() => navigate(-1)} className={styles.header_stepper__button}>
            <ChevronLeftIcon width={16} height={16} />
          </Button>
          <Button onClick={() => navigate(1)} className={styles.header_stepper__button}>
            <ChevronRightIcon width={16} height={16} />
          </Button>
        </Box>
        <Box className={styles.header_mobile}>
          <Button className={styles.header_mobile__button}>
            <HomeIcon width={16} height={16} />
          </Button>
          <Button className={styles.header_mobile__button}>
            <SearchIcon width={16} height={16} />
          </Button>
        </Box>
        <Box className={styles.header_auth}>
          <Button className={styles.header_auth__signup}>Sign up</Button>
          <Button className={styles.header_auth__login}>Sign in</Button>
        </Box>
      </Box>
    </Box>
  );
};
