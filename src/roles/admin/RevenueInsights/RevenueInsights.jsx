import './RevenueInsights.css'
import { Panel } from '../../../components'
import { REVENUE_MONTHLY } from '../../../data/founderDashboard'
import { fmtMoney } from '../../../utils/format'

// All figures are calculated from REVENUE_MONTHLY, so they always match the graph.
export default function RevenueInsights() {
  const v = REVENUE_MONTHLY.map(r => r[1])
  const name = i => REVENUE_MONTHLY[i][2]
  const total = v.reduce((a, b) => a + b, 0)
  const best = v.indexOf(Math.max(...v)), low = v.indexOf(Math.min(...v))
  const change = ((v.at(-1) - v.at(-2)) / v.at(-2)) * 100
  const upMonths = v.filter((x, i) => i > 0 && x > v[i - 1]).length
  const since = Math.round(((v.at(-1) - v[0]) / v[0]) * 100)
  return (
    <Panel title="Revenue insights">
      <ul className="ins">
        <li><span>Last 12 months</span><b>{fmtMoney(total)}</b></li>
        <li><span>Monthly average</span><b>{fmtMoney(total / v.length)}</b></li>
        <li><span>Best month</span><b>{name(best)} · {fmtMoney(v[best])}</b></li>
        <li><span>Lowest month</span><b>{name(low)} · {fmtMoney(v[low])}</b></li>
        <li><span>Latest vs previous month</span><b className={change >= 0 ? 'up' : 'down'}>{change >= 0 ? '▲' : '▼'} {Math.abs(change).toFixed(1)}%</b></li>
      </ul>
      <p className="ins-note">Revenue is up {since}% since {name(0)}, and {upMonths} of {v.length - 1} months beat the month before.</p>
    </Panel>
  )
}
