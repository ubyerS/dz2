import { useNavigate } from 'react-router-dom';
import './StartScreen.css';
import { SwitchLayout, Layout, StartText } from '../../components/MainLayout.tsx';

function StartScreen() {
  const navigate = useNavigate();

  return (
    <Layout>
      <SwitchLayout />
      <div className="flex items-center">
        <button
          onClick={() => navigate('/game')}
          className="mr-8 w-42 h-22.5 text-white text-[27px] font-bold bg-red-500 aspect-square rounded-[14px] place-content-center
          dark:bg-[#2751A3]"
        >
          PLAY
        </button>
        <div>
          <StartText>Rock Paper Scissors</StartText>
          <StartText>The game</StartText>
        </div>
      </div>
    </Layout>
  );
}

export default StartScreen;
