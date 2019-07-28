
import React from 'react'
import './slot.css'

const Slots = ({ data }) => {
  return (
    <div className='default-slot-container'>
      <span className='default-slot'>
        {data}
      </span>
    </div>
  )
}
export default Slots