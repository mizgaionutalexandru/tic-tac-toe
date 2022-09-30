import React from 'react';
import './GameCell.css';
import x from './x.svg';
import zero from './zero.svg';

function GameCell() {
  return (
    <div className="game-cell">
      <img src={zero} alt="x" />
    </div>
  );
}

export default GameCell;
