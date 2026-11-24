import './Panel.css'
export default function Panel({ title, action, children }) {
  return (
    <section className="panel">
      <header><h3>{title}</h3>{action && <button className="link">{action}</button>}</header>
      {children}
    </section>
  )
}
