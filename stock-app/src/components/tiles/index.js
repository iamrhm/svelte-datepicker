import React, { PureComponent } from 'react'

import Form from '../form'
import StockList from '../stocklist'

import './tiles.css'

class Tiles extends PureComponent {
  render() {
    const { data, isActive, tileNo, isStockMissing, price, inputPrice,
      changeActiveTile = () => { }, onInputChange = () => { }, savePriceData = () => { },
      deleteStockData = () => { } } = this.props
      return (
        <div className='tile-container'>
          <span className='tile-header'>
            <span className='tile-title'>
              {data}
            </span>
            {isActive ? <CloseButton tileNo={tileNo} onClick={changeActiveTile} /> : null}
          </span>
          <div className='tile-body'>
            {
              isActive ? <Form inputPrice={inputPrice} onChange={onInputChange} onClick={savePriceData} /> :
                !isStockMissing ? <StockList date={data} price={price} deleteStockData={deleteStockData} /> : null
            }
          </div>
          {isStockMissing && !isActive ? <AddButton tileNo={tileNo} onClick={changeActiveTile} /> : null}
        </div>
      )
    }
  }
export default Tiles


const CloseButton = ({ tileNo, onClick = () => { } }) => {
  return (
    <span
      className='delete-button'
      onClick={() => onClick(tileNo)}>
      <i className='material-icons mini-icon'>close</i>
    </span>
  )
}

const AddButton = ({ tileNo, onClick = () => { } }) => {
  return (
    <span
      className='add-button'
      onClick={() => onClick(tileNo)}>
      <i className='material-icons mini-icon'>add</i>
    </span>
  )
}
