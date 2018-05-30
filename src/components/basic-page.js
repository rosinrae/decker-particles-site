import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`

`

const Body = styled.div`

`

const BasicPage = ({title, children}) => (
  <div>
    <Title>{title}</Title>
    {children}
  </div>
)

export default BasicPage
