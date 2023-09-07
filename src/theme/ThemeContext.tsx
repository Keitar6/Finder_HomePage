import { createContext, PropsWithChildren } from 'react';
import { Theme } from './theme.types';
import initialTheme from './initialTheme';

export const ThemeContext = createContext({} as Theme);

const ThemeProvider = ({ children }: PropsWithChildren) => (
  <ThemeContext.Provider value={initialTheme}>{children}</ThemeContext.Provider>
);

export default ThemeProvider;
