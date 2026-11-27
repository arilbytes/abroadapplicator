import { Kpis, Panel, Chart, Alerts, Table } from '../../components'
import { STUDENTS, TASKS, STU_HEAD, TSK_HEAD } from '../../data/mock'
import config from './config'
import TaskLists from '../admin/TaskLists/TaskLists'
import Pipeline from './Pipeline'
export default function AgentDashboard() {
  return (
    <>
    <div className='admin-top'>
      <Kpis groups={config.kpiGroups} />
      <TaskLists role="employee" />
    </div>
      
      {/* <Panel title="Student pipeline" action="Open pipeline"><Pipeline /></Panel> */}
      <div className="grid2">
        <Panel title="Applications by month"><Chart /></Panel>
        <Panel title="Needs attention" action="View all"><Alerts /></Panel>
      </div>
      <Panel title="Recent students" action="View all"><Table head={STU_HEAD} rows={STUDENTS} /></Panel>
    </>
  )
}
