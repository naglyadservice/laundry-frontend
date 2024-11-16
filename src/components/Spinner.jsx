import React from 'react'

export default function Spinner(props) {
  return (
    <div className='loader'>
      <div className="loader-circle" {...props}></div>
    </div>
  )
}
