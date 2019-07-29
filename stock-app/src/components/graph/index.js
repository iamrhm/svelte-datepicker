import React from 'react'
import { Sparklines, SparklinesBars } from 'react-sparklines';

import './graph.css'




const Graph = ({ currentMonthStocks }) => {
  if (currentMonthStocks.length > 0) {
    let graphData = currentMonthStocks.map((stock) => stock.price)
    return (
      <div className='graph-container'>
        <div className='graph'>
          <Sparklines data={graphData}>
            <SparklinesBars color="blue" />
          </Sparklines>
        </div>
        <span className='graph-label'>Product Overview</span>
      </div>)
  } else {
    return (
      <div className='graph-container'>
        <span>No Data Available</span>
      </div>)
  }

}
export default Graph