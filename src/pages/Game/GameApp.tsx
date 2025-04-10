import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { ChoiceButton } from '../../components/ChoiceButton.tsx';
import { ChoiceImage } from '../../components/ChoiceImage.tsx';
import { GameResultDisplay } from '../../components/GameResult.tsx';
import { MainLayout, StartText } from '../../components/MainLayout.tsx';
import { ScoreDisplay } from '../../components/ScoreDisplay.tsx';
import { useTheme } from '../../components/ThemeProvider.tsx';
import { ScoreState } from '../../store/mainStore.ts';
import { GameResult, Choice } from '../../types/types.ts';

const CHOICE: Choice[] = ['rock', 'paper', 'scissors'];

export const GameApp = () => {
  const { theme } = useTheme();
  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const currentTheme: 'light' | 'dark' = theme === 'light' ? 'light' : 'dark';

  const selectScores = createSelector(
    (state: ScoreState) => state.personScore,
    (state: ScoreState) => state.computerScore,
    (person, computer) => ({ personScore: person, computerScore: computer }),
  );
  const scores = useSelector(selectScores);

  const dispatch = useDispatch();

  const handleChoice = (playerChoice: Choice) => {
    const computerChoice = CHOICE[Math.floor(Math.random() * CHOICE.length)];

    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);

    const playerWins =
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper');

    if (playerWins) {
      dispatch({ type: 'CHANGE_PERSON_SCORE', payload: 1 });
      setGameResult(GameResult.win);
    } else if (playerChoice === computerChoice) {
      setGameResult(GameResult.draw);
    } else {
      dispatch({ type: 'CHANGE_COMPUTER_SCORE', payload: 1 });
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

      <ScoreDisplay
        playerScore={scores.personScore}
        computerScore={scores.computerScore}
      />
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
