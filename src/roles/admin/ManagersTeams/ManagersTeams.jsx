import { useState } from 'react'
import ListPage from '../../../pages/ListPage/ListPage'
import Attendance from '../Attendance/Attendance'

export default function ManagersTeams() {
  const [tab, setTab] = useState('team')
  return (
    <>
      <div className="tabs" role="tablist" style={{ alignSelf: 'flex-start' }}>
        {[['team', 'Company'], ['attendance', 'Attendance']].map(([k, label]) => (
          <button key={k} role="tab" aria-selected={tab === k} className={tab === k ? 'on' : ''} onClick={() => setTab(k)}>{label}</button>
        ))}
      </div>
      {tab === 'team' ? <ListPage name="Managers & Teams" /> : <Attendance />}
    </>
  )
}