import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <p>There's nothing here!</p>
      <Link to="/">
        Back to Home
      </Link>
      </div>
  )
}

export default NotFound