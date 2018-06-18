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
  background: inherit !important;
  margin: .20em 0 -.5em auto !important;
  align-self: basis;
`
