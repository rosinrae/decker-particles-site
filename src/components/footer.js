import React from 'react'
import styled from 'styled-components'

const FooterText = styled.p`
  font-size: 2rem;
`

const Footer = ({children}) => (
  <div>
    <hr />
    <FooterText>{children}</FooterText>
  </div>
)

export default Footer;
