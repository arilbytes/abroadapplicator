// import { Kpis, Panel, Chart, Alerts, Table } from '../../components'
// import { STUDENTS, TASKS, STU_HEAD, TSK_HEAD } from '../../data/mock'
// import config from './config'
// import TopPerformers from '../admin/TopPerformers/TopPerformers'
// import { AGENT_GROUPS } from '../../data/agentPerformance'
// import TaskLists from '../admin/TaskLists/TaskLists'
// import Pipeline from './Pipeline'
// export default function AgentDashboard() {
//   return (
//     <>
//     <div className='admin-top'>
//       <Kpis groups={config.kpiGroups} />
//       <TaskLists role="employee" />
//     </div>
//       {/* <Panel title="Student pipeline" action="Open pipeline"><Pipeline /></Panel> */}
//         <TopPerformers title="Employee Performance" groups={AGENT_GROUPS} />
//       <div className="grid2">
//         <Panel title="Applications by month"><Chart /></Panel>
//         <Panel title="Needs attention" action="View all"><Alerts /></Panel>
//       </div>
//       <RecentStudents />
//     </>
//   )
// }

import { Kpis, Panel, Chart, Alerts, RecentStudents } from '../../components'
import config from './config'
import TopPerformers from '../admin/TopPerformers/TopPerformers'
import { AGENT_GROUPS } from '../../data/agentPerformance'
import TaskLists from '../admin/TaskLists/TaskLists'
import '../admin/AdminDashboard.css'

export default function AgentDashboard() {
  return (
    <>
      <div className="admin-top">
        <Kpis groups={config.kpiGroups} />
        <TaskLists role="employee" />
      </div>
      <TopPerformers title="Employee Performance" groups={AGENT_GROUPS} />
      <div className="grid2">
        <Panel title="Applications by month"><Chart /></Panel>
        <Panel title="Needs attention" action="View all"><Alerts /></Panel>
      </div>
      <RecentStudents />
    </>
  )
}