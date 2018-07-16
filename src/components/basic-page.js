import React from 'react'
import styled from 'styled-components'
import Footer from './footer'

const Title = styled.h1`

`

const Wrapper = styled.section`
margin: 0 auto;
min-height: 400px;
margin-bottom: 2em;
max-width: 960px !important;
padding: 1.25em 1.0875rem 1.45rem;
`

const BasicPage = ({title, footerMsg, children}) => {
    
  return (
  <Wrapper>
    {children}
    <Footer>{footerMsg}</Footer>
  </Wrapper>
  )
}

export default BasicPage
