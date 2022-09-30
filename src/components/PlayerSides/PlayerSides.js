import React from 'react';
import './PlayerSides.css';
import PlayerSide from './PlayerSide.js';

function PlayerSides() {
  return (
    <div className="flex col-even bg-full">
      <PlayerSide />
      <PlayerSide />
    </div>
  );
}

export default PlayerSides;
