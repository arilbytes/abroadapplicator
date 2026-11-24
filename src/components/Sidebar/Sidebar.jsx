import './Sidebar.css'
import Logo from '../Logo/Logo'
export default function Sidebar({ nav, page, setPage, open, setOpen, onLogout }) {
  return (
    <aside className={'side' + (open ? ' open' : '')}>
      <Logo light />
      <nav>
        {nav.map((n, i) => (
          <button key={n} className={i === page ? 'active' : ''} onClick={() => { setPage(i); setOpen(false) }}>{n}</button>
        ))}
      </nav>
      <button className="logout" onClick={onLogout}>Sign out</button>
    </aside>
  )
}
