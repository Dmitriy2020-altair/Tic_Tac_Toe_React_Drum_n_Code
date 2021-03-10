import React from 'react';
import './Board.css';
import Cell from './Cell';

function Board() {
	return (
		<div className="board">
			<Cell />
			<Cell/>
			<Cell/>
			<Cell/>
			<Cell/>
			<Cell/>
			<Cell/>
			<Cell/>
			<Cell/>
		</div>
	);
}

export default Board;