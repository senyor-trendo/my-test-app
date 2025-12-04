import classes from './player.module.css';

export default function Player({name, symbol, current}) {
	
	return (
		<h2 className={current? classes['player--current'] : classes['player']}>{name} - {symbol}</h2>
	);
}