import React from 'react';
import './Cell.css';

function Cell(props) {
	return (
		<button
			className="cell"
			onClick={props.onClick}
		>
			{props.value}
		</button>
	)
}

export default Cell;