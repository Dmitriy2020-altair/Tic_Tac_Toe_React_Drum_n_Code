import React from 'react';
import './History.css';

const History = ({ history, jumpTo, startGame }) => (
  <div className="history-wrapper">
    <h2 className="history-title">History</h2>
    {history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : 'START NEW GAME';

      return (
        <li
          className="history-button"
          key={move}
        >
          <button onClick={move ? () => jumpTo(move) : startGame}>{destination}</button>
        </li>
      );
    })}
  </div>
);

export default History;
