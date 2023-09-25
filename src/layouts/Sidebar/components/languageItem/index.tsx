import { FC } from 'react';

import { Typography } from '@common';

import styles from './styles.module.css';

interface LanguageItemProps {
  selectLanguage: (lang: string) => void;
  language: { title: string; code: string };
}

export const LanguageItem: FC<LanguageItemProps> = ({ selectLanguage, language }) => (
  <div onClick={() => selectLanguage(language.code)} aria-hidden='true' className={styles.language}>
    <Typography variable='h6' style={styles.language_title}>
      {language.title}
    </Typography>
    <Typography variable='span' style={styles.language_desc}>
      {language.title}
    </Typography>
  </div>
);
