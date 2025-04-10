import { createStore } from 'redux';

const defaultState = {
  personScore: 0,
  computerScore: 0,
};

const RESET_SCORES = 'RESET_SCORES';
const CHANGE_PERSON_SCORE = 'CHANGE_PERSON_SCORE';
const CHANGE_COMPUTER_SCORE = 'CHANGE_COMPUTER_SCORE';

type CounterAction =
  | { type: 'CHANGE_PERSON_SCORE'; payload: number }
  | { type: 'CHANGE_COMPUTER_SCORE'; payload: number }
  | { type: 'RESET_SCORES' };

export interface ScoreState {
  personScore: number;
  computerScore: number;
}

function counterReducer(state = defaultState, action: CounterAction): ScoreState {
  switch (action.type) {
    case CHANGE_PERSON_SCORE:
      return {
        ...state,
        personScore: Math.max(0, state.personScore + action.payload),
      };
    case CHANGE_COMPUTER_SCORE:
      return {
        ...state,
        computerScore: Math.max(0, state.computerScore + action.payload),
      };
    case RESET_SCORES:
      return {
        personScore: 0,
        computerScore: 0,
      };
    default:
      return state;
  }
}

export const mainStore = createStore(counterReducer);
