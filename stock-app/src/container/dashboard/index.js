import React, { Component } from 'react';
import './dashboard.css';

import { getNextMonth, getPreviousMonth, deleteStock } from '../../utils/functions'
import { getPricingForMonth, updateStock, calculateMaxProfit } from '../../utils/functions'

import LeftPane from '../left-pane'
import RightPane from '../right-pane'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      calendarDate: new Date(),
      currentMonthStocks: [],
      maxProfitDetails: {
        profit: null,
        saleDetails: null,
        buyDetails: null
      }
    }
    this.handleDateChange = this.handleDateChange.bind(this)
    this.savePriceData = this.savePriceData.bind(this)
    this.deleteStockData = this.deleteStockData.bind(this)
    this.fectchData = this.fectchData.bind(this)
  }

  fectchData(date) {
    let apiData = getPricingForMonth(date)
    apiData.then((newMonthStock) => {
      let newMaxProfitDetails = calculateMaxProfit(newMonthStock, 10)
      this.setState({
        currentMonthStocks: newMonthStock,
        maxProfitDetails: newMaxProfitDetails
      })
    })
  }

  componentWillMount() {
    this.setState({
      calendarDate: new Date()
    })
    this.fectchData(new Date())
  }

  handleDateChange(e, move) {
    e.preventDefault()
    let newChangedDate = this.state.calendarDate
    if (move === 'forward') {
      newChangedDate = getNextMonth(newChangedDate)
    } else {
      newChangedDate = getPreviousMonth(newChangedDate)
    }
    this.setState({
      calendarDate: newChangedDate
    })
    this.fectchData(newChangedDate)
  }

  savePriceData(inputPrice, date) {
    updateStock(inputPrice, date)
    this.fectchData(this.state.calendarDate)
  }

  deleteStockData(date) {
    deleteStock(date)
    //console.log(date)
  }

  render() {
    const { calendarDate, currentMonthStocks, maxProfitDetails } = this.state
    if (currentMonthStocks !== undefined && currentMonthStocks !== null && currentMonthStocks.length > 0) {
      return (
        <div className="dashboard" >
          <LeftPane
            calendarDate={calendarDate}
            currentMonthStocks={currentMonthStocks}
            onDateChange={this.handleDateChange}
            savePriceData={this.savePriceData}
            deleteStockData={this.deleteStockData} />
          <RightPane
            calendarDate={calendarDate}
            currentMonthStocks={currentMonthStocks}
            maxProfitDetails={maxProfitDetails}
          />
        </div>
      );
    } else {
      return (
        <div className="dashboard" >
          <LeftPane
            calendarDate={calendarDate}
            currentMonthStocks={currentMonthStocks}
            onDateChange={this.handleDateChange}
            savePriceData={this.savePriceData}
            deleteStockData={this.deleteStockData} />
          <RightPane
            calendarDate={calendarDate}
            currentMonthStocks={currentMonthStocks}
            maxProfitDetails={maxProfitDetails}
          />
        </div>
      );
    }

  }
}

export default Dashboard;