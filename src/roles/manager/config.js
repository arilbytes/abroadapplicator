// Office Manager: navigation, KPI cards and labels
import admin from '../admin/config'

export default {
  kpiGroups: admin.kpiGroups, // same cards as the Founder for now
  // "qrCard": true,
  brandable: true,
  "label": "Manager",
  "user": "Manager",
  "title": "Dashboard",
  // "title": "Office overview",
  "nav": [
    "Overview",
    "Team",
    "Students",
    "Agents",
    "Applications",
    "Commercial Overview",
    "Reports",
    "Announcements",
    "Roles & permissions",
    // "Commercial Payments",
    "UniProg Search Engine",
    "Learning Resources",
    "Addtional Services",
    "Contact & Support",
    
    
    // "Team Management",
    // "Application Tracking",
    // "Document Verification",
    // "Tasks",
    // "Office Reports",
    // "Communication",
    "Settings"
  ],
  "kpis": [
    [
      "Total Employees",
      "412",
    ],
    [
      "Total Agents",
      "37"
    ],
    [
      "Revenue Target",
      "18L "
    ],
    [
      "Target Remaining",
      "6L"
    ],
    [
      "Partner offer letter",
      "34",
      "Applied"
    ],
    [
      "Partner offer letter",
      "52",
      "Received"
    ],
    [
      "Education Loan",
      "14",
      "Applied"
    ],
    [
      "Education Loan",
      "78",
      "Sanctioned"
    ],
    [
      "Education Loan",
      "9",
      "Disburse"
    ],
    [
      "Education Loan",
      "72",
      "Dropped"
    ],
    [
      "Visa Received",
      "81",
    ],
    [
      "Visa Refused",
      "21"
    ]
  ]
}