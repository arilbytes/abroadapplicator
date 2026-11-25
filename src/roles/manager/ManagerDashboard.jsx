// import { Kpis, Panel, Chart, Alerts, Table } from '../../components'
// import { STUDENTS, TASKS, STU_HEAD, TSK_HEAD } from '../../data/mock'
// import config from './config'

// export default function ManagerDashboard() {
//   return (
//     <>
//       <Kpis items={config.kpis} />

//       <div className="grid2">
//         <Panel title="Applications by month"><Chart /></Panel>
//         <Panel title="Needs attention" action="View all"><Alerts /></Panel>
//       </div>
//       <Panel title="Recent students" action="View all"><Table head={STU_HEAD} rows={STUDENTS} /></Panel>
//     </>
//   )
// }
import '../admin/AdminDashboard.css' // reuses the 3/4 + 1/4 layout (.admin-top)
import { Kpis, Panel, Chart, Alerts, Table } from '../../components'
import TopPerformers from '../admin/TopPerformers/TopPerformers'
import TaskLists from '../admin/TaskLists/TaskLists'
import { STUDENTS, STU_HEAD } from '../../data/mock'
import config from './config'

export default function ManagerDashboard() {
  return (
    <>
      <div className="admin-top">
        <Kpis groups={config.kpiGroups} />
        <TaskLists role="manager" />
      </div>
      <TopPerformers show={['Employees', 'Agents']} />
      <div className="grid2">
        <Panel title="Applications by month"><Chart /></Panel>
        <Panel title="Needs attention" action="View all"><Alerts /></Panel>
      </div>
      <Panel title="Recent students" action="View all"><Table head={STU_HEAD} rows={STUDENTS} /></Panel>
    </>
  )
}