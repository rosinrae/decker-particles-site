import React from 'react'
import Link from './link'
import styled from 'styled-components'
import {Nav, NavItem, NavDropdown, DropdownItem} from './nav'
import {Menu, Dropdown} from 'semantic-ui-react'
import logo from '../assets/logo/decker-particles-text.svg'


const StyledHeader = styled.header`
background: black;
margin-bottom: 1.45rem;
align: center;
`

const Wrapper = styled.div`
margin: 0 auto;
max-width: 960px;
padding: 1.45rem 1.0875rem;
display: flex;
`

const Title = styled.h1`
margin: auto 0;
`

const TitleLink = Link.extend`
color: white;
:hover {
  color: white;
}
`

const Logo = styled.img`
  width: 4em;
  height: auto;
  position: absolute;
  left: -4em;
`

const Header = ({siteTitle}) => (
  <StyledHeader>
    <Wrapper>
      <Title>
        <TitleLink to='/'>
          {siteTitle}
        </TitleLink>
      </Title>
      <Nav>
        <NavDropdown text="Technology" >
          <NavItem to="/coatings/">
            MegaParticle™ Coatings
          </NavItem>
          <NavItem to="/equipment/">
            MegaBore™ Equipment
          </NavItem>
        </NavDropdown>
        <NavItem to="/contact/">Contact</NavItem>
        <NavItem to="/about/">About</NavItem>
        <NavItem to="/gallery/">Gallery</NavItem>
      </Nav>
    </Wrapper>
  </StyledHeader>
)

export default Header
