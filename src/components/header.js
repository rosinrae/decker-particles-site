import React from 'react'
import Link from './link'
import styled from 'styled-components'
import {Nav, NavItem, NavDropdown, DropdownItem} from './nav'
import {Menu, Dropdown} from 'semantic-ui-react'
import logo from '../assets/logo/decker-particles-text.svg'
import Img from 'gatsby-image'


const StyledHeader = styled.header`
background: black;
margin-bottom: 1.45rem;
align: center;
background: #82afff;
`
//background: #306bac;

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
`


const Wrapper = styled.div`
margin: 0 auto;
max-width: 960px;
height: 128px;
padding: 1.45rem 1.0875rem;
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

const Header = ({siteTitle, logo}) =>{
  console.log(logo)
  return <StyledHeader>
    <Wrapper>
      <Banner>
        <Title>
          <TitleLink to='/'>
            {siteTitle}
          </TitleLink>
        </Title>
        <Img sizes={logo} />
      </Banner>
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
}

export default Header
