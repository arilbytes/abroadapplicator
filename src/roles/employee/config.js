// // Employee: navigation, KPI cards and labels
// export default {
//   // "qrCard": true,
//   "label": "Employee",
//   "user": "Operations Executive",
//   "title": "My work",
//   "nav": [
//     "Overview",
//     "Students",
//     "Agents",
//     "Applications",
//     "Commercial Overview",
//     "Reports",
//     "Announcements",
//     // "Commercial Payments",
//     "UniProg Search Engine",
//     "Learning Resources",
//     "Addtional Services",
//     "Settings"
//   ],
//   "kpis": [
//     [
//       "Assigned Tasks",
//       "17"
//     ],
//     [
//       "Due Today",
//       "4"
//     ],
//     [
//       "Overdue",
//       "2"
//     ],
//     [
//       "In Progress",
//       "6"
//     ],
//     [
//       "Completed This Week",
//       "21"
//     ],
//     [
//       "Pending Review",
//       "3"
//     ],
//     [
//       "Assigned Students",
//       "12"
//     ],
//     [
//       "Priority Tasks",
//       "5"
//     ]
//   ],
//   "kpiGroups": [
//     { title: 'Applications', items: [
//       { label: 'Applications Submitted', split: [['Total', '1,042'], ['Partner', '688'], ['Non-partner', '354']] },
//       { label: 'Loan Applications', split: D('4', '21', '76') },
//       { label: 'New Enquiries', split: D('12', '64', '186') },
//     ] },
//     { title: 'Revenue & outstanding', items: [
//       { label: 'Revenue Received', split: D('₹68 K', '₹5.2 L', '₹21.6 L') },
//       { label: 'Revenue Outstanding', split: [['Non-partner', '₹12.1 L'], ['White label', '₹9.4 L'], ['Legalization', '₹4.9 L']] },
//       { label: 'Target Revenue', split: D('₹68 K', '₹5.2 L', '₹21.6 L') },
//     ] },

//   ]
// }
// Employee: navigation, KPI cards and labels

// Helper for Today / This week / This month split cards
// (was missing — caused "ReferenceError: D is not defined" at module load)
const D = (a, b, c) => [['Today', a], ['This week', b], ['This month', c]]

export default {
  // Uncomment to show the student registration QR card on the Overview page
  // qrCard: true,

  label: 'Employee',
  user: 'Relationship Manager',
  title: 'Dashboard',

  nav: [
    'Overview',
    'Students',
    'Agents',
    'Applications',
    'Commercial Overview',
    'Reports',
    'Announcements',
    // 'Commercial Payments',
    'UniProg Search Engine',
    'Learning Resources',
    'Additional Services',   // fixed typo: Addtional → Additional
    'Contact & Support',
    'Settings',
  ],

  // Flat KPI grid (kept for quick summary cards at the top of the dashboard)
  kpis: [
    ['Assigned Tasks', '17'],
    ['Due Today', '4'],
    ['Overdue', '2'],
    ['In Progress', '6'],
    ['Completed This Week', '21'],
    ['Pending Review', '3'],
    ['Assigned Students', '12'],
    ['Priority Tasks', '5'],
  ],

  // Grouped KPI sections (Applications / Revenue & outstanding)
  kpiGroups: [
    {
      title: 'Applications',
      items: [
        {
          label: 'Applications Submitted',
          split: [
            ['Total', '1,042'],
            ['Partner', '688'],
            ['Non-partner', '354'],
          ],
        },
        { label: 'Loan Applications', split: D('4', '21', '76') },
        { label: 'New Enquiries', split: D('12', '64', '186') },
      ],
    },
    {
      title: 'Revenue & outstanding',
      items: [
        { label: 'Revenue Received', split: D('₹68 K', '₹5.2 L', '₹21.6 L') },
        {
          label: 'Revenue Outstanding',
          split: [
            ['Non-partner', '₹12.1 L'],
            ['White label', '₹9.4 L'],
            ['Legalization', '₹4.9 L'],
          ],
        },
        { label: 'Target Revenue', split: D('₹68 K', '₹5.2 L', '₹21.6 L') },
      ],
    },
  ],
}