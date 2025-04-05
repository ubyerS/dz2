import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './Store/Store.js'
import GameApp from './Game/GameApp'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
          <GameApp />
      </Provider>
  </StrictMode>,
)
