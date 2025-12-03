'use client';
import { useState } from "react";
import Board from "@/components/board";
import Player from "@/components/player";
import { usePopover } from '@/providers/popoverProvider';

export default function Game() {
	//const { showPopover } = usePopover();
	const [moves, setMoves] = useState(Array(9).fill(null));
	const [turn, setTurn] = useState(0); //Player turn
	const [winner, setWinner] = useState(null); //Player turn
	const symbols = ['X', 'O'];

	function handleClick(i){
		if(!moves[i]){
			const m = [...moves];
			m[i] = turn === 0 ? 'X': 'O';

			const w = checkWinner(m);
			if (w) {
				setWinner(w);
				setMoves(m);
				// showPopover(
				// 	'Felicidades',
				// 	`Ha ganado`,
				// 	'success',
				// 	{ top: 100, left: 200 } // Position where to show
				// );
				return;
			}
			
			setMoves(m);
			setTurn((t) => (t+1)%2)
		}
	}
	function checkWinner(board){
		const lines = [
			[0, 1, 2], [3, 4, 5], [6, 7, 8],
			[0, 3, 6], [1, 4, 7], [2, 5, 8],
			[0, 4, 8], [2, 4, 6]
		];

		for (const [a, b, c] of lines) {
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				return board[a];
			}
		}

		return null;
	}

	return (
		<section className="game">
			<h1>3 en raya</h1> [{winner}]
			<ul className="players">
				<li className="player1"><Player name="Player 1" current={turn === 0} symbol={symbols[0]}></Player></li>
				<li className="player2"><Player name="Player 2" current={turn === 1} symbol={symbols[1]}></Player></li>
			</ul>
			<Board moves={moves} onMove={handleClick} player={turn}/>
			<dialog>Hola</dialog>
		</section>
	);
}