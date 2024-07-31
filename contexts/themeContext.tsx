import React, {createContext, useContext, ReactNode, useState} from 'react';
import {darkTheme, theme} from '../theme';

export type Theme = typeof theme;

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{children: ReactNode}> = ({
  children,
}: any) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme);

  const toggleTheme = () => {
    console.log('working');
    setCurrentTheme(prevTheme => (prevTheme === theme ? darkTheme : theme));
  };

  return (
    <ThemeContext.Provider value={{theme: currentTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
