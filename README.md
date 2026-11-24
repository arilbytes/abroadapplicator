# JCG Portal (frontend)
`npm install && npm run dev`

```
src/
  styles/global.css        colour variables, base styles, buttons, form fields, pills
  data/mock.js             mock tables (replace with API calls later)
  components/              reusable UI, one folder each (X.jsx + X.css)
    Logo Panel Kpis Chart Alerts Table Sidebar Topbar QrCard
  layouts/DashboardLayout/ sidebar + topbar + page header shell
  pages/                   Login, ListPage (placeholder for non-dashboard menu items)
  roles/                   one folder per role
    admin manager agent teamLead employee student
      config.js            menu items, KPI cards, labels
      XDashboard.jsx       that role's dashboard
      (role-only parts, e.g. agent/Pipeline, student/Journey, with their own css)
    index.js               role registry
```
To change a role's menu or KPIs, edit its `config.js`. To change a role's dashboard, edit its `XDashboard.jsx`.

## Brand: theme + logo (founder and agents only)
- `data/themes.js`            the 6 themes (JCG Classic + 5 palettes); add or edit colours here
- `context/BrandContext.jsx`  stores each role's theme/logo (localStorage for now) and applies the theme as CSS variables
- `components/BrandPanel/`    the "Brand" popover in the top bar (logo upload + theme picker)
- `roles/*/config.js`         `"brandable": true` turns the Brand button on for that role (currently admin + agent)

## Founder dashboard + attendance
- `components/Kpis` renders simple cards, split cards (`{label, split:[[k,v],...]}`) and titled groups (`groups=[{title,items}]`). Founder KPIs live in `roles/admin/config.js` (`kpiGroups`).
- `roles/admin/Attendance/` + `data/attendance.js`: Daily/Monthly attendance (mock data). A role can open a custom page from a menu item via `pages: { 'Menu label': Component }` in `roles/index.js`.

## Founder dashboard extras
- `roles/admin/TopPerformers/` + `data/topPerformers.js`: Top performing (Employees / Agents / Managers) leaderboard.
- `components/ContactCard/` + `data/regionalManagers.js`: reusable contact cards. Edit the data file to update names, phones, emails or photos.

## Founder dashboard layout
- KPI groups (3/4) + Today's/Pending tasks (1/4): `roles/admin/AdminDashboard.jsx` (`.admin-top` in `AdminDashboard.css`); tasks in `roles/admin/TaskLists/`.
- Revenue by month (`components/LineChart`) + computed insights (`roles/admin/RevenueInsights/`); Product performance column chart (`components/ColumnChart`).
- Mock data: `data/founderDashboard.js` (money in lakhs; format with `utils/format.js`).
