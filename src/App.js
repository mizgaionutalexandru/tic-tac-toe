import React, { useState } from 'react';
import './App.css';
import PlayerSides from './components/PlayerSides/PlayerSides';
import Game from './components/Game/Game';

function App() {
  // By default the Player 1 starts
  // prettier-ignore
  const [players, setPlayers] = useState([
    {name: 1, score: 0, status: 'playing', symbol:'x'},
    {name: 2, score: 0, status: 'waiting', symbol:'0'},
  ]);

  const playerChangeHandler = () => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => {
        return {
          ...player,
          status: player.status === 'playing' ? 'waiting' : 'playing',
        };
      })
    );
  };

  return (
    <div className="bg bg-big">
      <PlayerSides players={players} />
      <Game players={players} onPlayerChange={playerChangeHandler} />
    </div>
  );
}

export default App;
