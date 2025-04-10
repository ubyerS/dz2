import { createStore } from 'redux';

const defaultState = {
  personScore: 0,
  computerScore: 0,
};

const RESET_SCORES = 'RESET_SCORES';
const INCREMENT_PERSON_SCORE = 'INCREMENT_PERSON_SCORE';
const DECREMENT_PERSON_SCORE = 'DECREMENT_PERSON_SCORE';
const INCREMENT_COMPUTER_SCORE = 'INCREMENT_COMPUTER_SCORE';
const DECREMENT_COMPUTER_SCORE = 'DECREMENT_COMPUTER_SCORE';

type CounterAction =
  | { type: 'INCREMENT_PERSON_SCORE' }
  | { type: 'DECREMENT_PERSON_SCORE' }
  | { type: 'INCREMENT_COMPUTER_SCORE' }
  | { type: 'DECREMENT_COMPUTER_SCORE' }
  | { type: 'RESET_SCORES' };

export interface ScoreState {
  personScore: number;
  computerScore: number;
}

function counterReducer(state = defaultState, action: CounterAction): ScoreState {
  switch (action.type) {
    case INCREMENT_PERSON_SCORE:
      return { ...state, personScore: state.personScore + 1 };
    case DECREMENT_PERSON_SCORE:
      return { ...state, personScore: state.personScore - 1 };
    case INCREMENT_COMPUTER_SCORE:
      return { ...state, computerScore: state.computerScore + 1 };
    case DECREMENT_COMPUTER_SCORE:
      return { ...state, computerScore: state.computerScore - 1 };
    case RESET_SCORES:
      return { personScore: 0, computerScore: 0 };
    default:
      return state;
  }
}

export const mainStore = createStore(counterReducer);
