import { GameResult } from '../types/types.ts';

type GameResultProps = {
  result: GameResult | null;
};

export const GameResultDisplay = ({ result }: GameResultProps) => (
  <div className="mb-8">
    <h2 className="font-bold text-[40px] dark:text-[#6881D8]">{result}</h2>
  </div>
);
