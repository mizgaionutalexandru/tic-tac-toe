import React, { useState } from 'react';
import './App.css';
import Notification from './components/Notification/Notification';
import PlayerSides from './components/PlayerSides/PlayerSides';
import Game from './components/Game/Game';

function App() {
  const defaultBoard = ['', '', '', '', '', '', '', '', ''];
  // By default the Player 1 starts
  const defaultPlayers = [
    { name: 1, score: 0, status: 'playing', symbol: 'x' },
    { name: 2, score: 0, status: 'waiting', symbol: '0' },
  ];

  const [players, setPlayers] = useState(defaultPlayers);
  // The notification will only appear if a round has ended (won/tied)
  const [notification, setNotification] = useState(null);
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

  const gameBoardClickHandler = (index) => {
    // If the game is paused, do not consider the action
    if (notification) return;

    // Set the new boardSymbols state
    setBoardSymbols((prevBoardSymbols) => {
      const playingPlayer = players.filter(
        (player) => player.status === 'playing'
      )[0];
      const newSymbols = [...prevBoardSymbols];
      newSymbols[index] = playingPlayer.symbol;

      // Check if the player has won pause the game
      if (hasPlayerWon(index, newSymbols)) {
        setNotification(`Player ${playingPlayer.name} won!`);
        // Set the score
        setPlayers((prevPlayers) =>
          prevPlayers.map((player) => {
            return {
              ...player,
              score:
                player.status === 'playing' ? player.score + 1 : player.score,
            };
          })
        );
        return newSymbols;
      }

      // Check if there is a tie
      if (newSymbols.filter((symbol) => symbol === '').length === 0) {
        setNotification('Round tied!');
        return newSymbols;
      }

      // Swap the player
      setPlayers((prevPlayers) =>
        prevPlayers.map((player) => {
          return {
            ...player,
            status: player.status === 'playing' ? 'waiting' : 'playing',
          };
        })
      );

      return newSymbols;
    });
  };

  const gameResetHandler = () => {
    // Reset the board
    setBoardSymbols(defaultBoard);
    // Reset the game status; notification null means the game is going
    setNotification(null);
    // Reset the players state
    setPlayers(defaultPlayers);
  };

  const playAgainHandler = () => {
    // Reset the board
    setBoardSymbols(defaultBoard);
    // Reset the game status; notification null means the game is going
    setNotification(null);
  };

  return (
    <div className="bg bg-big">
      <Notification title={notification} onPlayAgain={playAgainHandler} />
      <PlayerSides players={players} />
      <Game
        boardSymbols={boardSymbols}
        onGameBoardClick={gameBoardClickHandler}
        onGameReset={gameResetHandler}
      />
    </div>
  );
}

export default App;
