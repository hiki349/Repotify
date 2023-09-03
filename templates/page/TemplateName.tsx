import { FC } from 'react';

import styles from './TemplateName.module.css';

interface TemplateNamePageProps {

}

export const TemplateNamePage: FC<TemplateNamePageProps> = () => {
  return (
    <div className={styles.templateName}>TemplateName page</div>
  );
};
