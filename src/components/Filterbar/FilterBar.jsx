import './FilterBar.css'
import { useFilters } from '../../context/FilterContext'
import { FILTER_OPTIONS } from '../../data/filters'

export default function FilterBar() {
  const { filters, set, reset, active } = useFilters()
  return (
    <div className="filter-bar" role="group" aria-label="Dashboard filters">
      <span className="filter-title"></span>
      {FILTER_OPTIONS.map(f => (
        <label key={f.key}>{f.label}
          <select value={filters[f.key]} onChange={e => set(f.key, e.target.value)}>
            <option value="All">All {f.plural}</option>
            {f.options.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>
      ))}
      {active && <button className="link" onClick={reset}>Reset</button>}
      <span className="muted small filter-note">Applies to Recent students and Top performing</span>
    </div>
  )
}