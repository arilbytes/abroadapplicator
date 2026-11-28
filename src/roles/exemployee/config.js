// Ex-Employee view: starts as an exact copy of the Employee view.
// To change anything for this role only, add that key below (it overrides the Employee value),
// e.g. nav: [...], kpiGroups: [...], title: '...'.
import employee from '../employee/config'

export default {
  ...employee,
  label: 'Ex-Employee',
  user: 'Ex-Employee',
  // same sidebar as Employee, minus the items listed here
  nav: employee.nav.filter(item => !['Agents'].includes(item)),
}