// import { useState } from 'react'
// import { BrandProvider } from './context/BrandContext'
// import Login from './pages/Login/Login'
// import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'
// export default function App() {
//   const [role, setRole] = useState(null)
//   return (
//     <BrandProvider role={role}>
//       {role ? <DashboardLayout role={role} setRole={setRole} onLogout={() => setRole(null)} /> : <Login onLogin={setRole} />}
//     </BrandProvider>
//   )
// }
// import { useState } from 'react'
// import { BrandProvider } from './context/BrandContext'
// import { TasksProvider } from './context/TasksContext'
// import Login from './pages/Login/Login'
// import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'
// export default function App() {
//   const [role, setRole] = useState(null)
//   return (
//     <BrandProvider role={role}>
//       <TasksProvider>
//         {role ? <DashboardLayout role={role} setRole={setRole} onLogout={() => setRole(null)} /> : <Login onLogin={setRole} />}
//       </TasksProvider>
//     </BrandProvider>
//   )
// }

import { useState } from 'react'
import { BrandProvider } from './context/BrandContext'
import { TasksProvider } from './context/TasksContext'
import { FilterProvider } from './context/FilterContext'
import Login from './pages/Login/Login'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'
export default function App() {
  const [role, setRole] = useState(null)
  return (
    <BrandProvider role={role}>
      <FilterProvider>
        <TasksProvider>
          {role ? <DashboardLayout role={role} setRole={setRole} onLogout={() => setRole(null)} /> : <Login onLogin={setRole} />}
        </TasksProvider>
      </FilterProvider>
    </BrandProvider>
  )
}