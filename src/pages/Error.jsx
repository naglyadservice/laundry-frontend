import React from 'react'
import { Link } from 'react-router-dom'

export default function Error({ title }) {
  return (
    <div className='loader'>
      <div className="error">{title}</div>
      <div className="buttons buttons-column">
        <Link to="/wash" className="btn">На головну</Link>
      </div>
    </div>
  )
}
