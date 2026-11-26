// Mock agent performance for the Employee dashboard. Row: [agent, office, enrolments, conversion]. Replace with API data later.
// export const AGENT_PERF_HEAD = ['Agent', 'Office', 'Enrolments', 'Conversion', 'Performance']
// export const TOP_AGENTS = [
//   ['Asha Verma', 'Delhi', '18', '42%'],
//   ['Meera Nair', 'Pune', '15', '39%'],
//   ['Riya Kapoor', 'Mumbai', '13', '36%'],
// ]
// export const WORST_AGENTS = [
//   ['Dev Malhotra', 'Delhi', '3', '9%'],
//   ['Simran Kaur', 'Noida', '2', '7%'],
//   ['Kabir Anand', 'Jaipur', '1', '4%'],
// ]

// Mock agent performance for the Employee dashboard. Row: [agent, office, enrolments]. Replace with API data later.
export const AGENT_GROUPS = [
  { title: 'Top Performing Agents', metric: 'enrolments', rows: [
    ['Asha Verma', 'Delhi', '18'], ['Meera Nair', 'Pune', '15'], ['Riya Kapoor', 'Mumbai', '13'],
    ['Rohit Bansal', 'Noida', '12'], ['Tanvi Shah', 'Mumbai', '11'] ] },
  { title: 'Worst Performing Agents', metric: 'enrolments', tone: 'low', rows: [
    ['Kabir Anand', 'Jaipur', '1'], ['Simran Kaur', 'Noida', '2'], ['Dev Malhotra', 'Delhi', '3'],
    ['Nikhil Rao', 'Pune', '3'], ['Pranav Joshi', 'Delhi', '4'] ] },
]