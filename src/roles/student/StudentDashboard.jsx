import { Kpis, Panel, Alerts, Table } from '../../components'
import Journey from './Journey'
import config from './config'
const APPS = [['UCL', 'MSc Computer Science', 'Submitted'], ['Univ. of Manchester', 'MSc Computer Science', 'Offer received'], ['Univ. of Leeds', 'MSc Data Science', 'Awaiting documents']]
export default function StudentDashboard() {
  return (
    <>
      <Kpis items={config.kpis} />
      <Panel title="Application journey"><Journey /></Panel>
      <div className="grid2">
        <Panel title="What to do next"><Alerts /></Panel>
        <Panel title="Applications"><Table head={['University', 'Course', 'Status']} rows={APPS} /></Panel>
      </div>
    </>
  )
}
