export default function Player({name, symbol, current}) {
	
	return (
		<h2 className={current? 'player--current' : 'player'}>{name} - {symbol}</h2>
	);
}