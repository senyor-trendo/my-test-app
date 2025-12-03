export default function Cell({tag, cellClick}) {
  return (
    <button className={`board-cell ${tag? 'board-cell--blocked': ''}`} onClick={cellClick}>{tag}</button>
  )
}
