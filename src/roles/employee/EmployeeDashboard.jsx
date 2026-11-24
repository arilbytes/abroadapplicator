import { Kpis, Panel, Chart, Alerts, Table } from '../../components'
import { STUDENTS, TASKS, STU_HEAD, TSK_HEAD } from '../../data/mock'
import config from './config'

export default function EmployeeDashboard() {
  return (
    <>
      <Kpis items={config.kpis} />

      <div className="grid2">
        <Panel title="Tasks completed by week"><Chart /></Panel>
        <Panel title="Needs attention" action="View all"><Alerts /></Panel>
      </div>
      <Panel title="My tasks" action="View all"><Table head={TSK_HEAD} rows={TASKS} /></Panel>
    </>
  )
}
