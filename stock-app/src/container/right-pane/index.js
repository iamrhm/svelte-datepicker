import React, { Component } from 'react';
import './right-pane.css';

import Profit from '../../components/profit'
import Graph from '../../components//graph'
import BuyAndSale from '../../components/buy-and-sale'

const RightPane = ({ currentMonthStocks, maxProfitDetails }) => {
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

export default RightPane;