type ChoiceButtonProps = {
  choice: 'rock' | 'paper' | 'scissors';
  onClick: (choice: 'rock' | 'paper' | 'scissors') => void;
};

export const ChoiceButton = ({ choice, onClick }: ChoiceButtonProps) => (
  <button
    onClick={() => onClick(choice)}
    className="w-42.5 h-15 text-white text-[25px] font-bold aspect-square rounded-[14px] place-content-center dark:bg-[#2751A3]"
  >
    {choice.toUpperCase()}
  </button>
);
