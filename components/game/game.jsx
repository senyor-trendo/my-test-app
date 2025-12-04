'use client';
import { useState } from "react";
import Board from "@/components/board/board";
import Player from "@/components/player/player";
import { useModal } from '@/providers/modalProvider';
import classes from './game.module.css';

export default function Game() {
	const { openModal } = useModal();
	const [moves, setMoves] = useState(Array(9).fill(null));
	const [turn, setTurn] = useState(0);
	const [players, setPlayers] = useState({
		0: {
			name: 'Player 1',
			symbol: 'X',
			wins: 0
		},
		1: {
			name: 'Player 2',
			symbol: 'O',
			wins: 0
		}
	});

	function handleClick(i) {
		if (!moves[i]) {
			const currentMoves = [...moves];
			currentMoves[i] = players[turn].symbol;

			const w = checkWinner(currentMoves);
			if (w) {
				const currentPlayers = {...players};
				currentPlayers[turn].wins++;
				setPlayers(currentPlayers)
				setMoves(currentMoves);
				openModal(
					<div>
						<h2>{players[turn].name} wins!</h2>
					</div>
				);
				resetGame();
				return;
			}
			else if (!currentMoves.some(m => m === null)) {
				openModal(
					<div>
						<h2>It's a draw!</h2>
					</div>
				);
				resetGame();
				return;
			}

			setMoves(currentMoves);
			setTurn((t) => (t + 1) % 2)
		}
	}
	function checkWinner(board) {
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
	function resetGame() {
		setMoves(Array(9).fill(null));
		setTurn(0);
	}

	return (
		<section className={classes['game']}>
			<div>
				<h1>Tic-tac-toe</h1>
				<button onClick={resetGame}>Restart</button>
			</div>
			
			<ul className={classes['players']}>
				<li className={classes['player1']}><Player name={players[0].name} current={turn === 0} symbol={players[0].symbol}></Player></li>
				<li className={classes['players__score']}>{players[0].wins} - {players[1].wins}</li>
				<li className={classes['player2']}><Player name={players[1].name} current={turn === 1} symbol={players[1].symbol}></Player></li>
			</ul>
			<Board moves={moves} onMove={handleClick} player={turn} />
			<dialog>Hola</dialog>
		</section>
	);
}