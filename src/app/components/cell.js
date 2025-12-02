import styles from "../page.module.css";

export default function Cell({tag, cellClick}) {
  return (
    <button className="board-cell" onClick={cellClick}>{tag}</button>
  )
}
