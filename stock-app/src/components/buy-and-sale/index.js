import React from 'react'
import './buyNSale.css'

const BuyAndSale = ({ maxProfitDetails }) => {
  if (maxProfitDetails !== undefined) {
    if (maxProfitDetails.buyDetails !== null && maxProfitDetails.saleDetails !== null) {
      const { buyDetails, saleDetails } = maxProfitDetails
      return (
        <div className='buy-and-sale-container'>
          <span className='buy-sale-date-wrapper'>
            <span className='circle-logo'>
              <span className='default-logo-circle'></span>
            </span>
            <span className='buy-and-sale-date-label'>Buy Date</span>
            <span className='buy-sale-date-value'>
              {
                buyDetails !== undefined ?
                  <React.Fragment>
                    <span>{buyDetails.date.getDate()}-</span>
                    <span>{buyDetails.date.getMonth() + 1}-</span>
                    <span>{buyDetails.date.getFullYear()}</span>
                  </React.Fragment> : null
              }
            </span>
          </span>
          <span className='buy-sale-date-wrapper'>
            <span className='circle-logo'>
              <span className='default-logo-circle'></span>
            </span>
            <span className='buy-and-sale-date-label'>Sale Date</span>
            <span className='buy-sale-date-value'>
              {
                saleDetails !== undefined ?
                  <React.Fragment>
                    <span>{saleDetails.date.getDate()}-</span>
                    <span>{saleDetails.date.getMonth() + 1}-</span>
                    <span>{saleDetails.date.getFullYear()}</span>
                  </React.Fragment> : null
              }
            </span>
          </span>
        </div>
      )
    }
    else {
      return (
        <div className='buy-and-sale-container'>
          <span className='buy-sale-date-wrapper'>
            <span className='circle-logo'>
              <span className='default-logo-circle'></span>
            </span>
            <span className='buy-and-sale-date-label'>No Data Available</span>
          </span>
        </div>
      )
    }

  } else {
    return (<div>Loading...</div>)
  }
}
export default BuyAndSale