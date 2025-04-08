import { createStore } from 'redux';

const defaultState = {
  personScore: 0,
  computerScore: 0,
};

export interface ScoreState {
  personScore: number;
  computerScore: number;
}

function counterReducer(state = defaultState, action) {
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

export const store = createStore(counterReducer);
