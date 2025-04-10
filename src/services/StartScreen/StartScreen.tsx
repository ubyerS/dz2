import { useNavigate } from 'react-router-dom';
import './StartScreen.css';
import { MainLayout } from '../../components/MainLayout.tsx';
import { ThemeSwitch } from '../../components/ThemeSwitch.tsx';

function StartScreen() {
  const navigate = useNavigate();

  return (
    <MainLayout title="Rock Paper Scissors" subtitle="The game">
      <ThemeSwitch />
      <button
        onClick={() => navigate('/game')}
        className="mr-8 w-42 h-22.5 text-white text-[27px] font-bold bg-red-500 aspect-square rounded-[14px] place-content-center
          dark:bg-[#2751A3]"
      >
        PLAY
      </button>
    </MainLayout>
  );
}

export default StartScreen;
