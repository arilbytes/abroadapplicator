import { createContext, useContext, useState } from 'react'

// Dashboard filters shared by every view. 'All' means "no filter".
const DEFAULTS = { office: 'All', country: 'All', stage: 'All' }
const FilterContext = createContext(null)

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState(DEFAULTS)
  const set = (key, value) => setFilters(f => ({ ...f, [key]: value }))
  const reset = () => setFilters(DEFAULTS)
  const active = Object.values(filters).some(v => v !== 'All')
  return <FilterContext.Provider value={{ filters, set, reset, active }}>{children}</FilterContext.Provider>
}

export const useFilters = () => useContext(FilterContext)