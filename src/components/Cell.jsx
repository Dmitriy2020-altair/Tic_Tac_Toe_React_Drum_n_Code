import React from 'react';
import './Cell.css';

function Cell({ onClick, value }) {
  return (
    <button
      className="cell"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Cell;
