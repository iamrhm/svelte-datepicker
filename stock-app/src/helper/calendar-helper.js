
function getNoOfDaysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}

function getWeeklyDay(date, dateOfDate) {
  return new Date(date.getFullYear(), date.getMonth(), dateOfDate).getDay()
}

function getCalenderArray(propsDate) {
  const daysInMonth = getNoOfDaysInMonth(propsDate)
  const startDay = getWeeklyDay(propsDate, 1)
  console.log(startDay)
  const calenderArray = []

  for (let i = 0; i < startDay; i++) {
    calenderArray.push('')
  }
  calenderArray[getWeeklyDay(propsDate, 1) ] = 1
  for (let i = 2; i <= daysInMonth; i++) {
    calenderArray.push(i)
  }
  console.log(calenderArray)
  return calenderArray
}

export default getCalenderArray

export const Days = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const Months = ['January', 'February', 'March',
  'Appril', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December']

export function getMonth(propsDate) {
  return Months[propsDate.getMonth()]
}
