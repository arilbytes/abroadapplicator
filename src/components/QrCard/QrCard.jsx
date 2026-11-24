import { useState } from 'react'
import './QrCard.css'
import qr from '../../assets/registration-qr.png'
import { STUDENT_SIGNUP_URL } from '../../data/links'

const Icon = ({ d }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
)
const COPY = 'M9 9h11v11H9z M5 15H4V4h11v1'
const PRINT = 'M6 9V3h12v6 M6 18H4v-7h16v7h-2 M7 14h10v7H7z'

export default function QrCard() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(STUDENT_SIGNUP_URL) } catch { return }
    setCopied(true); setTimeout(() => setCopied(false), 1800)
  }
  const print = () => {
    const w = window.open('', '_blank', 'width=480,height=600')
    if (!w) return
    const src = new URL(qr, window.location.href).href
    w.document.write(`<title>Student Registration QR Code</title><body style="font-family:sans-serif;text-align:center;padding:40px"><h2>Student Registration QR Code</h2><img src="${src}" width="320" onload="print()"/><p style="font-size:12px;word-break:break-all">${STUDENT_SIGNUP_URL}</p></body>`)
    w.document.close()
  }
  return (
    <section className="qr-card" aria-label="Student registration QR code">
      <img className="qr-img" src={qr} alt="QR code for student registration" />
      <h2 className="qr-title">Student Registration QR Code</h2>
      <div className="qr-actions">
        <button className="btn ghost" onClick={copy}>{copied ? 'Link copied' : 'Copy Link'} <Icon d={COPY} /></button>
        <button className="btn" onClick={print}>Print QR <Icon d={PRINT} /></button>
      </div>
    </section>
  )
}
