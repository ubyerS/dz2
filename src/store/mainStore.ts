import { createStore } from 'redux';

const defaultState = {
  personScore: 0,
  computerScore: 0,
};

type CounterAction =
  | { type: 'INCREMENT_PERSON' }
  | { type: 'DECREMENT_PERSON' }
  | { type: 'INCREMENT_COMPUTER' }
  | { type: 'DECREMENT_COMPUTER' }
  | { type: 'RESET_SCORES' };

export interface ScoreState {
  personScore: number;
  computerScore: number;
}

function counterReducer(state = defaultState, action: CounterAction): ScoreState {
  switch (action.type) {
    case 'INCREMENT_PERSON':
      return { ...state, personScore: state.personScore + 1 };
    case 'DECREMENT_PERSON':
      return { ...state, personScore: state.personScore - 1 };
    case 'INCREMENT_COMPUTER':
      return { ...state, computerScore: state.computerScore + 1 };
    case 'DECREMENT_COMPUTER':
      return { ...state, computerScore: state.computerScore - 1 };
    case 'RESET_SCORES':
      return { personScore: 0, computerScore: 0 };
    default:
      return state;
  }
}

export const mainStore = createStore(counterReducer);
