import React from 'react'

import './form.css'

const Form = ({ inputPrice, onChange, onClick }) => {
  return (
    <React.Fragment>
      <div className='input-controll'>
        <input
          placeholder='A Missing Price'
          className='add-missing-price-input'
          type='number'
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
export default Form