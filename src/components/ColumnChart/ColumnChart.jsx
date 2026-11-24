import { useEffect, useRef, useState } from 'react'
import './ColumnChart.css'

// Vertical column ("building") chart. data: [[label, value], ...]  (sorted high to low, top column highlighted)
const wrap = s => { const w = s.split(' '); if (w.length < 2) return [s]; const k = Math.ceil(w.length / 2); return [w.slice(0, k).join(' '), w.slice(k).join(' ')] }

export default function ColumnChart({ data, format = v => v, height = 300, label = 'Column chart' }) {
  const ref = useRef(null)
  const [cw, setCw] = useState(600)
  useEffect(() => {
    const ro = new ResizeObserver(([e]) => setCw(Math.round(e.contentRect.width)))
    ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])

  const rows = [...data].sort((a, b) => b[1] - a[1])
  const total = rows.reduce((s, r) => s + r[1], 0)
  const w = Math.max(cw, 560) // narrower screens scroll sideways instead of squashing the columns
  const L = 58, R = 12, T = 30, B = 48
  const max = rows[0][1]
  const step = [1, 2, 5, 10, 20, 25, 50, 100].find(s => Math.ceil(max / s) <= 5)
  const top = Math.ceil(max / step) * step
  const y = v => T + (1 - v / top) * (height - T - B)
  const band = (w - L - R) / rows.length
  const bw = Math.min(64, band * 0.62)
  const ticks = Array.from({ length: top / step + 1 }, (_, k) => k * step)

  return (
    <div ref={ref} className="colchart">
      <svg width={w} height={height} role="img" aria-label={label}>
        {ticks.map(t => (
          <g key={t}><line className="cc-grid" x1={L} x2={w - R} y1={y(t)} y2={y(t)} /><text x={L - 8} y={y(t) + 4} textAnchor="end">{format(t)}</text></g>
        ))}
        {rows.map(([name, v], i) => {
          const cx = L + i * band + band / 2
          return (
            <g key={name}>
              <rect className={'cc-bar' + (i === 0 ? ' top' : '')} x={cx - bw / 2} y={y(v)} width={bw} height={y(0) - y(v)} rx="2">
                <title>{`${name}: ${format(v)} (${Math.round((v / total) * 100)}% of total)`}</title>
              </rect>
              <text className="cc-val" x={cx} y={y(v) - 8} textAnchor="middle">{format(v)}</text>
              {wrap(name).map((line, k) => <text key={k} x={cx} y={height - B + 18 + k * 14} textAnchor="middle">{line}</text>)}
            </g>
          )
        })}
      </svg>
    </div>
  )
}
