import React from 'react';
import './PlayerSide.css';

function PlayerSide() {
  return (
    <div className="player-side">
      <h1>Player 1</h1>
      <div className="playing">
        <p>Playing now</p>
      </div>
      <div>Score: 0</div>
    </div>
  );
}

export default PlayerSide;
