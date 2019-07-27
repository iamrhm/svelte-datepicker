
function getNoOfDaysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}

function getWeeklyDay(date, dateOfDate) {
  return new Date(date.getFullYear(), date.getMonth(), dateOfDate).getDay()
}

function getCalenderArray(propsDate) {
  const daysInMonth = getNoOfDaysInMonth(propsDate)
  const startDay = getWeeklyDay(propsDate, 1) + 1
  const calenderArray = []

  for (let i = 0; i < startDay; i++) {
    calenderArray.push(null)
  }
  calenderArray[getWeeklyDay(propsDate, 1) + 1] = 1
  for (let i = 2; i <= daysInMonth; i++) {
    calenderArray.push(i)
  }
  return calenderArray
}

export default getCalenderArray

export const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday']

export const Months = ['January', 'February', 'March',
  'Appril', 'May', 'June', 'July',
  'Augest', 'September', 'October', 'November', 'December']

export function getMonth(propsDate) {
  return Months[propsDate.getMonth()]
}
