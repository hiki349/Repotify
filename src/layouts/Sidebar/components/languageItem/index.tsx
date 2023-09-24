import { FC } from 'react';

import { Typography } from '@common';

import styles from './styles.module.css';

interface LanguageItemProps {
  selectLanguage: () => void;
  language: string;
}

export const LanguageItem: FC<LanguageItemProps> = ({ selectLanguage, language }) => (
  <div onClick={selectLanguage} aria-hidden='true' className={styles.language}>
    <Typography variable='h6' style={styles.language_title}>
      {language}
    </Typography>
    <Typography variable='span' style={styles.language_desc}>
      {language}
    </Typography>
  </div>
);
