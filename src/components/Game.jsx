import React, { useState } from 'react';
import Board from './Board';
import './Game.css';
import { calculateWinner } from '../helper';
// import History from './History';

function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [stepNumber, setStepNumber] = useState(0);
	const [xIsNext, setXIsNext] = useState(true);
	// const [opacityBoard, setOpacityBoard] = useState(0);
	const winner = calculateWinner(history[stepNumber]);
	const x0 = xIsNext ? 'X' : 'O';

	function handleClick(index) {
		const historyPoint = history.slice(0, stepNumber + 1);
		const current = historyPoint[stepNumber];
		const cells = [...current];

		if (winner || cells[index]) return;

		cells[index] = x0;
		setHistory([...historyPoint, cells]);
		setStepNumber(historyPoint.length);
		setXIsNext(!xIsNext);
	};

	const jumpTo = (step) => {
		setStepNumber(step);
		setXIsNext(step % 2 === 0);
	};

	const renderMoves = () =>
		history.map((_step, move) => {
			const destination = move ? `Go to move #${move}` : `Clear the board and GO to start`;

			return (
				<li
					className="history-button"
					key={move}>
					<button onClick={() => jumpTo(move)}>{destination}</button>
				</li>
			);
		});

	function getStatus() {
		if (winner) {
			return "Winner is: " + winner;
		} else if (stepNumber === 9) {
			return "No winner is Draw!";
		} else {
			return "player goes next: " + x0;
		}
	}

	return (
		<div className="wrapper">
			<button
				className="start-btn"
			>
				Tap to start the game
				</button>
			<Board
				cells={history[stepNumber]}
				click={handleClick}
			/>
			<p className="game-info">
				{getStatus()}
			</p>
			<div
				className="history-wrapper">
				<h2 className="history-title">History</h2>
				{renderMoves()}
			</div>
		</div>
	)
};

export default Game;