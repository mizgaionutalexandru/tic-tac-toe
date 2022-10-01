import React from 'react';
import './PlayerSide.css';
import x from '../../icons/x.svg';
import zero from '../../icons/zero.svg';

function PlayerSide({ player }) {
  const isPlaying = player.status === 'playing';

  const src = player.symbol === 'x' ? x : zero;
  const color = player.symbol === 'x' ? 'var(--yellow)' : 'var(--purple)';

  return (
    <div
      className={`player-side ${isPlaying ? 'playing' : 'next'}`}
      style={{ '--color': color }}
    >
      <header>
        <h1>Player {player.name}</h1>
        <img src={src} alt={player.symbol} />
      </header>
      <div className="status">
        <p>Playing {isPlaying ? 'now' : 'next'}</p>
      </div>
      <div>Score: {player.score}</div>
    </div>
  );
}

export default PlayerSide;
