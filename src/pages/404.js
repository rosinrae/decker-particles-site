import React from 'react'
import Link from '../components/link'

const NotFoundPage = () => (
  <div>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist.</p>
    <Link to="/">Return to home.</Link>
  </div>
)

export default NotFoundPage
