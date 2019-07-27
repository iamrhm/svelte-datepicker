import React, { Component } from 'react';
import './App.css';

import { getNextMonth, getPreviousMonth } from './utils/functions'
import Calendar from './components/calendar'
import { getPricingForMonth } from './__mock__/stocks'
import Profit from './components/profit'
import Graph from './components/graph'
import BuyAndSale from './components/buy-and-sale'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentDate: null,
      changedDate: null,
      activeTile: '',
      currentMonthStocks: [],
      inputPrice: ''
    }
    this.handleDateChange = this.handleDateChange.bind(this)
    this.changeActiveTile = this.changeActiveTile.bind(this)
    this.onInputPriceChange = this.onInputPriceChange.bind(this)
    this.savePriceData = this.savePriceData.bind(this)
    this.deleteStockData = this.deleteStockData.bind(this)
  }

  componentWillMount() {
    this.setState({
      currentDate: new Date(),
      changedDate: new Date(),
      currentMonthStocks: getPricingForMonth(new Date())
    })
    //#TODO: Add currentDate change on day change
  }

  handleDateChange(move) {
    let newChangedDate = this.state.changedDate
    if (move === 'forward') {
      newChangedDate = getNextMonth(newChangedDate)
    } else {
      newChangedDate = getPreviousMonth(newChangedDate)
    }
    this.setState({
      changedDate: newChangedDate,
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
    console.log(this.state.inputPrice)//call save
    this.setState({ inputPrice: '', activeTile: '' })
  }

  deleteStockData(date) {
    console.log(date)
  }

  render() {
    const { currentDate, changedDate, activeTile, currentMonthStocks, inputPrice } = this.state
    return (
      <div className="App" >
        <div className='left-pane'>
          <Calendar
            currentDate={currentDate}
            changedDate={changedDate}
            activeTile={activeTile}
            currentMonthStocks={currentMonthStocks}
            inputPrice={inputPrice}

            onDateChange={this.handleDateChange}
            changeActiveTile={this.changeActiveTile}
            onInputPriceChange={this.onInputPriceChange}
            savePriceData={this.savePriceData}
            deleteStockData={this.deleteStockData}
          />
        </div>
        <div className='right-pane'>
          <Profit currentMonthStocks={currentMonthStocks} date={changedDate} />
          <Graph currentMonthStocks={currentMonthStocks} />
          <BuyAndSale currentMonthStocks={currentMonthStocks} date={changedDate} />
        </div>

      </div>
    );
  }
}

export default App;
