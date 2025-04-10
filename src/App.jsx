import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartScreen from './services/StartScreen/StartScreen.tsx';
import GameApp from './services/Game/GameApp.tsx';
import { ThemeProvider } from './components/ThemeProvider.js';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/game" element={<GameApp />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
