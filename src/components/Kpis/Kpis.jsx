import './Kpis.css'
// Item formats (all cards render at the same size):
//   ['Label','Value','optional note']              simple card (used by every role)
//   { label, split:[['Today','12'],['Week','64']], tone:'alert' }   card with 2-3 side-by-side values
// Pass `items` for a flat grid, or `groups=[{ title, items }]` for titled sections (Founder).
const norm = i => (Array.isArray(i) ? { label: i[0], value: i[1], note: i[2] } : i)

function Card({ item }) {
  const { label, value, note, split, tone } = norm(item)
  return (
    <div className={'kpi' + (tone ? ' ' + tone : '')}>
      <span className="kpi-l">{label}</span>
      {split ? (
        <div className="kpi-split">
          {split.map(([k, v]) => <div key={k}><strong>{v}</strong><span className="muted" title={k}>{k}</span></div>)}
        </div>
      ) : (
        <><strong>{value}</strong><span className="muted small">{note || '\u00A0'}</span></>
      )}
    </div>
  )
}

export default function Kpis({ items, groups }) {
  if (groups) {
    return (
      <div className="kpi-groups">
        {groups.map(g => (
          <section className="kpi-group" key={g.title}>
            <h2>{g.title}</h2>
            <div className="kpis wide">{g.items.map(i => <Card key={norm(i).label} item={i} />)}</div>
          </section>
        ))}
      </div>
    )
  }
  return <div className="kpis">{items.map(i => <Card key={norm(i).label} item={i} />)}</div>
}
