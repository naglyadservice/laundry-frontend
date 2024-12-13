import React from 'react'
import Spinner from './Spinner'


function ExternalRedirect({ url }) {
  React.useEffect(() => {
    window.location.assign(url)
  }, [])

  return (
    <Spinner />
  )
}

export default ExternalRedirect