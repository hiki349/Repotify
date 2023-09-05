import { FC } from 'react';

import { Button } from '@common';

import { ButtonImgProps } from '../../../@types/buttonImg';

import styles from './ButtonImg.module.css';

export const ButtonImg: FC<ButtonImgProps> = ({ className, path, alt }) => (
  <Button className={styles.button_wrapper}>
    <img className={`${className} ${styles.icon}`} src={path} alt={alt} />
  </Button>
);
