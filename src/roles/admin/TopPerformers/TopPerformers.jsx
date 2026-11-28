// import './TopPerformers.css'
// import { Panel } from '../../../components'
// import { TOP } from '../../../data/topPerformers'

// export default function TopPerformers() {
//   return (
//     <Panel title="Top performing" action="View all">
//       <div className="top-cols">
//         {TOP.map(g => (
//           <div className="top-box" key={g.title}>
//             <h4>{g.title}</h4>
//             <ol>
//               {g.rows.map(([name, sub, val], i) => (
//                 <li key={name}>
//                   <span className={'rank r' + (i + 1)}>{i + 1}</span>
//                   <div className="who"><b>{name}</b><span className="muted small">{sub}</span></div>
//                   <div className="val"><b>{val}</b><span className="muted small">{g.metric}</span></div>
//                 </li>
//               ))}
//             </ol>
//           </div>
//         ))}
//       </div>
//     </Panel>
//   )
// }

// import './TopPerformers.css'
// import { Panel } from '../../../components'
// import { TOP } from '../../../data/topPerformers'

// // show: optional list of box titles, e.g. ['Employees', 'Agents']. Leave it out to show all three.
// export default function TopPerformers({ show }) {
//   const groups = show ? TOP.filter(g => show.includes(g.title)) : TOP
//   return (
//     <Panel title="Top performing" action="View all">
//       <div className="top-cols">
//         {groups.map(g => (
//           <div className="top-box" key={g.title}>
//             <h4>{g.title}</h4>
//             <ol>
//               {g.rows.map(([name, sub, val], i) => (
//                 <li key={name}>
//                   <span className={'rank r' + (i + 1)}>{i + 1}</span>
//                   <div className="who"><b>{name}</b><span className="muted small">{sub}</span></div>
//                   <div className="val"><b>{val}</b><span className="muted small">{g.metric}</span></div>
//                 </li>
//               ))}
//             </ol>
//           </div>
//         ))}
//       </div>
//     </Panel>
//   )
// }

// import './TopPerformers.css'
// import { Panel } from '../../../components'
// import { TOP } from '../../../data/topPerformers'

// // show:   optional list of box titles from data/topPerformers.js, e.g. ['Employees', 'Agents']
// // groups: optional custom boxes [{ title, metric, tone?, rows: [[name, sub, value], ...] }] (tone: 'low' for a "worst" box)
// // title:  panel heading
// export default function TopPerformers({ show, groups: custom, title = 'Top performing' }) {
//   const groups = custom || (show ? TOP.filter(g => show.includes(g.title)) : TOP)
//   return (
//     <Panel title={title} action="View all">
//       <div className="top-cols">
//         {groups.map(g => (
//           <div className={'top-box' + (g.tone ? ' ' + g.tone : '')} key={g.title}>
//             <h4>{g.title}</h4>
//             <ol>
//               {g.rows.map(([name, sub, val], i) => (
//                 <li key={name}>
//                   <span className={'rank r' + (i + 1)}>{i + 1}</span>
//                   <div className="who"><b>{name}</b><span className="muted small">{sub}</span></div>
//                   <div className="val"><b>{val}</b><span className="muted small">{g.metric}</span></div>
//                 </li>
//               ))}
//             </ol>
//           </div>
//         ))}
//       </div>
//     </Panel>
//   )
// }

import './TopPerformers.css'
import { Panel } from '../../../components'
import { TOP } from '../../../data/topPerformers'
import { useFilters } from '../../../context/FilterContext'

// show:   optional list of box titles from data/topPerformers.js, e.g. ['Employees', 'Agents']
// groups: optional custom boxes [{ title, metric, tone?, rows: [[name, sub, value], ...] }] (tone: 'low' for a "worst" box)
// title:  panel heading
// The dashboard Office filter keeps only rows whose second value starts with the chosen office.
export default function TopPerformers({ show, groups: custom, title = 'Top performing' }) {
  const { filters } = useFilters()
  const groups = custom || (show ? TOP.filter(g => show.includes(g.title)) : TOP)
  const inOffice = r => filters.office === 'All' || r[1].startsWith(filters.office)
  return (
    <Panel title={title} action="View all">
      <div className="top-cols">
        {groups.map(g => {
          const rows = g.rows.filter(inOffice)
          return (
            <div className={'top-box' + (g.tone ? ' ' + g.tone : '')} key={g.title}>
              <h4>{g.title}</h4>
              {rows.length ? (
                <ol>
                  {rows.map(([name, sub, val], i) => (
                    <li key={name}>
                      <span className={'rank r' + (i + 1)}>{i + 1}</span>
                      <div className="who"><b>{name}</b><span className="muted small">{sub}</span></div>
                      <div className="val"><b>{val}</b><span className="muted small">{g.metric}</span></div>
                    </li>
                  ))}
                </ol>
              ) : <p className="muted small">No one from this office.</p>}
            </div>
          )
        })}
      </div>
    </Panel>
  )
}
