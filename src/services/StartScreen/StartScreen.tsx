import { useNavigate } from 'react-router-dom';
import './StartScreen.css';
import { MainLayout } from '../../components/MainLayout.tsx';

function StartScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#d9d9d9] dark:bg-[#353535] relative">
      <MainLayout />
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
