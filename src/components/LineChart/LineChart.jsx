import { useEffect, useId, useRef, useState } from 'react'
import './LineChart.css'

// data: [[shortLabel, value, longLabel?], ...]   format: value -> string
export default function LineChart({ data, format = v => v, height = 260, label = 'Line chart' }) {
  const ref = useRef(null)
  const gid = useId().replace(/:/g, '')
  const [w, setW] = useState(600)
  useEffect(() => {
    const ro = new ResizeObserver(([e]) => setW(Math.max(280, Math.round(e.contentRect.width))))
    ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])

  const L = 52, R = 14, T = 14, B = 30
  const max = Math.max(...data.map(d => d[1]))
  const step = max > 50 ? 10 : 5
  const top = Math.ceil(max / step) * step
  const x = i => L + (i * (w - L - R)) / (data.length - 1)
  const y = v => T + (1 - v / top) * (height - T - B)
  const pts = data.map((d, i) => [x(i), y(d[1])])
  const line = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ')
  const area = `${line} L${pts.at(-1)[0]} ${height - B} L${pts[0][0]} ${height - B} Z`
  const ticks = Array.from({ length: top / step + 1 }, (_, k) => k * step)
  const skip = w < 480 ? 2 : 1

  return (
    <div ref={ref} className="linechart">
      <svg width={w} height={height} role="img" aria-label={label}>
        <defs><linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--primary)', stopOpacity: 0.22 }} />
          <stop offset="1" style={{ stopColor: 'var(--primary)', stopOpacity: 0 }} />
        </linearGradient></defs>
        {ticks.map(t => (
          <g key={t}><line className="lc-grid" x1={L} x2={w - R} y1={y(t)} y2={y(t)} /><text x={L - 8} y={y(t) + 4} textAnchor="end">{format(t)}</text></g>
        ))}
        <path d={area} fill={`url(#${gid})`} />
        <path className="lc-line" d={line} />
        {pts.map((p, i) => (
          <g key={i}>
            <circle className={'lc-dot' + (i === pts.length - 1 ? ' last' : '')} cx={p[0]} cy={p[1]} r={i === pts.length - 1 ? 5 : 3.5} />
            <circle cx={p[0]} cy={p[1]} r="12" fill="transparent"><title>{`${data[i][2] || data[i][0]}: ${format(data[i][1])}`}</title></circle>
            {i % skip === 0 && <text x={p[0]} y={height - 8} textAnchor="middle">{data[i][0]}</text>}
          </g>
        ))}
      </svg>
    </div>
  )
}
