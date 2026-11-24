import { useState } from 'react'
import { BrandProvider } from './context/BrandContext'
import Login from './pages/Login/Login'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'
export default function App() {
  const [role, setRole] = useState(null)
  return (
    <BrandProvider role={role}>
      {role ? <DashboardLayout role={role} setRole={setRole} onLogout={() => setRole(null)} /> : <Login onLogin={setRole} />}
    </BrandProvider>
  )
}
