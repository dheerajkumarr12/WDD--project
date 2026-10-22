// GymSphere - shared code (members are saved in the browser using localStorage)

// Fixed plans: price and duration in months
const PRICE  = { Monthly: 1000, Quarterly: 2700, Yearly: 9000 };
const MONTHS = { Monthly: 1,    Quarterly: 3,    Yearly: 12 };

function getMembers() {
  return JSON.parse(localStorage.getItem("members") || "[]");
}
function saveMembers(list) {
  localStorage.setItem("members", JSON.stringify(list));
}
function todayDate() {
  return new Date().toISOString().slice(0, 10);   // yyyy-mm-dd
}
// expiry date = joining date + plan months
function expiryDate(m) {
  const d = new Date(m.joinDate);
  d.setMonth(d.getMonth() + MONTHS[m.plan]);
  return d.toISOString().slice(0, 10);
}
function isActive(m) {
  return expiryDate(m) >= todayDate();
}
