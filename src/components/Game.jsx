import React, { useState } from 'react';
import Board from './Board';
import './Game.css';
import { calculateWinner } from '../helper';

function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [stepNumber, setStepNumber] = useState(0);
	const [xIsNext, setXIsNext] = useState(true);
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
	
	return (
		<div className="wrapper">
			<Board
				cells={history[stepNumber]}
				click={handleClick}
			/>
			<p className="game-info">
				{winner ? 'Winner is: ' + winner : 'next turn for: ' + x0}
			</p>
			<div className="history-wrapper">
				<h2>History</h2>
				{renderMoves()}
		</div>
		</div>
	)
};

export default Game;