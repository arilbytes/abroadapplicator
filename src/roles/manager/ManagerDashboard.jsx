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
// import { contactsFor } from '../../data/regionalManagers'
// import TopPerformers from '../admin/TopPerformers/TopPerformers'
// import { AGENT_GROUPS } from '../../data/agentPerformance'
// import { Kpis, Panel, Chart, Alerts, Table, ContactGrid } from '../../components'
// import { REGIONAL_MANAGERS } from '../../data/regionalManagers'
// import { STUDENTS, STU_HEAD } from '../../data/mock'
// import TaskLists from '../admin/TaskLists/TaskLists'
// import '../admin/AdminDashboard.css'
// import config from './config'

// export default function EmployeeDashboard() {
//   return (
//     <>
//       <div className="admin-top">
//         <Kpis groups={config.kpiGroups} />
//         <TaskLists role="employee" />
//       </div>

//       <TopPerformers title="Agent performance" groups={AGENT_GROUPS} />

//       <div className="grid2">
//         <Panel title="Applications by month"><Chart /></Panel>
//         <Panel title="Needs attention" action="View all"><Alerts /></Panel>
//       </div>
//       <RecentStudents />
//       <ContactGrid title="Contact regional manager" people={contactsFor('manager')} />
//     </>
//   )
// }

import { contactsFor } from '../../data/regionalManagers'
import TopPerformers from '../admin/TopPerformers/TopPerformers'
import { AGENT_GROUPS } from '../../data/agentPerformance'
import { Kpis, Panel, Chart, Alerts, RecentStudents, ContactGrid } from '../../components'
import TaskLists from '../admin/TaskLists/TaskLists'
import '../admin/AdminDashboard.css'
import config from './config'

export default function ManagerDashboard() {
  return (
    <>
      <div className="admin-top">
        <Kpis groups={config.kpiGroups} />
        <TaskLists role="manager" />
      </div>

      <TopPerformers title="Agent performance" groups={AGENT_GROUPS} />

      <div className="grid2">
        <Panel title="Applications by month"><Chart /></Panel>
        <Panel title="Needs attention" action="View all"><Alerts /></Panel>
      </div>
      <RecentStudents />
      <ContactGrid title="Contact regional manager" people={contactsFor('manager')} />
    </>
  )
}