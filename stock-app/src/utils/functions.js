import axios from 'axios'

export function getNextMonth(date) {
  let currentMonth = date.getMonth()
  let currentYear = date.getFullYear()
  let nextMonth = (currentMonth + 1) > 11 ? 0 : (currentMonth + 1)
  let newCurrentYear = (currentMonth + 1) > 11 ? (currentYear + 1) : currentYear
  return new Date(newCurrentYear, nextMonth, 1)
}

export function getPreviousMonth(date) {
  let currentMonth = date.getMonth()
  let currentYear = date.getFullYear()
  let nextMonth = (currentMonth - 1) < 0 ? 11 : (currentMonth - 1)
  let newCurrentYear = (currentMonth - 1) < 0 ? (currentYear - 1) : currentYear
  return new Date(newCurrentYear, nextMonth, 1)
}

function getStartingRange(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

function getEndingingRange(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

function basedOnDay(a, b) {
  return new Date(a.date) - new Date(b.date);
}
function getTransformedDate(date) {
  let year = date.getFullYear()
  let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  return (`${year}-${month}-${day}`)
}

export async function getPricingForMonth(date) {
  let startingDate = getStartingRange(date)
  let endingDate = getEndingingRange(date)
  let data = await axios.get('http://localhost:4000/api/getstocks')
  let stocks = data.data.sort(basedOnDay)
  let monthlyStockPrice = stocks.filter((stock) => {
    let stockDates = new Date(stock.date)
    if (stockDates > startingDate) {
      if (endingDate > stockDates) {
        return true
      }
      else
        return false
    } else
      return false
  }).map((stock) => {
    let stockDates = new Date(stock.date)
    return {
      date: stockDates,
      price: stock.close
    }
  })
  return monthlyStockPrice
}


export function calculateMaxProfit(monthlyStock, perUnit) {
  if (monthlyStock.length > 2) {
    let maxProfit = monthlyStock[1].price - monthlyStock[0].price
    let buyDetails = monthlyStock[0]
    let maxProfitDetails = {
      profit: maxProfit,
      buyDetails: null,
      saleDetails: null
    }
    for (let i = 1; i < monthlyStock.length - 1; i++) {
      if (monthlyStock[i].price - buyDetails.price > maxProfit) {
        maxProfit = monthlyStock[i].price - buyDetails.price
        maxProfitDetails = {
          profit: maxProfit * 10,
          saleDetails: monthlyStock[i],
          buyDetails: buyDetails
        }
      }
      else if (monthlyStock[i].price < buyDetails.price) {
        buyDetails = monthlyStock[i]
      }
    }
    console.log(maxProfitDetails)
    return maxProfitDetails
  }
  else {
    return {
      profit: 0,
      buyDetails: null,
      saleDetails: null
    }
  }

}

export async function updateStock(inputPrice, date) {
  let transformedDate = getTransformedDate(date)
  axios.post('http://localhost:4000/api/updatestocks', { date: transformedDate, close: inputPrice })
}

export async function deleteStock(date) {
  let transformedDate = getTransformedDate(date)
  axios.delete('http://localhost:4000/api/deletestock', { data: { date: transformedDate } })
}
