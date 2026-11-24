import './Alerts.css'
import { ALERTS } from '../../data/mock'
export default function Alerts({ items = ALERTS }) {
  return (
    <ul className="alerts">
      {items.map(([p, t, id]) => (
        <li key={t}><span className={'pill ' + p.toLowerCase()}>{p}</span><div><b>{t}</b><span className="muted small">{id}</span></div></li>
      ))}
    </ul>
  )
}
