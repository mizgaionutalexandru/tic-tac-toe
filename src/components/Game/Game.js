import React from 'react';
import './Game.css';
import GameBoard from './GameBoard';

function Game() {
  return (
    <div className="game">
      <GameBoard />
      <button className="bg">Reset</button>
    </div>
  );
}

export default Game;
