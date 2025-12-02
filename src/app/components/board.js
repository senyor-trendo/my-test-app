'use client';
import { useState } from "react";
import Cell from "./cell";
import Player from "./player";

export default function Board() {
	const [moves, setMoves] = useState(Array(9).fill(null));
	const [turn, setTurn] = useState(0); //Player turn

	function handleClick(i){
		if(!moves[i]){
			const m = [...moves];
			m[i] = turn === 0 ? 'X': 'O';
			setMoves(m);
			setTurn((t) => (t+1)%2 )
		}
	}

	return (
		<div class="game">
			<Player idx={turn} name="UOLA"></Player>
			<div className="board">
				{moves.map((value, index) => (
					<Cell key={index} tag={value} cellClick={() => handleClick(index)} />
				))}
			</div>
		</div>
	);
}