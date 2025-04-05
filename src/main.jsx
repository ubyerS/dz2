import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GameApp from './Game/GameApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameApp />
  </StrictMode>,
)
