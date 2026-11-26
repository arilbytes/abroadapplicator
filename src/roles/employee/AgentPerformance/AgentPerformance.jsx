import './AgentPerformance.css'
import { Panel, Table } from '../../../components'
import { AGENT_PERF_HEAD, TOP_AGENTS, WORST_AGENTS } from '../../../data/agentPerformance'

const tag = (text, cls) => <span className={'perf ' + cls}>{text}</span>

// One table: top performing agents first, then the lowest performing ones
export default function AgentPerformance() {
  const rows = [
    ...TOP_AGENTS.map(r => [...r, tag('▲ Top', 'up')]),
    ...WORST_AGENTS.map(r => [...r, tag('▼ Needs attention', 'down')]),
  ]
  return (
    <Panel title="Agent performance" action="View all">
      <Table head={AGENT_PERF_HEAD} rows={rows} />
    </Panel>
  )
}