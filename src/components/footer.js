import React from 'react'
import styled from 'styled-components'

const FooterText = styled.h4`
`

const StyledFooter = styled.footer`
  text-align: center;
  position: fixed;
  bottom: 0px;
  width: 50%;
  border-top: 2px solid rgb(30, 61, 125);
  padding: 1em;
  background: #96bcff;
  color: black;
  font-style: italic;
`

const Footer = ({children}) => {
  //<FooterText>{children}</FooterText>
  return children ? (
    <StyledFooter>
      <FooterText>{children}</FooterText>
    </StyledFooter>
  ) : null
}

export default Footer;
