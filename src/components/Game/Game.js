import React from 'react';
import './Game.css';
import GameBoard from './GameBoard';

function Game({ boardSymbols, onGameBoardClick, onGameReset }) {
  return (
    <div className="game">
      <GameBoard
        boardSymbols={boardSymbols}
        onGameBoardClick={onGameBoardClick}
      />
      <button className="bg" onClick={onGameReset}>
        Reset
      </button>
    </div>
  );
}

export default Game;
