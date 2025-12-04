import classes from './board.module.css';

interface CellProps {
	tag?: string | null;
	hilite?: boolean,
	cellClick: () => void;
}

export default function Cell({ tag, hilite, cellClick }: CellProps) {
	return (
		<button className={`${classes['board__cell']} ${tag ? classes['board__cell--blocked'] : ''} ${hilite ? classes['board__cell--hilite'] : ''}`} onClick={cellClick}>{tag}</button>
	)
}