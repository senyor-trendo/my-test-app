import Cell from "./Cell";

export default function Board({moves, player, onMove}) {
	function handleClick(i){
		onMove(i);
	}

	return (
		<div className={`board ${player === 0? 'bg--player1' : 'bg--player2'}`}>
			{moves.map((value, index) => (
				<Cell key={index} tag={value} cellClick={() => handleClick(index)} />
			))}
		</div>
	);
}