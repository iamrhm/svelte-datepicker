import React, { Component } from 'react';
import './dashboard.css';

import { getNextMonth, getPreviousMonth } from '../../utils/functions'
import { getPricingForMonth, updateStock } from '../../utils/functions'

import LeftPane from '../left-pane'
import RightPane from '../right-pane'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      calendarDate: new Date(),
      currentMonthStocks: [],
    }
    this.handleDateChange = this.handleDateChange.bind(this)
    this.savePriceData = this.savePriceData.bind(this)
    this.deleteStockData = this.deleteStockData.bind(this)
  }

  componentWillMount() {
    let fetchData = getPricingForMonth(new Date())
    this.setState({
      calendarDate: new Date()
    })
    fetchData.then((newMonthStock) => {
      this.setState({
        currentMonthStocks: newMonthStock
      })
    })
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

    let fetchData = getPricingForMonth(newChangedDate)
    fetchData.then((newMonthStock) => {
      this.setState({
        currentMonthStocks: newMonthStock
      })
    })
  }

  savePriceData(inputPrice, date) {
    updateStock(inputPrice, date)
    //some glitches are there
  }

  deleteStockData(day) {
    console.log(day)
  }

  render() {
    const { calendarDate, currentMonthStocks } = this.state
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
          />
        </div>
      );
    }

  }
}

export default Dashboard;
