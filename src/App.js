import React, { useState } from 'react';
import './App.css';
import PlayerSides from './components/PlayerSides/PlayerSides';
import Game from './components/Game/Game';

function App() {
  // By default the Player 1 starts
  const defaultPlayers = [
    { name: 1, score: 0, status: 'playing', symbol: 'x' },
    { name: 2, score: 0, status: 'waiting', symbol: '0' },
  ];

  const [players, setPlayers] = useState(defaultPlayers);

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

  const gameResetHandler = () => {
    setPlayers(defaultPlayers);
  };

  return (
    <div className="bg bg-big">
      <PlayerSides players={players} />
      <Game
        players={players}
        onPlayerChange={playerChangeHandler}
        onGameReset={gameResetHandler}
      />
    </div>
  );
}

export default App;
