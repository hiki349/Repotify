import { useContext } from 'react';

import { IntlContext } from '@utils/intl';

export const useIntl = () => {
  const intl = useContext(IntlContext);
  return { ...intl };
};
