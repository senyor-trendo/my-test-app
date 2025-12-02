import Board from "./components/board";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.boardContainer}>
			<Board></Board>
		</div>
	);
}
