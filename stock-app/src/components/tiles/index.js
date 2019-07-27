import React, { PureComponent } from 'react'

import './tiles.css'

class Tiles extends PureComponent {
  render() {
    const { data, isActive, tileNo, isStockMissing, price, inputPrice,
      changeActiveTile = () => { }, onInputChange = () => { }, savePriceData = () => { },
      deleteStockData = () => { } } = this.props
    if (tileNo === undefined || tileNo === undefined || changeActiveTile === undefined) {
      return (
        <div className='default-tiles-container'>
          <span className='default-tiles'>
            {data}
          </span>
        </div>
      )
    }
    else {
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

const Form = ({ inputPrice, onChange, onClick }) => {
  return (
    <React.Fragment>
      <div className='input-controll'>
        <input
          placeholder='A Missing Price'
          className='add-missing-price-input'
          type='text'
          value={inputPrice}
          onChange={(e) => onChange(e.target.value)} />
      </div>
      <span
        className='add-missing-value-button'
        onClick={() => onClick()}>
        <i className='material-icons mini-icon'>done</i>
      </span>
    </React.Fragment>
  )
}

const StockList = ({ date, price, deleteStockData }) => {
  return (
    <React.Fragment>
      <span className='stock-item'>
        <span className='stock-logo'>
          <span className='default-logo-circle'></span>
        </span>
        <span className='stock-price'>{price}M</span>
        <span
          className='delete-button'
          onClick={() => deleteStockData(date)}>
          <i className='material-icons mini-icon'>close</i>
        </span>
      </span>
    </React.Fragment>
  )
}