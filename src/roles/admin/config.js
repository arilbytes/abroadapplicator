// Founder: navigation, KPI cards and labels
const D = (a, b, c) => [['Today', a], ['This week', b], ['This month', c]]
export default {
  brandable: true,
  // qrCard: true,
  label: 'Founder',
  user: 'Master Admin',
  title: 'Organisation overview',
  nav: [
    'Overview', 'Company','Students',//'Attendance'//,
    , 'Agents',
    'Applications', 'Commercial Overview', 'Reports', 'Announcements',
    'Roles & Permissions',
    // added (plain append):
    'UniProg Search Engine', 'Learning Resource', //'Commission Structure',
     'Additional Services', 'Settings',
  ],
  // Mock numbers. Day/Week/Month and partner splits will come from the API.
  kpiGroups: [
    { title: 'Students & enrolments', items: [
      ['Total Students', '2,418'],
      ['Total Enrolments for Uni Admission', '2,987'],
      ['Total Enrolments for loan', '278'],
      ['Offers Received', '612'],
      ['Offers Rejected', '612'],
      ['Loan Accepted', '420'],
      ['Loan Rejected', '12', 'Total'],
      ['Visa Recieved', '340', 'Total'],
      ['Visa Rejected', '340', 'Total'],
      ['Student Not Responding', '41', 'Total'],
      ['Pending from Partner', '61', 'Total'],
      ['Deferrals', '3', 'Total'],

      
      // { label: 'Enrolments', split: D('3', '14', '41') },
    ] },
    { title: 'Applications', items: [
      { label: 'Applications Submitted', split: [['Total', '1,042'], ['Partner', '688'], ['Non-partner', '354']] },
      { label: 'Loan Applications', split: D('4', '21', '76') },
      { label: 'New Enquiries', split: D('12', '64', '186') },
    ] },
    { title: 'Needs action', items: [
      { label: 'Admission Applications Pending', value: '112', tone: 'alert' },
      { label: 'Scholarship Applications Pending', value: '48', tone: 'alert' },
      { label: 'Visa Applications Pending', value: '37', tone: 'alert' },
      { label: 'Education Loan Pending', value: '30', tone: 'alert'},
      { label: 'Application Prepared', value: '73', tone: 'alert'},
      { label: 'Pending for application fees', value: '16', tone: 'alert'},

    ] },
    { title: 'Revenue & outstanding', items: [
      { label: 'Revenue Received', split: D('₹68 K', '₹5.2 L', '₹21.6 L') },
      { label: 'Revenue Outstanding', split: [['Non-partner', '₹12.1 L'], ['White label', '₹9.4 L'], ['Legalization', '₹4.9 L']] },
      { label: 'Target Revenue', split: D('₹68 K', '₹5.2 L', '₹21.6 L') },
    ] },
  ],
}
