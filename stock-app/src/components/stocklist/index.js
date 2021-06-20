import React from 'react'
import './stocklist.css'

const StockList = ({ date, price, deleteStockData }) => {
  return (
    <React.Fragment>
      <span className='stock-item'>
        <span className='stock-logo'>
          <span className='default-logo-circle'></span>
        </span>
        <span className='stock-price'>{price}M</span>
        <span
          className='delete-button'
          onClick={() => deleteStockData(date)}>
          <i className='material-icons mini-icon'>delete</i>
        </span>
      </span>
    </React.Fragment>
  )
}
export default StockList