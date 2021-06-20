import React, { PureComponent } from 'react'

import Form from '../form'
import StockList from '../stocklist'

import './tiles.css'

class Tiles extends PureComponent {
  render() {
    const { data, isActive, tileNo, isStockMissing, price, inputPrice, isToday,
      changeActiveTile = () => { }, onInputChange = () => { }, savePriceData = () => { },
      deleteStockData = () => { } } = this.props
    return (
      <div className='tile-container'>
        {<span className='tile-header'>
          {
            isToday ? <span className='today-tile-title'>
              {data}
            </span> : <span className='tile-title'>
                {data}
              </span>
          }
          {isActive && data !== ''? <CloseButton tileNo={tileNo} onClick={changeActiveTile} /> : null}
        </span>
        }<div className='tile-body'>
          {
            isActive && data !== ''? <Form inputPrice={inputPrice} onChange={onInputChange} onClick={savePriceData} /> :
              !isStockMissing ? <StockList date={data} price={price} deleteStockData={deleteStockData} /> : null
          }
        </div>
        {isStockMissing && !isActive && data !== '' ? <AddButton tileNo={tileNo} onClick={changeActiveTile} /> : null}
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
