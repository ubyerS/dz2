import './GameApp.css'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'

const defaultState = {
    personScore: 0,
    computerScore: 0,
}
function counterReducer(state = defaultState, action ) {
    switch (action.type) {
        case 'INCREMENT_PERSON':
            return { ...state, personScore: state.personScore + 1 }
        case 'DECREMENT_PERSON':
            return { ...state, personScore: state.personScore - 1 }
        case 'INCREMENT_COMPUTER':
            return { ...state, computerScore: state.computerScore + 1 }
        case 'DECREMENT_COMPUTER':
            return { ...state, computerScore: state.computerScore - 1 }
        case 'RESET_SCORES':
            return { personScore: 0, computerScore: 0 }
        default:
            return state
    }
}
const store = createStore(counterReducer)

export interface GameAppProps {}

function GameApp() {


    return (
        <div className = "GameApp">
            <h1>Rock Paper Scissors</h1>
            <h2>RESET THE SCORE</h2>
            <div className = "GameAppScores">
                <div className = "Player-score">
                    <h2>PLAYER SCORE:</h2>
                </div>

                <div className = "Computer-score">
                    <h2>Computer SCORE:</h2>
                </div>
            </div>
            <div className = "Game-Choosing">
                <h2>Choose your move, rock paper or scissors:</h2>
            </div>
        </div>
    )
}

export default GameApp