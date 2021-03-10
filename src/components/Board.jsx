import React from 'react';
import './Board.css';
import Cell from './Cell';

function Board({ cells, click }) {
	return (
		<div className="board">
			{
				cells.map((cell, i) => (
					<Cell
						key={i}
						value={cell}
						onClick={() => click(i)}
					/>
				))
			}
		</div>
	);
}

export default Board;