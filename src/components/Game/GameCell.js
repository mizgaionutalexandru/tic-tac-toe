import React from 'react';
import './GameCell.css';
import x from '../../icons/x.svg';
import zero from '../../icons/zero.svg';

function GameCell({ cellSymbol, id, onCellClick }) {
  const cellClickHandler = () => {
    onCellClick(id);
  };

  if (cellSymbol === '')
    return <div className="game-cell" onClick={cellClickHandler}></div>;

  const src = cellSymbol === '0' ? zero : x;

  return (
    <div className="game-cell">
      <img src={src} alt="" />
    </div>
  );
}

export default GameCell;
