import React from 'react'
import Link from './link'
import styled from 'styled-components'
import {Header as SemHeader} from 'semantic-ui-react'
import {Nav, NavItem, NavDropdown, DropdownItem} from './nav'
import {Menu, Dropdown} from 'semantic-ui-react'


const StyledHeader = styled(SemHeader)`
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

const Header = ({ siteTitle }) => (
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
            MegaParticle Coatings
          </NavItem>
          <NavItem to="/equipment/">
            MegaBore Equipment
          </NavItem>
        </NavDropdown>
        <NavItem to="/contact/">contact</NavItem>
        <NavItem to="/about/">about</NavItem>
      </Nav>
    </Wrapper>
  </StyledHeader>
)

export default Header
