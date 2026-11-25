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

// import './Topbar.css'
// import BrandPanel from '../BrandPanel/BrandPanel'
// import ROLES from '../../roles'

// const SHOW_ROLE_SWITCHER = true // set to true to show the "Founder view / Manager view" dropdown again

// export default function Topbar({ role, onRoleChange, onMenu }) {
//   const r = ROLES[role]
//   return (
//     <header className="top">
//       <button className="burger" aria-label="Menu" onClick={onMenu}>☰</button>
//       <input className="search" placeholder="Name, Email, Phone, Student ID or Ack. No." aria-label="Search" />
//       {SHOW_ROLE_SWITCHER && (
//         <select value={role} onChange={e => onRoleChange(e.target.value)} aria-label="Switch role (demo)">
//           {Object.entries(ROLES).map(([k, x]) => <option key={k} value={k}>{x.label} view</option>)}
//         </select>
//       )}
//       <BrandPanel />
//       <span className="bell" aria-label="Notifications">🔔<i>4</i></span>
//       <div className="user"><span className="avatar">{r.user[0]}</span><div><b>{r.user}</b><span className="muted small">{r.label}</span></div></div>
//     </header>
//   )
// }

import { useEffect, useRef, useState } from 'react'
import './Topbar.css'
import BrandPanel from '../BrandPanel/BrandPanel'
import ROLES from '../../roles'

const SHOW_ROLE_SWITCHER = true // set to false to hide the "Founder view / Manager view" dropdown

export default function Topbar({ role, onRoleChange, onMenu, onLogout }) {
  const r = ROLES[role]
  const [menu, setMenu] = useState(false)
  const box = useRef(null)

  // close the profile menu on outside click or Escape
  useEffect(() => {
    if (!menu) return
    const down = e => { if (!box.current?.contains(e.target)) setMenu(false) }
    const key = e => { if (e.key === 'Escape') setMenu(false) }
    document.addEventListener('mousedown', down)
    document.addEventListener('keydown', key)
    return () => { document.removeEventListener('mousedown', down); document.removeEventListener('keydown', key) }
  }, [menu])

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
      <div className="profile" ref={box}>
        <button className="profile-btn" aria-haspopup="menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>
          <span className="avatar">{r.user[0]}</span>
          <span className="profile-text"><b>{r.user}</b><span className="muted small">{r.label}</span></span>
          <span className="chev" aria-hidden="true">▾</span>
        </button>
        {menu && (
          <div className="profile-menu" role="menu">
            <div className="profile-head"><b>{r.user}</b><span className="muted small">{r.label}</span></div>
            <button className="menu-item" role="menuitem" onClick={onLogout}>Sign out</button>
          </div>
        )}
      </div>
    </header>
  )
}