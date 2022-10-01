import React, { useState } from 'react';
import './Game.css';
import GameBoard from './GameBoard';

function Game({ players, onPlayerChange, onGameReset }) {
  // True if the players are playing or false if the game pauses (when a round is won)
  const [isGameGoing, setIsGameGoing] = useState(true);

  const defaultBoard = ['', '', '', '', '', '', '', '', ''];
  // prettier-ignore
  const [boardSymbols, setBoardSymbols] = useState(defaultBoard);
  /* Equivalent to the displayed GameBoard
    0 1 2
    3 4 5
    6 7 8
  */

  const hasPlayerWon = (index, board) => {
    // prettier-ignore
    const winningConditions = [
      [[1, 2], [4, 8], [3,6]], // If the last move happend on index 0, check the equality with these indexes
      [[0, 2], [4, 7]], // If one of them becomes true, then the player has won
      [[0, 1], [4, 6], [5, 8]],
      [[0, 6], [4, 5]],
      [[0, 8], [3, 5], [6, 2], [7, 1]],
      [[3, 4], [2, 8]],
      [[0, 3], [2, 4], [7, 8]],
      [[1, 4], [6, 8]],
      [[0, 4], [6, 7], [2, 5]]
    ];

    for (let i = 0; i < winningConditions[index].length; i++)
      if (
        board[winningConditions[index][i][0]] ===
          board[winningConditions[index][i][1]] &&
        board[winningConditions[index][i][0]] === board[index]
      )
        return true;

    return false;
  };

  const gameBoardActionHandler = (index) => {
    // If the game is paused, do not consider the action
    if (!isGameGoing) return;

    // Set the new boardSymbols state
    setBoardSymbols((prevBoardSymbols) => {
      const playingPlayer = players.filter(
        (player) => player.status === 'playing'
      )[0];
      const newSymbols = [...prevBoardSymbols];
      newSymbols[index] = playingPlayer.symbol;

      // TODO: add score changes and winning message
      // Check if the player has won pause the game
      if (hasPlayerWon(index, newSymbols)) setIsGameGoing(false);

      return newSymbols;
    });

    // FIXME - unwanted behaviour - q.o.l: the round ends but the player is still changed
    // Swap the player
    onPlayerChange();
  };

  const gameResetHandler = () => {
    // Reset the board
    setBoardSymbols(defaultBoard);
    // Reset the game status
    setIsGameGoing(true);
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
