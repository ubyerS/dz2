// @ts-ignore
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  handleThemeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ThemeChanger = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const SavedTheme = localStorage.getItem('theme') || 'light';
    setTheme(SavedTheme);
    document.documentElement.classList.toggle('dark', SavedTheme === 'dark');
  });

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <ThemeChanger.Provider value={{ theme, setTheme, handleThemeChange }}>
      {children}
    </ThemeChanger.Provider>
  );
}

function useTheme() {
  return useContext(ThemeChanger);
}

export { ThemeChanger, ThemeProvider, useTheme };
