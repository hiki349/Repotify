import { createContext, FC, ReactNode, useMemo, useState } from 'react';

type IntlContextProps = {
  locale: string;
  setLocale: (newLang: string) => void;
} | null;

export const IntlContext = createContext<IntlContextProps>(null);

interface IntlProviderProps {
  children: ReactNode;
}

export const IntlProvider: FC<IntlProviderProps> = ({ children }) => {
  const [value, setValue] = useState(window.navigator.language);

  const contextValue = useMemo(() => ({ locale: value, setLocale: setValue }), [value]);

  return <IntlContext.Provider value={contextValue}>{children}</IntlContext.Provider>;
};
