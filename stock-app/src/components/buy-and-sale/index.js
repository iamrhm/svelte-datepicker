import React from 'react'
import './buyNSale.css'

const BuyAndSale = ({ maxProfitDetails }) => {
  const { buyDetails, saleDetails } = maxProfitDetails
  return (
    <div className='buy-and-sale-container'>
      <span className='buy-sale-date-wrapper'>
        <span className='circle-logo'>
          <span className='default-logo-circle'></span>
        </span>
        <span className='buy-and-sale-date-label'>Buy Date</span>
        <span className='buy-sale-date-value'>
          <span>{buyDetails.date.getDate()}-</span>
          <span>{buyDetails.date.getMonth()}-</span>
          <span>{buyDetails.date.getFullYear()}</span>
        </span>
      </span>
      <span className='buy-sale-date-wrapper'>
        <span className='circle-logo'>
          <span className='default-logo-circle'></span>
        </span>
        <span className='buy-and-sale-date-label'>Sale Date</span>
        <span className='buy-sale-date-value'>
          <span>{saleDetails.date.getDate()}-</span>
          <span>{saleDetails.date.getMonth()}-</span>
          <span>{saleDetails.date.getFullYear()}</span>
        </span>
      </span>
    </div>
  )
}
export default BuyAndSale