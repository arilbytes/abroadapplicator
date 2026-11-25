import { createContext, useContext, useEffect, useState } from 'react'
import ROLES from '../roles'

// To-do store shared by every role. Saved in the browser (localStorage) until the backend exists.
// A task: { id, title, date (YYYY-MM-DD it was added for), done, createdBy (role key), assignee (role key) }
// "Today" = date === today. "Pending" = not done and date < today, so unfinished tasks move there by themselves.
const KEY = 'jcg-tasks-v1'
export const ymd = d => d.toLocaleDateString('en-CA') // local YYYY-MM-DD
const uid = () => Math.random().toString(36).slice(2, 9)
const shift = (d, n) => { const x = new Date(d + 'T00:00:00'); x.setDate(x.getDate() + n); return ymd(x) }

// Who may hand tasks to whom (role keys). Roles that are not registered in roles/index.js are ignored.
const CAN_ASSIGN = {
  admin: ['manager', 'lead', 'agent', 'employee'],
  manager: ['lead', 'agent', 'employee'],
  lead: ['employee'],
}
export const assignableRoles = role => (CAN_ASSIGN[role] || []).filter(k => ROLES[k])

function seed() {
  const t = ymd(new Date())
  const mk = (assignee, title, date = t, createdBy = assignee) => ({ id: uid(), title, date, done: false, createdBy, assignee })
  return [
    mk('admin', 'Review commission payout batch'), mk('admin', 'Approve partner agreement renewal'),
    mk('admin', 'Sign off visa refusal report', shift(t, -2)),
    mk('manager', 'Check monthly office target'), mk('manager', 'Follow up on escalated complaints', shift(t, -1)),
    mk('manager', 'Prepare Q4 revenue summary', t, 'admin'),
    mk('employee', 'Verify transcripts – Rahul Sharma', t, 'manager'), mk('employee', 'Submit UCL application – Rahul Sharma'),
    mk('employee', 'Collect IELTS score report – Priya Nair', shift(t, -3)),
  ]
}
const load = () => { try { const v = JSON.parse(localStorage.getItem(KEY)); if (Array.isArray(v)) return v } catch { /* ignore */ } return seed() }

const TasksContext = createContext(null)

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(load)
  const [today, setToday] = useState(() => ymd(new Date()))
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(tasks)) } catch { /* ignore */ } }, [tasks])
  useEffect(() => { const id = setInterval(() => setToday(ymd(new Date())), 60000); return () => clearInterval(id) }, []) // rolls over at midnight

  const add = (title, createdBy, assignee) => setTasks(t => [{ id: uid(), title: title.trim(), date: today, done: false, createdBy, assignee }, ...t])
  const toggle = id => setTasks(t => t.map(x => (x.id === id ? { ...x, done: !x.done } : x)))
  const remove = id => setTasks(t => t.filter(x => x.id !== id))
  return <TasksContext.Provider value={{ tasks, today, add, toggle, remove }}>{children}</TasksContext.Provider>
}

export const useTasks = () => useContext(TasksContext)