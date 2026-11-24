// Mock attendance. Replace statusOn/timesFor with API data when the backend exists.
export const STAFF = [
  ['Asha Verma', 'Counsellor', 'Delhi'], ['Karan Mehta', 'Employee', 'Delhi'], ['Neha Kapoor', 'Team Lead', 'Mumbai'],
  ['Rohan Das', 'Employee', 'Mumbai'], ['Isha Rao', 'Manager', 'Delhi'], ['Vikram Joshi', 'Employee', 'Pune'],
  ['Meera Nair', 'Counsellor', 'Pune'], ['Arjun Sethi', 'Employee', 'Delhi'], ['Pooja Jain', 'Team Lead', 'Delhi'],
  ['Sanjay Gill', 'Employee', 'Mumbai'],
]
export const STATUS = { P: 'Present', L: 'Late', H: 'Half day', A: 'Absent', V: 'On leave', W: 'Weekly off' }
export function statusOn(i, date) {
  if (date.getDay() === 0) return 'W'
  const h = (i * 7 + date.getDate() * 13 + date.getMonth() * 5) % 23
  return h === 0 ? 'A' : h < 3 ? 'L' : h === 3 ? 'V' : h === 4 ? 'H' : 'P'
}
export function timesFor(st, i) {
  const m = (i * 7) % 20, pad = n => String(n).padStart(2, '0')
  if (st === 'P') return [`09:${pad(m)}`, '18:00', (9 - m / 60).toFixed(1)]
  if (st === 'L') { const l = 15 + (m % 15); return [`10:${pad(l)}`, '18:00', (8 - l / 60).toFixed(1)] }
  if (st === 'H') return [`09:${pad(m)}`, '13:30', (4.5 - m / 60).toFixed(1)]
  return ['—', '—', '—']
}
