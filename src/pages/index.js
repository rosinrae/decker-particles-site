import React from 'react'
import Link from '../components/link'
import BasicPage from '../components/basic-page'

const IndexPage = () => (
  <BasicPage title="">
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </BasicPage>
)

export default IndexPage
