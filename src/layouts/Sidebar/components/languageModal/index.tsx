import { Dispatch, FC } from 'react';

import { Button, ModalContainer, Typography } from '@common';
import closeIcon from '@static/icons/close.svg';
import { useIntl } from '@utils/hooks';

import { LanguageItem } from '../languageItem';

import styles from './styles.module.css';

interface LanguageModalProps {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

export const LanguageModal: FC<LanguageModalProps> = ({ setIsOpen }) => {
  const { setLocale } = useIntl();

  const selectLanguage = (lang: string) => {
    setLocale!(lang);
    setIsOpen(false);
  };

  return (
    <ModalContainer onClose={() => setIsOpen(false)}>
      <div className={styles.modal}>
        <div className={styles.modal_header}>
          <div>
            <Typography variable='h4' style={styles.modal_title}>
              Choose a language
            </Typography>
            <Typography variable='h6' style={styles.modal_desc}>
              This updates what you read on open.spotify.com
            </Typography>
          </div>
          <Button startIcon={closeIcon} onClick={() => setIsOpen(false)} />
        </div>
        <div className={styles.modal_languagesList}>
          {new Array(50).fill({ title: 'English', code: 'en' }).map((language, i) => (
            <LanguageItem
              key={i}
              selectLanguage={(lang) => selectLanguage(lang)}
              language={language}
            />
          ))}
        </div>
      </div>
    </ModalContainer>
  );
};
