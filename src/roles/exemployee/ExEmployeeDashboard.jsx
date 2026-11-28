import TopPerformers from '../admin/TopPerformers/TopPerformers'
import { AGENT_GROUPS } from '../../data/agentPerformance'
import { Kpis, Panel, Chart, Alerts, RecentStudents, ContactGrid } from '../../components'
import { REGIONAL_MANAGERS } from '../../data/regionalManagers'
import TaskLists from '../admin/TaskLists/TaskLists'
import '../admin/AdminDashboard.css'
import config from './config'

export default function ExEmployeeDashboard() {
  return (
    <>
      <div className="admin-top">
        <Kpis groups={config.kpiGroups} />
        <TaskLists role="exemployee" />
      </div>

      <TopPerformers title="Agent performance" groups={AGENT_GROUPS} />

      <div className="grid2">
        <Panel title="Applications by month"><Chart /></Panel>
        <Panel title="Needs attention" action="View all"><Alerts /></Panel>
      </div>
      <RecentStudents />
      <ContactGrid title="Contact regional manager" people={REGIONAL_MANAGERS} />
    </>
  )
}