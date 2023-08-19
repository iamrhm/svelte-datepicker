export const months = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];
export const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const getCalendar = (currDate) => {
  const currentDate = new Date(currDate);
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const noOfDays = new Date(currentYear, currentMonth + 1, 0).getDate();
  const startingDayInWeek = new Date(currentYear, currentMonth, 1).getDay() + 1;
  const daysDistribution = [];
  for (let i = 1; i < startingDayInWeek + noOfDays; i++) {
    if (i < startingDayInWeek) {
      daysDistribution.push('');
    } else {
      daysDistribution.push(i - startingDayInWeek + 1);
    }
  }
  return {
    month: currentMonth,
    year: currentYear,
    daysDistribution,
  };
}

export const isSameDay = (d1, d2) => {
  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();
}