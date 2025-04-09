import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  handleThemeChange: () => void;
  resetToSystemTheme: () => void;
};

const ThemeChanger = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light');

  const getSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const applyTheme = (newTheme: string) => {
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    const getCurrentTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      return (
        savedTheme ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      );
    };

    const currentTheme = getCurrentTheme();
    setTheme(currentTheme);
    applyTheme(currentTheme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const resetToSystemTheme = () => {
    localStorage.removeItem('theme');
    const newTheme = getSystemTheme();
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeChanger.Provider
      value={{
        theme,
        setTheme,
        handleThemeChange,
        resetToSystemTheme,
      }}
    >
      {children}
    </ThemeChanger.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeChanger);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useTheme };
