import './GameApp.css'
import { ScoreState } from "../Store/Store";
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react";

enum GameResult {
    win = 'YOU WON !',
    lose = 'COMPUTER WON !',
    draw = 'DRAW !',
}

function GameApp() {
    const [gameResult, setGameResult] = useState<GameResult | null>(null);
    const personScore = useSelector((state : ScoreState) => state.personScore)
    const computerScore = useSelector((state : ScoreState) => state.computerScore)
    const dispatch = useDispatch()

    const handlePlayerChoice = (playerChoice : 'rock' | 'paper' | 'scissors' ) => {
        const choices: ('rock' | 'paper' | 'scissors')[] = ['rock', 'paper' , 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        if (playerChoice === computerChoice) {
            setGameResult(GameResult.draw);
        }

        const playerWins =
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper');

        if (playerWins) {
            dispatch({ type : 'INCREMENT_PERSON' });
            setGameResult(GameResult.win);
        }
        else {
            dispatch({ type : 'INCREMENT_COMPUTER' });
            setGameResult(GameResult.lose);
        }
    }


    const handleReset = () =>{
        dispatch({type : 'RESET_SCORES'})
    };

    return (
        <div className = 'flex flex-col items-center justify-center min-h-screen'>
            <h1 className = 'font-bold text-3xl text-blue-950 mb-8'>Rock Paper Scissors</h1>
            <button onClick = {handleReset} className = 'font-bold text-xl mb-4'>RESET THE SCORE</button>
            <div className = 'flex justify-between gap-x-[143px] mb-8'>
                <div className = 'Player-score'>
                    <h2>PLAYER SCORE: {personScore}</h2>
                </div>

                <div className = 'Computer-score'>
                    <h2>Computer SCORE: {computerScore}</h2>
                </div>
            </div>

            <div className = 'mb-8'>
                <h2> { gameResult } </h2>
            </div>

            <div className = 'gap-x-12'>
                <h2 className = 'mb-6'>Choose your move, rock paper or scissors:</h2>
                <div className = 'flex gap-x-12'>
                    <button onClick = {() => handlePlayerChoice('rock')}
                        className = 'w-42.5 h-15 text-white text-[25px] font-bold bg-red-500 aspect-square rounded-[14px] place-content-center'> ROCK </button>
                    <button onClick = {() => handlePlayerChoice('paper')}
                        className = 'w-42.5 h-15 text-white text-[25px] font-bold bg-red-500 aspect-square rounded-[14px] place-content-center'> PAPER </button>
                    <button onClick = {() => handlePlayerChoice('scissors')}
                        className = 'w-42.5 h-15 text-white text-[25px] font-bold bg-red-500 aspect-square rounded-[14px] place-content-center'> SCISSORS </button>
                </div>
            </div>

        </div>
    )
}

export default GameApp