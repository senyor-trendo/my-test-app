import classes from './board.module.css';

interface CellProps {
	tag?: string | null;
	hilite?: boolean,
	cellClick: () => void;
}

export default function Cell({ tag, hilite, cellClick }: CellProps) {
	return (
		<button className={`${classes['board__cell']} ${hilite ? classes['board__cell--hilite'] : (tag ? classes['board__cell--blocked'] : '')}`} onClick={cellClick}>{tag}</button>
	)
}