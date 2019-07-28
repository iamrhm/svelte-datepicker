import { stocks } from '../__mock__/stocks'

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

export function getPricingForMonth(date) {
  let startingDate = getStartingRange(date)
  let endingDate = getEndingingRange(date)
  let monthlyStockPrice = stocks.historical.filter((stock) => {
    let stockDates = new Date(...stock.date.split('-'))
    if (stockDates > startingDate) {
      if (endingDate > stockDates) {
        return true
      }
      else
        return false
    } else
      return false
  }).map((stock) => {
    let stockDates = new Date(...stock.date.split('-'))
    return {
      date: stockDates,
      price: stock.close
    }
  })
  return monthlyStockPrice
}

/*
date: Tue Jul 02 2019 00:00:00 GMT+0530 (India Standard Time)
price: 121.2019 
*/

export function calculateMaxProfit(monthlyStock, perUnit) {
  if (monthlyStock.length > 2) {
    let maxProfit = monthlyStock[1].price - monthlyStock[0].price
    let buyDetails = monthlyStock[0]
    let maxProfitDetails = {
      profit: null,
      buyDetails: null,
      saleDetails: null
    }

    for (let i = 1; i < monthlyStock.length; i++) {
      if (monthlyStock[i].price - buyDetails.price > maxProfit) {
        maxProfitDetails.profit = (monthlyStock[i].price - buyDetails.price) * 10
        maxProfitDetails.saleDetails = monthlyStock[i]
        maxProfitDetails.buyDetails = buyDetails

        maxProfit = monthlyStock[i].price - buyDetails.price
      }
      if (monthlyStock[i].price < buyDetails.price) {
        buyDetails = monthlyStock[i]
      }
    }
    return maxProfitDetails
  } else {
    return {
      profit: 0,
      buyDetails: null,
      saleDetails: null
    }
  }

}