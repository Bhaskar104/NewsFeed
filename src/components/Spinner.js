import React from 'react'
import loading from '../img/Growing ring.gif'

export default function Spinner() {
  return (
    <div className='text-center'>
      <img className='my-3' src={loading} alt="loading" />
    </div>
  )
}
