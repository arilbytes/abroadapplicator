import './TaskLists.css'
import { Panel } from '../../../components'
import { TASKS_TODAY, TASKS_PENDING } from '../../../data/founderDashboard'
import { COMPLAINTS } from '../../../data/complaints'

const TONE = { Critical: 'high', High: 'high', Medium: 'medium', Low: '', Escalated: 'high', Open: 'medium', 'In progress': '' }
const List = ({ title, rows }) => (
  <Panel title={title} action="View all">
    <ul className="tasklist">
      {rows.map(([t, who, when, p]) => (
        <li key={t}><div><b>{t}</b><span className="muted small">{who} · {when}</span></div><span className={'pill ' + TONE[p]}>{p}</span></li>
      ))}
    </ul>
  </Panel>
)

export default function TaskLists() {
  return (
    <div className="task-lists">
      <List title="Today's tasks" rows={TASKS_TODAY} />
      <List title="Pending tasks" rows={TASKS_PENDING} />
      <List title="Grievances / Complaints" rows={COMPLAINTS} />
    </div>
  )
}