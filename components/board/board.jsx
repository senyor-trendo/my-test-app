import Cell from "./cell";
import classes from './board.module.css';

export default function Board({moves, player, onMove}) {
	function handleClick(i){
		onMove(i);
	}

	return (
		<div className={`${classes['board']} ${player === 0? classes['bg--player1'] : classes['bg--player2']}`}>
			{moves.map((value, index) => (
				<Cell key={index} tag={value} cellClick={() => handleClick(index)} />
			))}
		</div>
	);
}