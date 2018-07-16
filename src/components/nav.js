import React from 'react'
import {Menu, Dropdown} from 'semantic-ui-react'
import styled from 'styled-components'
import Link from './link'


const StyledDropdown = styled(Dropdown).attrs({
  className: 'item'
})`
  color: white !important;
`


export const NavItem = styled(Menu.Item).attrs({
  as: () => Link,
})`
  color: white !important;
  &:hover {
    background: rgba(255, 255, 255, .4);
  }
  `

export const DropdownItem = styled(Dropdown.Item).attrs({
  as: () => Link,
})`
color: white !important
`

export const NavDropdown = (props) => (
  <StyledDropdown {...props}>
    <Dropdown.Menu>
      {props.children}
    </Dropdown.Menu>
  </StyledDropdown>
)

export const Nav = styled(Menu).attrs({
  as: 'nav',
  borderless: true,
  stackable: true,
})`
  background: rgba(30, 61, 125) !important;
  margin: 0 !important;
  align-self: flex-start;
  border-radius: 0px !important;
  width: 100%;  
`
