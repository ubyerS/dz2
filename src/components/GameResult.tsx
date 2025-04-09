import { GameResult } from '../types/types.ts';

type GameResultProps = {
  result: GameResult | null;
};

export const GameResultDisplay = ({ result }: GameResultProps) => (
  <div className="mb-8">
    <h2 className="flex font-bold text-[40px] dark:text-[#6881D8] h-[100px] flex-col">
      {result}
    </h2>
  </div>
);
