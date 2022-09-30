import React from 'react';
import './GameBoard.css';
import GameCell from './GameCell';

function GameBoard() {
  return (
    <div className="game-board bg">
      <GameCell />
      <GameCell />
      <GameCell />
      <GameCell />
      <GameCell />
      <GameCell />
      <GameCell />
      <GameCell />
      <GameCell />
    </div>
  );
}

export default GameBoard;
