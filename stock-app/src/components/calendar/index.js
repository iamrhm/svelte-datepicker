import React from 'react'

import getCalenderArray, { Days, getMonth } from '../../helper/calendar-helper'
import Tiles from '../tiles'

import './calendar.css'

const Calendar = (
  { currentDate, changedDate,
    currentMonthStocks, inputPrice,
    activeTile,
    onDateChange = () => { },
    changeActiveTile = () => { },
    onInputPriceChange = () => { },
    savePriceData = () => { },
    deleteStockData = () => { }
  }
) => {
  const calendar = getCalenderArray(changedDate)
  const month = getMonth(changedDate)
  const year = changedDate.getFullYear()
  return (
    <div className='calendar-container'>
      <div className='months-and-action-conatiner'>
        <button className='calendar-buttons' onClick={() => onDateChange('back')}>
          <i className='material-icons'>arrow_back</i>
        </button>
        <div className='month-year-display'>
          <span className='month-display'>{month}</span>
          <span className='year-display'>{year}</span>
        </div>
        <button className='calendar-buttons' onClick={() => onDateChange('forward')}>
          <i className='material-icons'>arrow_forward</i>
        </button>
      </div>
      <header className='days-container'>
        {Days.map((day, idx) => (
          <Tiles key={idx} data={day} />
        ))}
      </header>
      <div className='calendar-date-container'>
        {
          calendar.map((date, idx) => {
            if (date !== null) {
              let foundStock = currentMonthStocks.find((stock) => stock.date.getDate() === date)
              let isStockMissing = foundStock === undefined ? true : false
              return (
                <Tiles key={idx}
                  data={date}
                  isActive={date === activeTile}
                  tileNo={date}
                  isStockMissing={isStockMissing}
                  inputPrice={inputPrice}
                  price={foundStock !== undefined ? foundStock.price : ''}

                  onInputChange={date === activeTile ? onInputPriceChange : () => { }}
                  changeActiveTile={changeActiveTile}
                  savePriceData={savePriceData}
                  deleteStockData={deleteStockData} />

              )
            }
            else return null
          })
        }
      </div>
    </div>
  )
}
export default Calendar