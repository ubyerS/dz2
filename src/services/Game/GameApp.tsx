import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChoiceButton } from '../../components/ChoiceButton.tsx';
import { ChoiceImage } from '../../components/ChoiceImage.tsx';
import { GameResultDisplay } from '../../components/GameResult.tsx';
import { MainLayout, StartText } from '../../components/MainLayout.tsx';
import { ScoreDisplay } from '../../components/ScoreDisplay.tsx';
import { useTheme } from '../../components/ThemeProvider.tsx';
import { ScoreState } from '../../store/mainStore.ts';
import { GameResult, Choice } from '../../types/types.ts';

const CHOICE = ['rock', 'paper', 'scissors'];

export const GameApp = () => {
  const { theme } = useTheme();
  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const currentTheme: 'light' | 'dark' = theme === 'light' ? 'light' : 'dark';

  const scores = useSelector((state: ScoreState) => ({
    person: state.personScore,
    computer: state.computerScore,
  }));
  const dispatch = useDispatch();

  const handleChoice = (playerChoice: Choice) => {
    const choices: Choice[] = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);

    const playerWins =
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper');

    if (playerWins) {
      dispatch({ type: 'INCREMENT_PERSON' });
      setGameResult(GameResult.win);
    } else if (playerChoice === computerChoice) {
      setGameResult(GameResult.draw);
    } else {
      dispatch({ type: 'INCREMENT_COMPUTER' });
      setGameResult(GameResult.lose);
    }
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_SCORES' });
    setPlayerChoice(null);
    setComputerChoice(null);
  };

  return (
    <MainLayout>
      <StartText>Rock Paper Scissors</StartText>
      <button
        onClick={handleReset}
        className="font-bold text-xl text-black mb-4 mt-8 dark:text-white"
      >
        RESET THE SCORE
      </button>

      <ScoreDisplay playerScore={scores.person} computerScore={scores.computer} />
      <div className="flex text-red-600 h-[100px]">
        <GameResultDisplay result={gameResult} />
      </div>

      <div className="gap-x-12">
        <div className="flex justify-center items-center mb-8 gap-x-14.5">
          <ChoiceImage choice={playerChoice} theme={currentTheme} flip />
          <div className="font-bold text-xl text-black dark:text-white">VS</div>
          <ChoiceImage choice={computerChoice} theme={currentTheme} />
        </div>

        <h2 className="flex mb-6 justify-center text-black dark:text-white">
          Choose your move, rock paper or scissors:
        </h2>

        <div className="flex gap-x-12">
          {(CHOICE as Choice[]).map((choice) => (
            <ChoiceButton key={choice} choice={choice} onClick={handleChoice} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default GameApp;
