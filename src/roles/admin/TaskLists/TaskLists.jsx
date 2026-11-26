// import './TaskLists.css'
// import { Panel } from '../../../components'
// import { TASKS_TODAY, TASKS_PENDING } from '../../../data/founderDashboard'
// import { COMPLAINTS } from '../../../data/complaints'

// const TONE = { Critical: 'high', High: 'high', Medium: 'medium', Low: '', Escalated: 'high', Open: 'medium', 'In progress': '' }
// const List = ({ title, rows }) => (
//   <Panel title={title} action="View all">
//     <ul className="tasklist">
//       {rows.map(([t, who, when, p]) => (
//         <li key={t}><div><b>{t}</b><span className="muted small">{who} · {when}</span></div><span className={'pill ' + TONE[p]}>{p}</span></li>
//       ))}
//     </ul>
//   </Panel>
// )

// export default function TaskLists() {
//   return (
//     <div className="task-lists">
//       <List title="Today's tasks" rows={TASKS_TODAY} />
//       <List title="Pending tasks" rows={TASKS_PENDING} />
//       <List title="Grievances / Complaints" rows={COMPLAINTS} />
//     </div>
//   )
// }

import { useState } from 'react'
import './TaskLists.css'
import { Panel } from '../../../components'
import ROLES from '../../index'
import { useTasks, assignableRoles } from '../../../context/TasksContext'
import { COMPLAINTS } from '../../../data/complaints'

const label = k => ROLES[k]?.label ?? k
const daysLate = (date, today) => Math.round((new Date(today) - new Date(date)) / 864e5)
// Tag shown in front of a task that was handed over: "From Manager" for the receiver, "To Employee" for the sender
const noteFor = (t, role) => (t.createdBy === t.assignee ? null : t.assignee === role ? `From ${label(t.createdBy)}` : `To ${label(t.assignee)}`)

function Todo({ t, role, pending, today }) {
  const { toggle, remove } = useTasks()
  const note = noteFor(t, role)
  const late = pending ? daysLate(t.date, today) : 0
  return (
    <li className={'todo' + (t.done ? ' done' : '')}>
      <input type="checkbox" checked={t.done} disabled={t.assignee !== role} onChange={() => toggle(t.id)} aria-label={`Mark "${t.title}" as done`} />
      <div className="todo-text">
        <span className="todo-title">{note && <span className="todo-tag">{note}</span>}{t.title}</span>
        {pending && <span className="muted small">{late} day{late === 1 ? '' : 's'} overdue</span>}
      </div>
      {t.createdBy === role && <button className="todo-del" aria-label={`Delete "${t.title}"`} onClick={() => remove(t.id)}>×</button>}
    </li>
  )
}

function AddTask({ role }) {
  const { add } = useTasks()
  const targets = assignableRoles(role)
  const [text, setText] = useState('')
  const [to, setTo] = useState(role)
  const submit = e => {
    e.preventDefault()
    if (!text.trim()) return
    add(text, role, targets.includes(to) ? to : role)
    setText('')
  }
  return (
    <form className="todo-add" onSubmit={submit}>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Add a task for today" aria-label="New task" maxLength={120} />
      {targets.length > 0 && (
        <select value={to} onChange={e => setTo(e.target.value)} aria-label="Assign to">
          <option value={role}>For Me</option>
          {targets.map(k => <option key={k} value={k}>{label(k)}</option>)}
        </select>
      )}
      <button className="btn">Add</button>
    </form>
  )
}

const TONE = { Escalated: 'high', Open: 'medium', 'In progress': '' }
const Complaints = () => (
  <Panel title="Grievances / Complaints" action="View all">
    <ul className="tasklist">
      {COMPLAINTS.map(([t, who, when, p]) => (
        <li key={t}><div><b>{t}</b><span className="muted small">{who} · {when}</span></div><span className={'pill ' + TONE[p]}>{p}</span></li>
      ))}
    </ul>
  </Panel>
)

// role: role key of the logged-in view ('admin' | 'manager' | 'employee' ...)
// row: lay the panels out side by side (used on the Employee dashboard)
// showComplaints: set false for roles that should not see grievances
export default function TaskLists({ role, row, showComplaints = true }) {
  const { tasks, today } = useTasks()
  const mine = tasks.filter(t => t.assignee === role || t.createdBy === role)
  const todays = mine.filter(t => t.date === today)
  const open = [...todays.filter(t => !t.done), ...todays.filter(t => t.done)]
  const pending = mine.filter(t => !t.done && t.date < today).sort((a, b) => a.date.localeCompare(b.date))
  return (
    <div className={'task-lists' + (row ? ' row' : '')}>
      <Panel title="Today's tasks" action="View all">
        <AddTask key={role} role={role} />
        <ul className="tasklist">
          {open.length ? open.map(t => <Todo key={t.id} t={t} role={role} today={today} />) : <li className="empty muted small">Nothing for today. Add a task above.</li>}
        </ul>
      </Panel>
      <Panel title="Pending tasks" action="View all">
        <ul className="tasklist">
          {pending.length ? pending.map(t => <Todo key={t.id} t={t} role={role} today={today} pending />) : <li className="empty muted small">All caught up.</li>}
        </ul>
      </Panel>
      {showComplaints && <Complaints />}
    </div>
  )
}


