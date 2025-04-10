import React, { PropsWithChildren } from 'react';
import darkMode from '../images/dark_mode.svg';
import lightMode from '../images/light_mode.svg';
import { useTheme } from './ThemeProvider.tsx';

interface LayoutProps extends PropsWithChildren {
  title?: string;
  className?: string;
  titleClassName?: string;
}

export const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, handleThemeChange } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#d9d9d9] dark:bg-[#353535] relative ">
      <button
        onClick={handleThemeChange}
        className="absolute top-8 right-8 text-3xl p-2 hover:scale-110 transition-transform dark:text-white"
      >
        {theme === 'light' ? (
          <img src={darkMode} alt="Dark mode" />
        ) : (
          <img src={lightMode} alt="Light mode" />
        )}
      </button>
      <div className="flex justify-center flex-col items-center min-h-screen bg-[#d9d9d9] dark:bg-[#353535] ">
        {children}
      </div>
    </div>
  );
};

export const StartText: React.FC<PropsWithChildren> = ({ children }) => (
  <h1 className="text-3xl text-blue-950 font-bold dark:text-[#BEBFD1]">{children}</h1>
);
