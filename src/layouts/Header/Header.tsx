import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, CustomLink } from '@common';

import styles from './Header.module.css';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const navigate = useNavigate();

  return (
    <Box className={styles.header}>
      <Box className={styles.header_wrapper}>
        <Box className={styles.header_stepper}>
          <Button onClick={() => navigate(-1)} className={styles.header_stepper__button}>
            &#60;
            {/* Icon arrow left */}
          </Button>
          <Button onClick={() => navigate(1)} className={styles.header_stepper__button}>
            &#62;
            {/* Icon arrow right */}
          </Button>
        </Box>
        <Box className={styles.header_mobile}>
          <Button className={styles.header_mobile__button}>
            {/* Icon home */}
            Home
          </Button>
          <Button className={styles.header_mobile__button}>
            {/* Icon search */}
            Search
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
