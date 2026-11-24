// To add a role: create a folder in /roles with config.js + a Dashboard, then register it here.
import admin from './admin/config'
import manager from './manager/config'
import agent from './agent/config'
import lead from './teamLead/config'
import employee from './employee/config'
import student from './student/config'
import ManagersTeams from './admin/ManagersTeams/ManagersTeams'
import AdminDashboard from './admin/AdminDashboard'
import ManagerDashboard from './manager/ManagerDashboard'
import AgentDashboard from './agent/AgentDashboard'
import TeamLeadDashboard from './teamLead/TeamLeadDashboard'
import EmployeeDashboard from './employee/EmployeeDashboard'
import StudentDashboard from './student/StudentDashboard'

const ROLES = {
  admin: { ...admin, Dashboard: AdminDashboard, pages: { 'Company': ManagersTeams } },
  manager: { ...manager, Dashboard: ManagerDashboard },
  // agent: { ...agent, Dashboard: AgentDashboard },
  // lead: { ...lead, Dashboard: TeamLeadDashboard },
  // employee: { ...employee, Dashboard: EmployeeDashboard },
  // student: { ...student, Dashboard: StudentDashboard },
}
export default ROLES
