import React from 'react';
import './GameBoard.css';
import GameCell from './GameCell';

function GameBoard({ boardSymbols, onGameBoardAction }) {
  const cellClickHandler = (index) => {
    onGameBoardAction(index);
  };

  return (
    <div className="game-board bg">
      {boardSymbols.map((cellSymbol, i) => {
        return (
          <GameCell
            cellSymbol={cellSymbol}
            key={i}
            id={i}
            onCellClick={cellClickHandler}
          />
        );
      })}
    </div>
  );
}

export default GameBoard;
