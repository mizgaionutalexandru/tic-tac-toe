import React from 'react';
import './PlayerSides.css';
import PlayerSide from './PlayerSide.js';

function PlayerSides({ players }) {
  return (
    <div className="flex col-even bg-full">
      {players.map((player) => (
        <PlayerSide player={player} key={player.name} />
      ))}
    </div>
  );
}

export default PlayerSides;
