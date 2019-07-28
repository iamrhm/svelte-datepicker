import React, { Component } from 'react';
import './dashboard.css';

import { getNextMonth, getPreviousMonth } from '../../utils/functions'
import { getPricingForMonth } from '../../utils/functions'

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
    let newMonthStock = getPricingForMonth(new Date())
    this.setState({
      calendarDate: new Date(),
      currentMonthStocks: newMonthStock
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
    let newMonthStock = getPricingForMonth(newChangedDate)
    this.setState({
      calendarDate: newChangedDate,
      currentMonthStocks: newMonthStock
    })
  }

  savePriceData(inputPrice, date) {
    console.log(inputPrice, date)
  }

  deleteStockData(day) {
    console.log(day)
  }

  render() {
    const { calendarDate, currentMonthStocks } = this.state
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

export default Dashboard;
