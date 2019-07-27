import React, { PureComponent } from 'react'
import './buyNSale.css'


class BuyAndSale extends PureComponent {
  render() {
    const { currentMonthStocks, date } = this.props
    //const maxProfit = getByNSaleData(currentMonthStocks, date)
    return (
      <div className='buy-and-sale-container'>
        <span className='buy-date'>12-Apr-2019</span>
        <span className='sale-date'>12-May-2019</span>
      </div>)
  }
}
export default BuyAndSale