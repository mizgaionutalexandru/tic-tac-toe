import React from 'react';
import './Notification.css';

function Notification({ title, onPlayAgain }) {
  return (
    // If the game is going, this notification will be hidden
    <div className={`notification ${title ? '' : 'hidden'}`}>
      <h1>{title}</h1>
      <button onClick={onPlayAgain}>Play again!</button>
    </div>
  );
}

export default Notification;
