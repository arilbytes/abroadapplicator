import { createContext, useContext, useEffect, useState } from 'react'
import ROLES from '../roles'
import { THEMES, DEFAULT_THEME } from '../data/themes'

// Brand = { theme, logo } stored per role (e.g. one for "admin", one for "agent").
// Only roles with `brandable: true` in their config.js can change it. Everyone else sees the JCG default.
// Storage is the browser's localStorage for now; swap load()/save() for API calls when the backend exists.
const KEY = 'jcg-brand-v1'
const BrandContext = createContext(null)
const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {} } catch { return {} } }
const save = v => { try { localStorage.setItem(KEY, JSON.stringify(v)); return true } catch { return false } }
const cssVar = k => '--' + k.replace(/([A-Z0-9])/g, '-$1').toLowerCase() // navy2 -> --navy-2

export function BrandProvider({ role, children }) {
  const [brands, setBrands] = useState(load)
  const [error, setError] = useState('')
  const canCustomize = !!ROLES[role]?.brandable
  const brand = (canCustomize && brands[role]) || {}
  const themeId = brand.theme || DEFAULT_THEME
  const logo = brand.logo || null

  useEffect(() => {
    const theme = THEMES.find(t => t.id === themeId) || THEMES[0]
    Object.entries(theme.vars).forEach(([k, v]) => document.documentElement.style.setProperty(cssVar(k), v))
  }, [themeId])

  const update = patch => {
    const next = { ...brands, [role]: { ...brands[role], ...patch } }
    setBrands(next)
    setError(save(next) ? '' : 'Could not save. The logo may be too large for browser storage.')
  }

  const value = {
    canCustomize, themeId, logo, error,
    setTheme: id => update({ theme: id }),
    setLogo: data => update({ logo: data }),
    reset: () => update({ theme: null, logo: null }),
  }
  return <BrandContext.Provider value={value}>{children}</BrandContext.Provider>
}

export const useBrand = () => useContext(BrandContext)
