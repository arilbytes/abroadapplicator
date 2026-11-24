// import './Topbar.css'
// import BrandPanel from '../BrandPanel/BrandPanel'
// import ROLES from '../../roles'
// export default function Topbar({ role, onRoleChange, onMenu }) {
//   const r = ROLES[role]
//   return (
//     <header className="top">
//       <button className="burger" aria-label="Menu" onClick={onMenu}>☰</button>
//       <input className="search" placeholder="Search by name, email, phone or student ID" aria-label="Search" />
//       <select value={role} onChange={e => onRoleChange(e.target.value)} aria-label="Switch role (demo)">
//         {Object.entries(ROLES).map(([k, x]) => <option key={k} value={k}>{x.label} view</option>)}
//       </select>
//       <BrandPanel />
//       <span className="bell" aria-label="Notifications">🔔<i>4</i></span>
//       <div className="user"><span className="avatar">{r.user[0]}</span><div><b>{r.user}</b><span className="muted small">{r.label}</span></div></div>
//     </header>
//   )
// }
import './Topbar.css'
import BrandPanel from '../BrandPanel/BrandPanel'
import ROLES from '../../roles'

const SHOW_ROLE_SWITCHER = true // set to true to show the "Founder view / Manager view" dropdown again

export default function Topbar({ role, onRoleChange, onMenu }) {
  const r = ROLES[role]
  return (
    <header className="top">
      <button className="burger" aria-label="Menu" onClick={onMenu}>☰</button>
      <input className="search" placeholder="Search by name, email, phone or student ID" aria-label="Search" />
      {SHOW_ROLE_SWITCHER && (
        <select value={role} onChange={e => onRoleChange(e.target.value)} aria-label="Switch role (demo)">
          {Object.entries(ROLES).map(([k, x]) => <option key={k} value={k}>{x.label} view</option>)}
        </select>
      )}
      <BrandPanel />
      <span className="bell" aria-label="Notifications">🔔<i>4</i></span>
      <div className="user"><span className="avatar">{r.user[0]}</span><div><b>{r.user}</b><span className="muted small">{r.label}</span></div></div>
    </header>
  )
}
