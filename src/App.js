import './App.css';
import PlayerSides from './components/PlayerSides/PlayerSides';
import Game from './components/Game/Game';

function App() {
  return (
    <div className="bg bg-big">
      <PlayerSides />
      <Game />
    </div>
  );
}

export default App;
