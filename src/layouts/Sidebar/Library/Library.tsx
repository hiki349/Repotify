import { FC } from 'react';

import { Box, Button, CustomLink } from '@common/index';

import styles from './Library.module.css';

interface LibraryProps {}

const Library: FC<LibraryProps> = () => {
  const onClick = () => {
    // console.log('click');
  };

  return (
    <Box className={styles.library}>
      <Box className={styles.library_header}>
        <Box className={styles.library_header__container}>
          {/* Icon library */}
          <p className={styles.library_header__title}>Your Library</p>
        </Box>
        <button onClick={onClick} className={styles.library_header__button}>
          +
        </button>
      </Box>
      <section className={styles.library_body}>
        <main className={styles.library_main}>
          <Box className={styles.library_main__container}>
            <h1 className={styles.library_main__title}>Create your first playlist</h1>
            <p className={styles.library_main__text}>It`s easy, we`ll help you</p>
            <Button className={styles.library_main__button}>Create playlist</Button>
          </Box>
          <Box className={styles.library_main__container}>
            <h1 className={styles.library_main__title}>Let`s find some podcasts to follow</h1>
            <p className={styles.library_main__text}>We`ll keep you updated on new episodes</p>
            <Button className={styles.library_main__button}>Browse podcasts</Button>
          </Box>
        </main>
        <footer className={styles.library_footer}>
          <Box className={styles.library_footer__wrapper}>
            <CustomLink path='https://www.spotify.com/ua-en/legal/end-user-agreement/'>
              Legal
            </CustomLink>
            <CustomLink path='https://www.spotify.com/ua-en/privacy'>Privacy Center</CustomLink>
            <CustomLink path='https://www.spotify.com/ua-en/legal/privacy-policy/'>
              Privacy Policy
            </CustomLink>
            <CustomLink path='https://www.spotify.com/ua-en/legal/cookies-policy/'>
              Cookies
            </CustomLink>
            <CustomLink path='https://www.spotify.com/ua-en/legal/privacy-policy/#s3'>
              About ads
            </CustomLink>
            <CustomLink path='https://www.spotify.com/ua-en/accessibility'>
              Accessability
            </CustomLink>
          </Box>
          <Button className={styles.library_footer__button}>
            {/* <span>icon language</span> */}
            English
          </Button>
        </footer>
      </section>
    </Box>
  );
};

export default Library;
