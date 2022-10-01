import React, { useState } from 'react';
import './Game.css';
import GameBoard from './GameBoard';

function Game({ players, onPlayerChange, onGameReset }) {
  const defaultBoard = ['', '', '', '', '', '', '', '', ''];
  // prettier-ignore
  const [boardSymbols, setBoardSymbols] = useState(defaultBoard);
  /* Equivalent to the displayed GameBoard
    0 1 2
    3 4 5
    6 7 8
  */

  const gameBoardActionHandler = (index) => {
    // Swap the player
    onPlayerChange();

    // Return the new boardSymbols state
    setBoardSymbols((prevBoardSymbols) => {
      // If a click is on an already existing symbol, keep the state
      if (prevBoardSymbols[index] !== '') return prevBoardSymbols;

      const playingPlayer = players.filter(
        (player) => player.status === 'playing'
      )[0];
      const newSymbols = [...prevBoardSymbols];
      newSymbols[index] = playingPlayer.symbol;

      return newSymbols;
    });
  };

  const gameResetHandler = () => {
    // Reset the board
    setBoardSymbols(defaultBoard);
    // Reset the players state
    onGameReset();
  };

  return (
    <div className="game">
      <GameBoard
        boardSymbols={boardSymbols}
        onGameBoardAction={gameBoardActionHandler}
      />
      <button className="bg" onClick={gameResetHandler}>
        Reset
      </button>
    </div>
  );
}

export default Game;
