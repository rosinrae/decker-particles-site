import React from 'react'
import {Menu, Dropdown} from 'semantic-ui-react'
import styled from 'styled-components'
import Link from './link'


const NavLink = Link.extend`
  color: white;
  :hover {
    color: white
  }
`

const ItemWrapper = styled(Menu.Item)`

`

const DropdownItemWrapper = styled(Dropdown.Item)`
  background: black !important;
`

export const NavDropdown = styled(Dropdown).attrs({
  as: () => Menu.Item
})`
  color: white !important;
`

export const NavItem = ({to, drop=false, children}) => (
  drop ? 
  (<DropdownItemWrapper>
    <NavLink to={to}>{children}</NavLink>
  </DropdownItemWrapper>) :
  (<ItemWrapper>
    <NavLink to={to}>{children}</NavLink>
  </ItemWrapper>)
)

export const Nav = styled(Menu).attrs({
  as: 'nav',
  borderless: true,
  stackable: true,
})`
  
  background: inherit !important;
`
