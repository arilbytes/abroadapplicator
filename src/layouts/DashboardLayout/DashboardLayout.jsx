// import { useState } from 'react'
// import './DashboardLayout.css'
// import { Sidebar, Topbar, QrCard } from '../../components'
// import ListPage from '../../pages/ListPage/ListPage'
// import ROLES from '../../roles'
// export default function DashboardLayout({ role, setRole, onLogout }) {
//   const { nav, title, Dashboard, qrCard, pages } = ROLES[role]
//   const [page, setPage] = useState(0)
//   const [open, setOpen] = useState(false)
//   const Page = pages?.[nav[page]] // optional custom page (see roles/index.js)
//   return (
//     <div className="shell">
//       {open && <div className="backdrop" onClick={() => setOpen(false)} />}
//       <Sidebar nav={nav} page={page} setPage={setPage} open={open} setOpen={setOpen} />
//       <div className="main">
//         <Topbar role={role} onRoleChange={k => { setRole(k); setPage(0) }} onMenu={() => setOpen(!open)} onLogout={onLogout} />
//         <main className="content">
//           {page === 0 && qrCard && <QrCard />}
//           <div className="page-head">
//             <h1>{page === 0 ? title : nav[page]}</h1>
//        {!Page && (
//       <div className="actions">
//       <button className="btn ghost">Export</button>
//       {page === 0 && <button className="btn">{role === 'student' ? 'Upload document' : 'Add student'}</button>}
//       {page === 0 && ['admin', 'manager', 'employee'].includes(role) && <button className="btn">Add agent</button>}
//       </div>
//       )}
//           </div>
//           {page === 0 ? <Dashboard /> : Page ? <Page /> : <ListPage name={nav[page]} />}
//         </main>
//       </div>
//     </div>
//   )
// }

// import { useState } from 'react'
// import './DashboardLayout.css'
// import { Sidebar, Topbar, QrCard } from '../../components'
// import ListPage from '../../pages/ListPage/ListPage'
// import ROLES from '../../roles'
// export default function DashboardLayout({ role, setRole, onLogout }) {
//   const { nav, title, Dashboard, qrCard, pages } = ROLES[role]
//   const [page, setPage] = useState(0)
//   const [open, setOpen] = useState(false)
//   const Page = pages?.[nav[page]] // optional custom page (see roles/index.js)
//   return (
//     <div className="shell">
//       {open && <div className="backdrop" onClick={() => setOpen(false)} />}
//       <Sidebar nav={nav} page={page} setPage={setPage} open={open} setOpen={setOpen} />
//       <div className="main">
//         <Topbar role={role} onRoleChange={k => { setRole(k); setPage(0) }} onMenu={() => setOpen(!open)} onLogout={onLogout} />
//         <main className="content">
//           {page === 0 && qrCard && <QrCard />}
//           <div className="page-head">
//             <h1>{page === 0 ? title : nav[page]}</h1>
//       {!Page && (
//       <div className="actions">
//       <button className="btn ghost">Export</button>
//       {page === 0 && role !== 'agent' && <button className="btn">{role === 'student' ? 'Upload document' : 'Add student'}</button>}
//       {page === 0 && ['admin', 'manager', 'employee'].includes(role) && <button className="btn">Add agent</button>}
//       {page === 0 && role === 'agent' && (
//         <>
//           <button className="btn ghost flywire-btn">Pay fees via Flywire</button>
//           <button className="btn">Request Shortlisting</button>
//           <button className="btn">Add student</button>
//         </>
//       )}
//       </div>
//       )}
//           </div>
//           {page === 0 ? <Dashboard /> : Page ? <Page /> : <ListPage name={nav[page]} />}
//         </main>
//       </div>
//     </div>
//   )
// }

import { useState } from 'react'
import './DashboardLayout.css'
import { Sidebar, Topbar, QrCard, FilterBar } from '../../components'
import ListPage from '../../pages/ListPage/ListPage'
import ROLES from '../../roles'

const FILTERED = ['admin', 'manager', 'agent', 'employee', 'exemployee'] // roles whose dashboard shows the filter bar

export default function DashboardLayout({ role, setRole, onLogout }) {
  const { nav, title, Dashboard, qrCard, pages } = ROLES[role]
  const [page, setPage] = useState(0)
  const [open, setOpen] = useState(false)
  const Page = pages?.[nav[page]] // optional custom page (see roles/index.js)
  return (
    <div className="shell">
      {open && <div className="backdrop" onClick={() => setOpen(false)} />}
      <Sidebar nav={nav} page={page} setPage={setPage} open={open} setOpen={setOpen} />
      <div className="main">
        <Topbar role={role} onRoleChange={k => { setRole(k); setPage(0) }} onMenu={() => setOpen(!open)} onLogout={onLogout} />
        <main className="content">
          {page === 0 && qrCard && <QrCard />}
          <div className="page-head">
            <h1>{page === 0 ? title : nav[page]}</h1>
            {!Page && (
              <div className="actions">
                <button className="btn ghost">Export</button>
                {page === 0 && <button className="btn ghost flywire-btn">Pay fees via Flywire</button>}
                {page === 0 && role === 'agent' && <button className="btn">Request Shortlisting</button>}
                {page === 0 && <button className="btn">{role === 'student' ? 'Upload document' : 'Add student'}</button>}
                {page === 0 && ['admin', 'manager', 'employee', 'exemployee'].includes(role) && <button className="btn">Add agent</button>}
              </div>
            )}
          </div>
          {page === 0 && FILTERED.includes(role) && <FilterBar />}
          {page === 0 ? <Dashboard /> : Page ? <Page /> : <ListPage name={nav[page]} />}
        </main>
      </div>
    </div>
  )
}