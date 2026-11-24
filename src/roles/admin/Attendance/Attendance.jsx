import { useMemo, useState } from 'react'
import './Attendance.css'
import { Kpis, Panel, Table } from '../../../components'
import { STAFF, STATUS, statusOn, timesFor } from '../../../data/attendance'

const today = new Date().toLocaleDateString('en-CA') // YYYY-MM-DD, local time
const uniq = i => ['All', ...new Set(STAFF.map(s => s[i]))]
const csv = (name, rows) => {
  const text = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n')
  const a = document.createElement('a')
  a.href = URL.createObjectURL(new Blob([text], { type: 'text/csv' })); a.download = name; a.click()
  URL.revokeObjectURL(a.href)
}

export default function Attendance() {
  const [tab, setTab] = useState('daily')
  const [date, setDate] = useState(today)
  const [month, setMonth] = useState(today.slice(0, 7))
  const [office, setOffice] = useState('All')
  const [role, setRole] = useState('All')
  const [edits, setEdits] = useState({}) // founder corrections: "date|staffIndex" -> status

  const staff = useMemo(() => STAFF.map((s, i) => ({ s, i })).filter(({ s }) =>
    (office === 'All' || s[2] === office) && (role === 'All' || s[1] === role)), [office, role])
  const stat = (i, d) => edits[d + '|' + i] ?? (d > today ? 'F' : statusOn(i, new Date(d + 'T00:00:00')))
  const pctOf = cells => {
    const w = cells.filter(c => c !== 'W' && c !== 'F').length
    const p = cells.filter(c => c === 'P' || c === 'L').length + cells.filter(c => c === 'H').length / 2
    return w ? Math.round((p / w) * 100) : 0
  }

  // daily
  const day = staff.map(({ s, i }) => { const st = stat(i, date); return { s, i, st, t: timesFor(st, i) } })
  const n = k => day.filter(r => r.st === k).length
  const working = day.filter(r => r.st !== 'W' && r.st !== 'F').length
  const dayHead = ['Staff', 'Role', 'Office', 'Check-in', 'Check-out', 'Hours', 'Status']
  const dayRows = day.map(r => [r.s[0], r.s[1], r.s[2], r.t[0], r.t[1], r.t[2],
    <select className={'st st-' + r.st} value={r.st} aria-label={'Status for ' + r.s[0]}
      onChange={e => setEdits({ ...edits, [date + '|' + r.i]: e.target.value })}>
      {Object.entries(STATUS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
    </select>])

  // monthly
  const [y, m] = month.split('-').map(Number)
  const days = Array.from({ length: new Date(y, m, 0).getDate() }, (_, k) => k + 1)
  const mrows = staff.map(({ s, i }) => {
    const cells = days.map(d => stat(i, `${month}-${String(d).padStart(2, '0')}`))
    return { s, cells, pct: pctOf(cells) }
  })
  const offices = [...new Set(mrows.map(r => r.s[2]))]
  const officePct = o => { const r = mrows.filter(x => x.s[2] === o); return Math.round(r.reduce((a, x) => a + x.pct, 0) / r.length) }

  const exportCsv = () => tab === 'daily'
    ? csv(`attendance-${date}.csv`, [dayHead.slice(0, 6).concat('Status'), ...day.map(r => [r.s[0], r.s[1], r.s[2], ...r.t, STATUS[r.st]])])
    : csv(`attendance-${month}.csv`, [['Staff', 'Office', ...days, 'Attendance %'], ...mrows.map(r => [r.s[0], r.s[2], ...r.cells, r.pct])])

  return (
    <>
      <div className="att-bar">
        <div className="tabs" role="tablist">
          {[['daily', 'Daily'], ['monthly', 'Monthly']].map(([k, l]) =>
            <button key={k} role="tab" aria-selected={tab === k} className={tab === k ? 'on' : ''} onClick={() => setTab(k)}>{l}</button>)}
        </div>
        <div className="att-filters">
          {tab === 'daily'
            ? <label>Date<input type="date" value={date} max={today} onChange={e => e.target.value && setDate(e.target.value)} /></label>
            : <label>Month<input type="month" value={month} max={today.slice(0, 7)} onChange={e => e.target.value && setMonth(e.target.value)} /></label>}
          <label>Office<select value={office} onChange={e => setOffice(e.target.value)}>{uniq(2).map(o => <option key={o}>{o}</option>)}</select></label>
          <label>Role<select value={role} onChange={e => setRole(e.target.value)}>{uniq(1).map(o => <option key={o}>{o}</option>)}</select></label>
          <button className="btn ghost" onClick={exportCsv}>Export CSV</button>
        </div>
      </div>

      {tab === 'daily' ? (
        <>
          <Kpis items={[['Present', n('P')], ['Late', n('L')], ['Half day', n('H')], ['Absent', n('A')], ['On leave', n('V')],
            ['Attendance', working ? Math.round(((n('P') + n('L') + n('H') / 2) / working) * 100) + '%' : '–', working ? `of ${working} staff` : 'Weekly off']]} />
          <Panel title={`Attendance on ${date}`}><Table head={dayHead} rows={dayRows} /></Panel>
        </>
      ) : (
        <Panel title="Monthly attendance">
          <div className="legend">
            {Object.entries(STATUS).map(([k, v]) => <span key={k}><i className={'cell cell-' + k}>{k}</i> {v}</span>)}
            <span className="muted">Attendance % = present days (half day counts 0.5) ÷ working days</span>
          </div>
          <div className="att-scroll">
            <table className="att-grid">
              <thead><tr><th>Staff</th>{days.map(d => <th key={d}>{d}</th>)}<th className="pct">%</th></tr></thead>
              <tbody>{mrows.map(r => (
                <tr key={r.s[0]}><td>{r.s[0]}<span className="muted small"> · {r.s[2]}</span></td>
                  {r.cells.map((c, k) => <td key={k}><i className={'cell cell-' + c}>{c === 'F' ? '·' : c}</i></td>)}
                  <td className="pct"><b>{r.pct}%</b></td></tr>
              ))}</tbody>
            </table>
          </div>
          <div className="legend">{offices.map(o => <span key={o} className="pill">{o}: {officePct(o)}%</span>)}</div>
        </Panel>
      )}
    </>
  )
}
