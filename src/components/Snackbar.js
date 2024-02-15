import React from 'react'

const Snackbar = ({ message}) => {
  return (
    <div className="snackbar z-10">
      <p className='text-orange-900'>{message}</p>
    </div>
  )
}

export default Snackbar
