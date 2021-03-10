import React, { useState } from 'react';
import Board from './Board';
import './Game.css';
import { calculateWinner } from '../helper';

function Game() {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);
	const winner = calculateWinner(board);

	function handleClick(index) {
		const boardCopy = [...board];

		if (winner || boardCopy[index]) return;
		boardCopy[index] = xIsNext ? 'X' : 'O';
		setBoard(boardCopy);
		setXIsNext(!xIsNext);
	}

	function startNewGame() {
		return (
			<button
				className="start-btn"
				onClick={() => setBoard(Array(9).fill(null))}
			>
				Tap to clear the playing board
			</button>
		)
	}

	return (
		<div className="wrapper">
			{startNewGame()}
			<Board
				cells={board}
				click={handleClick}
			/>
			<p className="game-info">
				{winner ? 'Winner is: ' + winner : 'next turn for: ' + (xIsNext ? 'X' : 'O')}
			</p>
		</div>
	)
}

export default Game;