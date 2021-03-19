import React, {
  Fragment, useCallback, useMemo, useState,
} from 'react';
import Board from './Board';
import './Game.css';
import calculateWinner from '../helper';
import History from './History';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [gameIsStarted, setGameIsStarted] = useState(false);
  const winner = useMemo(() => calculateWinner(history[stepNumber]), [history, stepNumber]);
  const x0 = xIsNext ? 'X' : 'O';

  const handleClick = (index) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const cells = [...current];

    if (winner || cells[index]) return;

    cells[index] = x0;
    setHistory([...historyPoint, cells]);
    setStepNumber(historyPoint.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = useCallback((step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }, []);

  const getStatus = () => {
    if (winner) {
      return `Winner is: ${winner}`;
    } if (stepNumber === 9) {
      return 'No winner is Draw!';
    }
    return `player goes next: ${x0}`;
  };

  const startGame = useCallback(() => {
    setGameIsStarted(true);
    setStepNumber(0);
    setHistory([Array(9).fill(null)]);
    setXIsNext(true);
  }, []);

  return (
    <div className="wrapper">
      {gameIsStarted ? (
        <>
          <Board
            cells={history[stepNumber]}
            click={handleClick}
          />
          <p className="game-info">
            {getStatus()}
          </p>
          <History
            history={history}
            jumpTo={jumpTo}
            startGame={startGame}
          />
        </>
      ) : (
        <button
          className="start-btn"
          onClick={startGame}
        >
          Tap to start the game
        </button>
      )}
    </div>
  );
};

export default Game;
