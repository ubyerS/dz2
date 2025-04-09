import React from 'react';
import { useTheme } from '../ThemeChanger/ThemeChanger.tsx';
import darkMode from '../images/dark_mode.svg';
import lightMode from '../images/light_mode.svg';

function MainLayout() {
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

export default MainLayout;
