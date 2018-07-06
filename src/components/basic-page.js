import React from 'react'
import styled from 'styled-components'
import Footer from './footer'

const Title = styled.h1`

`

const Wrapper = styled.article`
`

const BasicPage = ({title, footerMsg, children}) => {
    
  return (
  <div>
    {children}
    <Footer>{footerMsg}</Footer>
  </div>
  )
}

export default BasicPage
