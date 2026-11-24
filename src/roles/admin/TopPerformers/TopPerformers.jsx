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

import './TopPerformers.css'
import { Panel } from '../../../components'
import { TOP } from '../../../data/topPerformers'

// show: optional list of box titles, e.g. ['Employees', 'Agents']. Leave it out to show all three.
export default function TopPerformers({ show }) {
  const groups = show ? TOP.filter(g => show.includes(g.title)) : TOP
  return (
    <Panel title="Top performing" action="View all">
      <div className="top-cols">
        {groups.map(g => (
          <div className="top-box" key={g.title}>
            <h4>{g.title}</h4>
            <ol>
              {g.rows.map(([name, sub, val], i) => (
                <li key={name}>
                  <span className={'rank r' + (i + 1)}>{i + 1}</span>
                  <div className="who"><b>{name}</b><span className="muted small">{sub}</span></div>
                  <div className="val"><b>{val}</b><span className="muted small">{g.metric}</span></div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Panel>
  )
}