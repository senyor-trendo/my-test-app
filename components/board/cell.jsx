import classes from './board.module.css';

export default function Cell({tag, cellClick}) {
  return (
    <button className={`${classes['board__cell']} ${tag? classes['board__cell--blocked']: ''}`} onClick={cellClick}>{tag}</button>
  )
}
