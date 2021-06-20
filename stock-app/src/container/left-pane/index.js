import React, { Component } from 'react';

import './left-pane.css';

import { getNextMonth, getPreviousMonth } from '../../utils/functions'
import { getPricingForMonth } from '../../utils/functions'

import Calendar from '../../components/calendar'

class LeftPane extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTile: -1,
      inputPrice: '',
      currentDate: new Date()
    }
    this.changeActiveTile = this.changeActiveTile.bind(this)
    this.onInputPriceChange = this.onInputPriceChange.bind(this)
    this.savePriceData = this.savePriceData.bind(this)
    this.deleteStockData = this.deleteStockData.bind(this)
  }

  componentWillMount() {
    this.setState({
      currentDate: new Date(),
    })
  }

  handleDateChange(move) {
    let newChangedDate = this.state.calendarDate
    if (move === 'forward') {
      newChangedDate = getNextMonth(newChangedDate)
    } else {
      newChangedDate = getPreviousMonth(newChangedDate)
    }
    this.setState({
      calendarDate: newChangedDate,
      currentMonthStocks: getPricingForMonth(newChangedDate)
    })
  }

  changeActiveTile(tileNumber) {
    let { activeTile } = this.state
    if (activeTile === tileNumber)
      this.setState({ activeTile: '' })
    else
      this.setState({ activeTile: tileNumber })
  }

  onInputPriceChange(value) {
    this.setState({ inputPrice: value })
  }

  savePriceData() {
    const { calendarDate } = this.props
    const { activeTile, inputPrice } = this.state
    let date = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), activeTile)
    this.props.savePriceData(inputPrice, date)
    this.setState({ inputPrice: '', activeTile: '' })
  }

  deleteStockData(day) {
    const { calendarDate } = this.props
    let date = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), day)
    this.props.deleteStockData(date)
  }

  render() {
    const {
      calendarDate,
      currentMonthStocks,
      onDateChange = () => { }
    } = this.props
    const { currentDate, activeTile, inputPrice } = this.state
    return (
      <div className='left-pane'>
        <Calendar
          currentDate={currentDate}
          calendarDate={calendarDate}
          activeTile={activeTile}
          currentMonthStocks={currentMonthStocks !== undefined ? currentMonthStocks : []}
          inputPrice={inputPrice}

          onDateChange={onDateChange}
          savePriceData={this.savePriceData}
          deleteStockData={this.deleteStockData}

          changeActiveTile={this.changeActiveTile}
          onInputPriceChange={this.onInputPriceChange}
        />
      </div>
    );
  }
}

export default LeftPane;
