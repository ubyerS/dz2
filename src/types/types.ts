import paperImage from '../images/paper_black.svg';
import whitePaperImage from '../images/paper_white.svg';
import rockImage from '../images/rock_black.svg';
import whiteRockImage from '../images/rock_white.svg';
import scissorsImage from '../images/scissors_black.svg';
import whiteScissorsImage from '../images/scissors_white.svg';

export enum GameResult {
  win = 'YOU WON ! 🎉',
  lose = 'COMPUTER WON ! 🎉',
  draw = 'DRAW ! 🎉',
}

export type Choice = 'rock' | 'paper' | 'scissors';

export const choiceImages = {
  dark: {
    rock: whiteRockImage,
    paper: whitePaperImage,
    scissors: whiteScissorsImage,
  },
  light: {
    rock: rockImage,
    paper: paperImage,
    scissors: scissorsImage,
  },
};
