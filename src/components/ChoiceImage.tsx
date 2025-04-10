import { Choice, choiceImages } from '../types/types.ts';

type ChoiceImageProps = {
  choice: Choice | null;
  theme: 'light' | 'dark';
  className?: string;
  flip?: boolean;
};

export const ChoiceImage = ({
  choice,
  theme,
  className = '',
  flip = false,
}: ChoiceImageProps) => (
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
