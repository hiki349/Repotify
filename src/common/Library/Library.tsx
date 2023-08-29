import { FC } from 'react';

import Button from '@common/Button/Button';
import CustomLink from '@common/CustomLink/CustomLink';

import styles from './Library.module.css';

interface LibraryProps {}

const Library: FC<LibraryProps> = () => {
  const onClick = () => {
    // console.log('click');
  };

  return (
    <div className={styles.library}>
      <div className={styles.library_header}>
        <div className={styles.library_header__container}>
          {/* Icon library */}
          <p className={styles.library_header__title}>Your Library</p>
        </div>
        <button onClick={onClick} className={styles.library_header__button}>
          +
        </button>
      </div>
      <section className={styles.library_body}>
        <main className={styles.library_main}>
          <div className={styles.library_main__container}>
            <h1 className={styles.library_main__title}>Create your first playlist</h1>
            <p className={styles.library_main__text}>It`s easy, we`ll help you</p>
            <Button className={styles.library_main__button}>Create playlist</Button>
          </div>
          <div className={styles.library_main__container}>
            <h1 className={styles.library_main__title}>Let`s find some podcasts to follow</h1>
            <p className={styles.library_main__text}>We`ll keep you updated on new episodes</p>
            <Button className={styles.library_main__button}>Browse podcasts</Button>
          </div>
        </main>
        <footer className={styles.library_footer}>
          <div className={styles.library_footer__wrapper}>
            <CustomLink href='https://www.spotify.com/ua-en/legal/end-user-agreement/'>
              Legal
            </CustomLink>
            <CustomLink href='https://www.spotify.com/ua-en/privacy'>Privacy Center</CustomLink>
            <CustomLink href='https://www.spotify.com/ua-en/legal/privacy-policy/'>
              Privacy Policy
            </CustomLink>
            <CustomLink href='https://www.spotify.com/ua-en/legal/cookies-policy/'>
              Cookies
            </CustomLink>
            <CustomLink href='https://www.spotify.com/ua-en/legal/privacy-policy/#s3'>
              About ads
            </CustomLink>
            <CustomLink href='https://www.spotify.com/ua-en/accessibility'>
              Accessability
            </CustomLink>
          </div>
          <Button className={styles.library_footer__button}>
            {/* <span>icon language</span> */}
            English
          </Button>
        </footer>
      </section>
    </div>
  );
};

export default Library;
