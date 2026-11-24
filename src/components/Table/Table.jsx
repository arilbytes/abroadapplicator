import './Table.css'
const HOT = ['Critical', 'High', 'Blocked', 'Overdue']
export default function Table({ head, rows }) {
  return (
    <div className="tscroll"><table>
      <thead><tr>{head.map(h => <th key={h}>{h}</th>)}</tr></thead>
      <tbody>{rows.map(r => <tr key={r[0]}>{r.map((c, i) => <td key={i}>{HOT.includes(c) ? <span className="pill high">{c}</span> : c}</td>)}</tr>)}</tbody>
    </table></div>
  )
}
