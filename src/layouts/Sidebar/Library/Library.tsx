import { FC, useState } from 'react';

import { Box, Button, CustomLink } from '@common';
import addIcon from '@static/icons/add.svg';
import languageIcon from '@static/icons/language.svg';
import libraryIcon from '@static/icons/library.svg';

import { LanguageModal } from '../components/languageModal';

import { libraryLinks } from './data';

import styles from './Library.module.css';

interface LibraryProps {}

export const Library: FC<LibraryProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box className={styles.library}>
      <Box className={styles.library_header}>
        <Box className={styles.library_header__container}>
          <Button startIcon={libraryIcon} alt='library' className={styles.header_icon} />
          <p className={styles.library_header__title}>Your Library</p>
        </Box>
        <Button startIcon={addIcon} alt='add' className={styles.library_header__button} />
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
            startIcon={languageIcon}
            alt='language'
            onClick={() => setIsModalOpen(true)}
            // className={styles.footer_button__icon}
          >
            English
          </Button>
          {isModalOpen && <LanguageModal setIsOpen={setIsModalOpen} />}
        </Box>
      </section>
    </Box>
  );
};
