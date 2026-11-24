import './Chart.css'
import { MONTHS } from '../../data/mock'
export default function Chart({ data = MONTHS }) {
  return (
    <div className="bars">
      {data.map(([m, v]) => (
        <div className="bar" key={m}><span className="bar-v">{v}</span><i style={{ height: v * 1.6 }} /><span className="muted small">{m}</span></div>
      ))}
    </div>
  )
}
