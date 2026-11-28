import Panel from '../Panel/Panel'
import Table from '../Table/Table'
import { STUDENTS, STU_HEAD } from '../../data/mock'
import { useFilters } from '../../context/FilterContext'

const countryOf = s => s[2].split(' · ')[0] // "UK · MSc Computer Science" -> "UK"

// Recent students table that follows the dashboard Country and Stage filters
export default function RecentStudents() {
  const { filters } = useFilters()
  const rows = STUDENTS.filter(s =>
    (filters.country === 'All' || countryOf(s) === filters.country) &&
    (filters.stage === 'All' || s[3] === filters.stage))
  return (
    <Panel title="Recent students" action="View all">
      {rows.length ? <Table head={STU_HEAD} rows={rows} /> : <p className="muted small">No students match these filters.</p>}
    </Panel>
  )
}