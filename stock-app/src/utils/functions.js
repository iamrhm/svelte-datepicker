export function getNextMonth(date) {
  let currentMonth = date.getMonth()
  let currentYear = date.getFullYear()

  let nextMonth = (currentMonth + 1) > 11 ? 0 : (currentMonth + 1)
  let newCurrentYear = (currentMonth + 1) > 11 ? (currentYear + 1) : currentYear

  return new Date(newCurrentYear, nextMonth, date.getDay())
}

export function getPreviousMonth(date) {
  let currentMonth = date.getMonth()
  let currentYear = date.getFullYear()

  let nextMonth = (currentMonth - 1) < 0 ? 11 : (currentMonth - 1)
  let newCurrentYear = (currentMonth - 1) < 0 ? (currentYear - 1) : currentYear

  return new Date(newCurrentYear, nextMonth, date.getDay())
}