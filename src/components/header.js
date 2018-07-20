import React from 'react'
import Link from './link'
import styled from 'styled-components'
import {Nav, NavItem, NavDropdown, DropdownItem} from './nav'
import {Menu, Dropdown} from 'semantic-ui-react'
import logo from '../assets/logo/decker-particles-text.svg'
import Img from 'gatsby-image'


const StyledHeader = styled.header`
margin-bottom: 1.45rem;
align: center;
background: #96bcff;
`
//background: #306bac;

const Banner = styled.div`
overflow: hidden;
direction: rtl;
height: 128px;
`


const Wrapper = styled.div`
margin: 0 auto;
max-width: 960px;
display: flex;
flex-direction: column;
align-items: stretch;
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

const Header = ({siteTitle, logo, banner}) =>{
  return <StyledHeader>
    <Wrapper>
      <Banner>
        <Link to="/"><Img resolutions={banner} /></Link>
      </Banner>
      <Nav>
        <NavItem to="/">Home</NavItem>
        <NavDropdown text="Technology" >
          <NavItem to="/coatings/">
            MegaParticle™ Coatings
          </NavItem>
          <NavItem to="/equipment/">
            MegaBore™ Equipment
          </NavItem>
        </NavDropdown>
        <NavDropdown text="Order" >
          <NavItem to="/order/stock/">
            Stock MegaParticle™ Coatings 
          </NavItem>
          <NavItem to="/order/custom/">
            Custom MegaParticle™ Coatings
          </NavItem>
          <NavItem to="/equipment/">
            MegaBore™ Equipment
          </NavItem>
        </NavDropdown>
        <NavItem to="/contact/">Contact Us</NavItem>
        <NavItem to="/about/">About Us</NavItem>
        <NavItem to="/gallery/">Gallery</NavItem>
      </Nav>
    </Wrapper>
  </StyledHeader>
}

export default Header
