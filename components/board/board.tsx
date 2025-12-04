import Cell from "./cell";
import classes from './board.module.css';

interface BoardProps {
	block?: boolean;
	hilite?: number[];
	moves: (string | null)[];
	player: 0 | 1;
	onMove: (index: number) => void;
}
export default function Board({ moves, player, hilite, block, onMove }: BoardProps) {
	function handleClick(i: number) {
		onMove(i);
	}

	return (
		<div className={`${classes['board']} ${player === 0 ? classes['bg--player1'] : classes['bg--player2']} ${block? classes['board--blocked']: ''}`}>
			{moves.map((value, index) => (
				<Cell key={index} tag={value} hilite={hilite?.includes(index)} cellClick={() => handleClick(index)} />
			))}
		</div>
	);
}