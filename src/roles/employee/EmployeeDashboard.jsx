// import { Kpis, Panel, Chart, Alerts, Table } from '../../components'
// import { STUDENTS, TASKS, STU_HEAD, TSK_HEAD } from '../../data/mock'
// import config from './config'

// export default function EmployeeDashboard() {
//   return (
//     <>      
//       <Kpis items={config.kpis} />
//       <Kpis groups={config.kpiGroups}></Kpis>

//       <div className="grid2">
//         <Panel title="Tasks completed by week"><Chart /></Panel>
//         <Panel title="Needs attention" action="View all"><Alerts /></Panel>
//       </div>
//       <Panel title="My tasks" action="View all"><Table head={TSK_HEAD} rows={TASKS} /></Panel>
//     </>
//   )
// }
// import { Kpis, Panel, Chart, Alerts, Table } from '../../components'
// import { TASKS, TSK_HEAD } from '../../data/mock'
// import config from './config'

// export default function EmployeeDashboard() {
//   return (
//     <>
//       {/* Quick summary cards */}
//       {/* <Kpis items={config.kpis} /> */}

//       {/* Grouped KPI sections: Applications + Revenue & outstanding */}
//       <Kpis groups={config.kpiGroups} />

//       <div className="grid2">
//         <Panel title="Tasks completed by week">
//           <Chart />
//         </Panel>
//         <Panel title="Needs attention" action="View all">
//           <Alerts />
//         </Panel>
//       </div>

//       <Panel title="My tasks" action="View all">
//         <Table head={TSK_HEAD} rows={TASKS} />
//       </Panel>
//     </>
//   )
// }

// import { Kpis, Panel, Chart, Alerts, Table } from '../../components'
// import { REGIONAL_MANAGERS } from '../../data/regionalManagers'
// import { STUDENTS, TASKS, STU_HEAD, TSK_HEAD } from '../../data/mock'
// import TaskLists from '../admin/TaskLists/TaskLists'
// import '../admin/AdminDashboard.css'
// import config from './config'

// export default function EmployeeDashboard() {
//   return (
//     <>
//       <Kpis groups={config.kpiGroups} />
//       <TaskLists role="employee" row showComplaints={false} />

//       <div className="grid2">
//         <Panel title="Tasks completed by week"><Chart /></Panel>
//         <Panel title="Needs attention" action="View all"><Alerts /></Panel>
//       </div>
//       <Panel title="My tasks" action="View all"><Table head={TSK_HEAD} rows={TASKS} /></Panel>
//       import { REGIONAL_MANAGERS } from '../../data/regionalManagers'      
//    </>
//   )
// }

import { Kpis, Panel, Chart, Alerts, Table, ContactGrid } from '../../components'
import { REGIONAL_MANAGERS } from '../../data/regionalManagers'
import { TASKS, TSK_HEAD } from '../../data/mock'
import TaskLists from '../admin/TaskLists/TaskLists'
import '../admin/AdminDashboard.css'
import config from './config'

export default function EmployeeDashboard() {
  return (
    <>
      <Kpis groups={config.kpiGroups} />
      <TaskLists role="employee" row showComplaints={false} />

      <div className="grid2">
        <Panel title="Tasks completed by week"><Chart /></Panel>
        <Panel title="Needs attention" action="View all"><Alerts /></Panel>
      </div>
      <Panel title="My tasks" action="View all"><Table head={TSK_HEAD} rows={TASKS} /></Panel>

      <ContactGrid title="Contact for escallation : " people={REGIONAL_MANAGERS} />
    </>
  )
}