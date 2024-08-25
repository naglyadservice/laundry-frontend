import React from 'react'

export default function Error({ title }) {
  return (
    <div className='loader'>
      <div className="error">{title}</div>
    </div>
  )
}
