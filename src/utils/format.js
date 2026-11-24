// Amounts in this project are stored in lakhs (1 Cr = 100 L)
export const fmtMoney = v => (v >= 100 ? `₹${(v / 100).toFixed(2)} Cr` : `₹${v.toFixed(1)} L`)
