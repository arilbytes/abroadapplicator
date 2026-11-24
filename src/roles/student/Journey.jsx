import './Journey.css'
import { JOURNEY } from '../../data/mock'
export default function Journey() {
  return (
    <ol className="journey">
      {JOURNEY.map((s, i) => (
        <li key={s} className={i < 4 ? 'done' : i === 4 ? 'now' : ''}><span>{i < 4 ? '✓' : i + 1}</span>{s}</li>
      ))}
    </ol>
  )
}
