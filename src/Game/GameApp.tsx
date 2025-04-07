import './GameApp.css';
import { ScoreState } from '../Store/Store';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import rockImage from '../images/rock_black.svg';
import paperImage from '../images/paper_black.svg';
import scissorsImage from '../images/scissors_black.svg';

enum GameResult {
  win = 'YOU WON ! 🎉',
  lose = 'COMPUTER WON ! 🎉',
  draw = 'DRAW ! 🎉',
}

type Choice = 'rock' | 'paper' | 'scissors';

const choiceImages = {
  rock: rockImage,
  paper: paperImage,
  scissors: scissorsImage,
};

function GameApp() {
  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);

  const personScore = useSelector((state: ScoreState) => state.personScore);
  const computerScore = useSelector((state: ScoreState) => state.computerScore);
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#d9d9d9]">
      <h1 className="font-bold text-3xl text-blue-950 mb-8">Rock Paper Scissors</h1>
      <button onClick={handleReset} className="font-bold text-xl mb-4">RESET THE SCORE</button>
      <div className="flex justify-between gap-x-[143px] mb-8">
        <div className="Player-score">
          <h2 className="font-semibold text-[14px]">PLAYER SCORE: {personScore}</h2>
        </div>

        <div className="Computer-score">
          <h2 className="font-semibold text-[14px]">COMPUTER SCORE: {computerScore}</h2>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="font-bold text-[40px] text-red-900"> {gameResult} </h2>
      </div>

      <div className="gap-x-12">

        <div className="flex justify-center items-center mb-8 gap-x-14.5">
          <div><img src={choiceImages[playerChoice]} alt={playerChoice} className="icon transform scale-x-[-1]" /></div>
          <div className="font-bold text-xl">VS</div>
          <div><img src={choiceImages[computerChoice]} alt={computerChoice} className="comp" /></div>
        </div>

        <h2 className="flex mb-6 justify-center">Choose your move, rock paper or scissors:</h2>

        <div className="flex gap-x-12">
          <button onClick={() => handleChoice('rock')}
                  className="w-42.5 h-15 text-white text-[25px] font-bold bg-red-500 aspect-square rounded-[14px] place-content-center"> ROCK
          </button>
          <button onClick={() => handleChoice('paper')}
                  className="w-42.5 h-15 text-white text-[25px] font-bold bg-red-500 aspect-square rounded-[14px] place-content-center"> PAPER
          </button>
          <button onClick={() => handleChoice('scissors')}
                  className="w-42.5 h-15 text-white text-[25px] font-bold bg-red-500 aspect-square rounded-[14px] place-content-center"> SCISSORS
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameApp;