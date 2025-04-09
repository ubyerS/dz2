import { Choice, choiceImages } from '../types/types.ts';

type ChoiceDisplayProps = {
  choice: Choice | null;
  theme: 'light' | 'dark';
  className?: string;
  flip?: boolean;
};

export const ChoiceDisplay = ({
  choice,
  theme,
  className = '',
  flip = false,
}: ChoiceDisplayProps) => (
  <div>
    {choice ? (
      <img
        src={choiceImages[theme][choice]}
        alt={choice}
        className={`${flip ? 'transform scale-x-[-1]' : ''} ${className}`}
      />
    ) : (
      <div className="w-[100px] h-[100px]" />
    )}
  </div>
);
