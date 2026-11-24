export const MONTHS = [['Jun',42],['Jul',58],['Aug',77],['Sep',64],['Oct',92],['Nov',81]]
export const ALERTS = [
  ['High','Lead not contacted within 24h','JCG-2026-00188'],
  ['High','Transcript rejected, waiting for student','JCG-2026-00142'],
  ['Medium','Verification task due today','JCG-2026-00131'],
  ['Low','Offer letter received, notify student','JCG-2026-00097'],
]
export const PIPELINE = [['New Lead',18],['Contacted',14],['Counselling',10],['Profile Pending',8],['Requirement Ready',6],['Applying',5],['Offer',3]]
export const JOURNEY = ['Lead registered','Counselling','Profile & documents','Requirement ready','University application','Offer & admission','Visa & departure']
export const STUDENTS = [
  ['JCG-2026-00142','Rahul Sharma','UK · MSc Computer Science','Application','Asha Verma'],
  ['JCG-2026-00131','Priya Nair','Australia · MBA','Documents','Karan Mehta'],
  ['JCG-2026-00188','Aman Gupta','Canada · BBA','New lead','Unassigned'],
  ['JCG-2026-00097','Sneha Iyer','Germany · MSc Data Science','Offer','Asha Verma'],
  ['JCG-2026-00120','Vikram Singh','USA · MS Finance','Visa','Neha Kapoor'],
]
export const TASKS = [
  ['T-1042','Verify academic transcripts','Rahul Sharma','High','Today','In Progress'],
  ['T-1045','Prepare UCL application','Rahul Sharma','Critical','Tomorrow','To Do'],
  ['T-1039','Check IELTS score report','Priya Nair','Medium','Overdue','Blocked'],
  ['T-1050','Submit Monash application','Priya Nair','High','25 Nov','Under Review'],
]
export const STU_HEAD = ['ID','Student','Destination & course','Stage','Owner']
export const TSK_HEAD = ['Task','Title','Student','Priority','Due','Status']
