import { BrowserRouter as Router,
                          Routes, 
                          Route } from 'react-router-dom'
import { Platform } from './pages/platforms/platform'
import { PlatformGames } from './pages/platform-games/platform-games';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path='/' element={<Platform/>}/>
            <Route exact path='/:id' element={<PlatformGames/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
