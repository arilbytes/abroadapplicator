import { Panel, Table } from '../../components'
import { STUDENTS, TASKS, STU_HEAD, TSK_HEAD } from '../../data/mock'
// Placeholder list page shared by every non-dashboard menu item. Replace per module as you build them.
export default function ListPage({ name }) {
  const tasky = /task|verification|queue|escalat|quality/i.test(name)
  return (
    <Panel title={name} action="+ Add new">
      {tasky ? <Table head={TSK_HEAD} rows={TASKS} /> : <Table head={STU_HEAD} rows={STUDENTS} />}
    </Panel>
  )
}
