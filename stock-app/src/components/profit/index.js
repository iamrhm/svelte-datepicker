import React from 'react'

import './profit.css'
const unitToCalProfit = 10

function getMaxProfit() {

}

const Projit = ({ currentMonthStocks, date }) => {
  const maxProfit = getMaxProfit(currentMonthStocks, date, unitToCalProfit)
  return (
    <div className='profit-container'>
      <span>23K</span>
    </div>
  )
}
export default Projit