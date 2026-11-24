import './Pipeline.css'
import { PIPELINE, STUDENTS } from '../../data/mock'
export default function Pipeline() {
  return (
    <div className="kanban">
      {PIPELINE.map(([s, n]) => (
        <div className="col" key={s}><span className="muted small">{s}</span><strong>{n}</strong>
          {Array.from({ length: Math.min(n, 2) }).map((_, i) => <div className="card" key={i}>{STUDENTS[i + 1][1]}<span className="muted small">{STUDENTS[i + 1][2]}</span></div>)}
        </div>
      ))}
    </div>
  )
}
