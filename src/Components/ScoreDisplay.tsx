type ScoreDisplayProps = {
  playerScore: number;
  computerScore: number;
};

export const ScoreDisplay = ({ playerScore, computerScore }: ScoreDisplayProps) => (
  <div className="flex justify-between gap-x-[143px] mb-8">
    <div className="Player-score">
      <h2 className="font-semibold text-[14px] dark:text-white">
        PLAYER SCORE: {playerScore}
      </h2>
    </div>
    <div className="Computer-score">
      <h2 className="font-semibold text-[14px] dark:text-white">
        COMPUTER SCORE: {computerScore}
      </h2>
    </div>
  </div>
);
