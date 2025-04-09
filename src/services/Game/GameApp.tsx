import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChoiceButton } from '../../components/ChoiceButton.tsx';
import { ChoiceDisplay } from '../../components/ChoiceDisplay.tsx';
import { GameResultDisplay } from '../../components/GameResult.tsx';
import { MainLayout } from '../../components/MainLayout.tsx';
import { ScoreDisplay } from '../../components/ScoreDisplay.tsx';
import { useTheme } from '../../components/ThemeChanger.tsx';
import { ScoreState } from '../../reducer/Store.ts';
import { GameResult, Choice } from '../../types/types.ts';

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
    <div className="flex flex-col items-center justify-center min-h-screen  bg-[#d9d9d9] dark:bg-[#353535]">
      <MainLayout />
      <h1 className="font-bold text-3xl text-blue-950 mb-8 dark:text-[#BEBFD1]">
        Rock Paper Scissors
      </h1>

      <button onClick={handleReset} className="font-bold text-xl mb-4 dark:text-white">
        RESET THE SCORE
      </button>

      <ScoreDisplay playerScore={scores.person} computerScore={scores.computer} />
      <div className="text-red-600 min-h-[92px]">
        <GameResultDisplay result={gameResult} />
      </div>

      <div className="gap-x-12">
        <div className="flex justify-center items-center mb-8 gap-x-14.5">
          <ChoiceDisplay choice={playerChoice} theme={currentTheme} flip />
          <div className="font-bold text-xl dark:text-white">VS</div>
          <ChoiceDisplay choice={computerChoice} theme={currentTheme} />
        </div>

        <h2 className="flex mb-6 justify-center dark:text-white">
          Choose your move, rock paper or scissors:
        </h2>

        <div className="flex gap-x-12">
          {(['rock', 'paper', 'scissors'] as Choice[]).map((choice) => (
            <div className="w-42.5 h-15 bg-red-500 aspect-square rounded-[14px]">
              <ChoiceButton key={choice} choice={choice} onClick={handleChoice} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameApp;
