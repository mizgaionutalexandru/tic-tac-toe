import React from 'react';
import './Notification.css';

function Notification({ isGameGoing, players, onPlayAgain }) {
  const playingPlayer = players.filter(
    (player) => player.status === 'playing'
  )[0];

  return (
    // If the game is going, this notification will be hidden
    <div className={`notification ${isGameGoing ? 'hidden' : ''}`}>
      <h1>Player {playingPlayer.name} has won!</h1>
      <button onClick={onPlayAgain}>Play again!</button>
    </div>
  );
}

export default Notification;
