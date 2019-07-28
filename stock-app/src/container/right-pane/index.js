import React, { Component } from 'react';
import './right-pane.css';

import { calculateMaxProfit } from '../../utils/functions'

import Profit from '../../components/profit'
import Graph from '../../components//graph'
import BuyAndSale from '../../components/buy-and-sale'

class RightPane extends Component {
  constructor(props) {
    super(props)
    this.state = {
      maxProfitDetails: {}
    }
  }

  componentWillMount() {
    let { currentMonthStocks } = this.props
    if (currentMonthStocks !== undefined && currentMonthStocks !== null) {
      let newMaxProfit = calculateMaxProfit(currentMonthStocks, 10)
      this.setState({
        maxProfitDetails: newMaxProfit
      })
    }
  }

  componentWillUpdate(newProps) {
    if (newProps.calendarDate !== this.props.calendarDate 
      && newProps.currentMonthStocks !== undefined 
      && newProps.currentMonthStocks !== null) {
      let newMaxProfit = calculateMaxProfit(newProps.currentMonthStocks, 10)
      this.setState({
        maxProfitDetails: newMaxProfit
      })
    }
  }

  render() {
    const { currentMonthStocks } = this.props
    const { maxProfitDetails } = this.state
    return (
      <div className='right-pane'>
        <Profit maxProfitDetails={maxProfitDetails} />
        {
          (currentMonthStocks !== null && currentMonthStocks !== undefined && currentMonthStocks.length > 0) ?
            <Graph currentMonthStocks={currentMonthStocks} /> : <div>Loading...</div>
        }
        <BuyAndSale maxProfitDetails={maxProfitDetails} />
      </div>
    );
  }
}

export default RightPane;
