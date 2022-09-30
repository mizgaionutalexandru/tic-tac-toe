import React from 'react';
import './PlayerSide.css';

function PlayerSide({ player }) {
  const isPlaying = player.status === 'playing';

  return (
    <div className="player-side">
      <h1>Player {player.name}</h1>
      <div className={isPlaying ? 'playing' : 'next'}>
        <p>Playing {isPlaying ? 'now' : 'next'}</p>
      </div>
      <div>Score: {player.score}</div>
    </div>
  );
}

export default PlayerSide;
