import React, { ReactNode } from 'react';
import darkMode from '../images/dark_mode.svg';
import lightMode from '../images/light_mode.svg';
import { useTheme } from './ThemeChanger.tsx';

export function SwitchLayout() {
  const { theme, handleThemeChange } = useTheme();

  return (
    <button
      onClick={handleThemeChange}
      className="absolute top-8 right-8 text-3xl p-2 hover:scale-110 transition-transform dark:text-white"
    >
      {theme === 'light' ? (
        <img src={darkMode} alt={'dark mode'} />
      ) : (
        <img src={lightMode} alt={'light mode'} />
      )}
    </button>
  );
}

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col justify-center items-center min-h-screen bg-[#d9d9d9] dark:bg-[#353535] relative">
    {children}
  </div>
);

export const StartText = ({ children }: { children: ReactNode }) => (
  <h1 className="text-3xl text-blue-950 font-bold dark:text-[#BEBFD1]">{children}</h1>
);
