import React, { PureComponent } from 'react'
import './graph.css'
const unitToCalProfit = 10

function getMaxProfit() {

}

class Graph extends PureComponent {
  render() {
    const { stocks, propsDate } = this.props
    const maxProfit = getMaxProfit(stocks, propsDate, unitToCalProfit)
    return (
      <div className='graph-container'>
        <span>graph will be added</span>
      </div>)
  }
}
export default Graph