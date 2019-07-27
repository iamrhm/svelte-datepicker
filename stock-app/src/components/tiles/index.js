import React from 'react'

import './tiles.css'

const Tiles = ({ displayText }) => {
  return (
    <div className='tiles-container'>
      <span className='tiles'>
        {displayText}
      </span>
    </div>
  )
}
export default Tiles