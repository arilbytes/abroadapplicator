// import './AdminDashboard.css'
// import { Kpis, Panel, Chart, Alerts, Table, LineChart, ColumnChart, ContactGrid } from '../../components'
// import TopPerformers from './TopPerformers/TopPerformers'
// import TaskLists from './TaskLists/TaskLists'
// import RevenueInsights from './RevenueInsights/RevenueInsights'
// import { STUDENTS, STU_HEAD } from '../../data/mock'
// import { REVENUE_MONTHLY, PRODUCTS } from '../../data/founderDashboard'
// import { REGIONAL_MANAGERS } from '../../data/regionalManagers'
// import { fmtMoney } from '../../utils/format'
// import config from './config'
// import FeatureCards from '../../components/FeatureCards/FeatureCards'
// import { FEATURE_CARDS } from '../../data/featureCards'

// export default function AdminDashboard() {
//   return (
//     <>
//       <div className="admin-top">
//         <Kpis groups={config.kpiGroups} />
//         <TaskLists role="admin" />
//       </div>
//       <TopPerformers />
//       <div className="grid2">
//         <Panel title="Applications by month"><Chart /></Panel>
//         <Panel title="Needs attention" action="View all"><Alerts /></Panel>
//       </div>
//       <div className="rev-row">
//         <Panel title="Revenue by month"><LineChart data={REVENUE_MONTHLY} format={fmtMoney} label="Revenue by month, last 12 months" /></Panel>
//         <RevenueInsights />
//       </div>
//       <Panel title="Product performance"><ColumnChart data={PRODUCTS} format={fmtMoney} label="Revenue by product, last 12 months" /></Panel>    
//       <FeatureCards items={FEATURE_CARDS} />
//       <RecentStudents />
//       {/* <ContactGrid title="Contact regional manager" people={REGIONAL_MANAGERS} /> */}
//     </>
//   )
// }
import './AdminDashboard.css'
import { Kpis, Panel, Chart, Alerts, RecentStudents, LineChart, ColumnChart } from '../../components'
import TopPerformers from './TopPerformers/TopPerformers'
import TaskLists from './TaskLists/TaskLists'
import RevenueInsights from './RevenueInsights/RevenueInsights'
import { REVENUE_MONTHLY, PRODUCTS } from '../../data/founderDashboard'
import { fmtMoney } from '../../utils/format'
import config from './config'
import FeatureCards from '../../components/FeatureCards/FeatureCards'
import { FEATURE_CARDS } from '../../data/featureCards'

export default function AdminDashboard() {
  return (
    <>
      <div className="admin-top">
        <Kpis groups={config.kpiGroups} />
        <TaskLists role="admin" />
      </div>
      <TopPerformers />
      <div className="grid2">
        <Panel title="Applications by month"><Chart /></Panel>
        <Panel title="Needs attention" action="View all"><Alerts /></Panel>
      </div>
      <div className="rev-row">
        <Panel title="Revenue by month"><LineChart data={REVENUE_MONTHLY} format={fmtMoney} label="Revenue by month, last 12 months" /></Panel>
        <RevenueInsights />
      </div>
      <Panel title="Product performance"><ColumnChart data={PRODUCTS} format={fmtMoney} label="Revenue by product, last 12 months" /></Panel>
      <FeatureCards items={FEATURE_CARDS} />
      <RecentStudents />
      {/* <ContactGrid title="Contact regional manager" people={REGIONAL_MANAGERS} /> */}
    </>
  )
}