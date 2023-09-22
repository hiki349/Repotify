import { FC } from 'react';

import { Box, Button, CustomLink } from '@common';
import AddIcon from '@static/icons/AddIcon';
import LanguageIcon from '@static/icons/Language';
import LibraryIcon from '@static/icons/Library';

import { libraryLinks } from './data';

import styles from './Library.module.css';

interface LibraryProps {}

export const Library: FC<LibraryProps> = () => (
  <Box className={styles.library}>
    <Box className={styles.library_header}>
      <Button className={styles.library_header__container}>
        <LibraryIcon width={20} height={20} />
        <p className={styles.library_header__title}>Your Library</p>
      </Button>
      <Button className={styles.library_header__button}>
        <AddIcon width={16} />
      </Button>
    </Box>
    <section className={styles.library_body}>
      <Box className={styles.library_main}>
        <Box className={styles.library_main__container}>
          <h5 className={styles.library_main__title}>Create your first playlist</h5>
          <p className={styles.library_main__text}>It`s easy, we`ll help you</p>
          <Button className={styles.library_main__button}>Create playlist</Button>
        </Box>
        <Box className={styles.library_main__container}>
          <h5 className={styles.library_main__title}>Let`s find some podcasts to follow</h5>
          <p className={styles.library_main__text}>We`ll keep you updated on new episodes</p>
          <Button className={styles.library_main__button}>Browse podcasts</Button>
        </Box>
      </Box>
      <Box className={styles.library_footer}>
        <Box className={styles.library_footer__wrapper}>
          {libraryLinks.map((libraryLink) => (
            <CustomLink path={libraryLink.path} key={libraryLink.name}>
              {libraryLink.name}
            </CustomLink>
          ))}
        </Box>
        <Button
          className={styles.library_footer__button}
          // className={styles.footer_button__icon}
        >
          <LanguageIcon width={16} height={16} />
          English
        </Button>
      </Box>
    </section>
  </Box>
);
