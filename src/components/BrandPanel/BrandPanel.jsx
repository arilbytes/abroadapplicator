import { useEffect, useRef, useState } from 'react'
import './BrandPanel.css'
import { useBrand } from '../../context/BrandContext'
import { THEMES } from '../../data/themes'

// Reads an image file, shrinks it to max 480px wide (keeps transparency) so it fits in browser storage.
const readLogo = file => new Promise((resolve, reject) => {
  if (!file.type.startsWith('image/')) return reject(new Error('Please choose an image file (PNG, JPG, WebP or SVG).'))
  if (file.size > 3 * 1024 * 1024) return reject(new Error('That image is larger than 3 MB.'))
  const fr = new FileReader()
  fr.onerror = () => reject(new Error('Could not read that file.'))
  fr.onload = () => {
    if (file.type === 'image/svg+xml') return resolve(fr.result)
    const img = new Image()
    img.onerror = () => reject(new Error('Could not read that image.'))
    img.onload = () => {
      const s = Math.min(1, 480 / img.width)
      const c = document.createElement('canvas')
      c.width = Math.round(img.width * s); c.height = Math.round(img.height * s)
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height)
      resolve(c.toDataURL('image/png'))
    }
    img.src = fr.result
  }
  fr.readAsDataURL(file)
})

export default function BrandPanel() {
  const { canCustomize, themeId, logo, error, setTheme, setLogo, reset } = useBrand()
  const [open, setOpen] = useState(false)
  const [msg, setMsg] = useState('')
  const wrap = useRef(null)
  const file = useRef(null)

  useEffect(() => {
    if (!open) return
    const down = e => { if (!wrap.current?.contains(e.target)) setOpen(false) }
    const key = e => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', down); document.addEventListener('keydown', key)
    return () => { document.removeEventListener('mousedown', down); document.removeEventListener('keydown', key) }
  }, [open])

  if (!canCustomize) return null

  const onFile = async e => {
    const f = e.target.files[0]; e.target.value = ''
    if (!f) return
    try { setLogo(await readLogo(f)); setMsg('') } catch (err) { setMsg(err.message) }
  }

  return (
    <div className="brand-wrap" ref={wrap}>
      <button className="btn ghost brand-btn" aria-haspopup="dialog" aria-expanded={open} onClick={() => setOpen(!open)}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0" />
      <circle cx="16" cy="6" r="2" /><circle cx="10" cy="12" r="2" /><circle cx="18" cy="18" r="2" />
      </svg>
      <span className="brand-label">Theme settings</span>
      </button>
      {open && (
        <div className="brand-pop" role="dialog" aria-label="Brand settings">
          <h4>Your logo</h4>
          <div className="brand-logo">
            <div className="brand-prev">{logo ? <img src={logo} alt="Your logo" /> : <span className="muted small">JCG default logo</span>}</div>
            <div className="brand-btns">
              <button className="btn ghost sm" onClick={() => file.current.click()}>Upload logo</button>
              {logo && <button className="link" onClick={() => setLogo(null)}>Remove</button>}
              <input ref={file} type="file" accept="image/*" hidden onChange={onFile} />
            </div>
          </div>
          <h4>Theme</h4>
          <div className="brand-themes" role="radiogroup" aria-label="Theme">
            {THEMES.map(t => (
              <button key={t.id} role="radio" aria-checked={t.id === themeId} className={'theme' + (t.id === themeId ? ' on' : '')} onClick={() => setTheme(t.id)}>
                <span className="dots">{[t.vars.navy, t.vars.primary, t.vars.accent, t.vars.bg].map(c => <i key={c} style={{ background: c }} />)}</span>
                <span className="theme-text"><b>{t.name}</b><span className="muted small">{t.tagline}</span></span>
              </button>
            ))}
          </div>
          {(msg || error) && <p className="brand-err" role="alert">{msg || error}</p>}
          <button className="link" onClick={() => { reset(); setMsg('') }}>Reset to JCG default</button>
        </div>
      )}
    </div>
  )
}
