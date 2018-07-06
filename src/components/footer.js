import React from 'react'
import styled from 'styled-components'

const FooterText = styled.p`
`

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 2em;
  
  width: 50%;
  height: 1em;
  margin: auto auto;
  background: white;
  border-top: 1px solid black
  padding: 1em;
`

const Footer = ({children}) => {
  //<FooterText>{children}</FooterText>
  return children === undefined? null: (
    <StyledFooter>
      <FooterText>{children}</FooterText>
    </StyledFooter>
  )
}

export default Footer;
