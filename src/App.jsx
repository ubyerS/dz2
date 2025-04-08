import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartScreen from './StartScreen/StartScreen.js';
import GameApp from './Game/GameApp';
import { ThemeProvider } from './ThemeChanger/ThemeChanger.js';

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
