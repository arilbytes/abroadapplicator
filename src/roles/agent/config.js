// Agent: navigation, KPI cards and labels
import admin from '../admin/config'

export default {
  kpiGroups: admin.kpiGroups,
  "brandable": true,
  // "qrCard": true,
  "label": "Ext Manager",
  "user": "Counsellor",
  "title": "Dashboard",
  "nav": [
    "Overview",
    "Team",
    "Students",
    "Applications",
    "Commercial Overview",
    "Reports",
    "Enquiries",
    "Announcements showcase",
    "Roles & Permissions",
    "UniProg Search Engine",
    "Essential Data",
    "Learning Resources",
    "Additional Services",
    "Contact and support",
    "Settings"
  ],
  "kpis": [
    [
      "My Students",
      "64"
    ],
    [
      "New Leads",
      "18"
    ],
    [
      "Follow-ups Due",
      "11"
    ],
    [
      "Overdue Follow-ups",
      "3"
    ],
    [
      "Documents Pending",
      "27"
    ],
    [
      "Requirement Ready",
      "6"
    ],
    [
      "Applications In Progress",
      "5"
    ],
    [
      "Offers Received",
      "3"
    ]
  ]
}
