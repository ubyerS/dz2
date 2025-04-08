import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeChanger/ThemeChanger';
import './StartScreen.css';
import darkMode from '../images/dark_mode.svg';
import lightMode from '../images/light_mode.svg';

function StartScreen() {
  const navigate = useNavigate();
  const { theme, handleThemeChange } = useTheme();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#d9d9d9] dark:bg-[#353535] relative">
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
      <div className="flex items-center">
        <button
          onClick={() => navigate('/game')}
          className="mr-8 w-42 h-22.5 text-white text-[27px] font-bold bg-red-500 aspect-square rounded-[14px] place-content-center
          dark:bg-[#2751A3]"
        >
          PLAY
        </button>
        <div>
          <h1 className="text-3xl text-blue-950 font-bold dark:text-[#BEBFD1]">
            Rock Paper Scissors
          </h1>
          <h1 className="text-3xl text-blue-950 font-bold dark:text-[#BEBFD1]">
            The game
          </h1>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
