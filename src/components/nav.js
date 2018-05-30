import React from 'react'
import {Menu} from 'semantic-ui-react'
import styled from 'styled-components'
import Link from './link'


const NavLink = Link.extend`
  color: white;
`

const ItemWrapper = styled(Menu.Item)`

`

export const NavItem = ({to, children}) => (
  <ItemWrapper>
    <NavLink to={to}>{children}</NavLink>
  </ItemWrapper>
)

export const Nav = styled(Menu).attrs({
  as: 'nav',
  borderless: true,
  stackable: true,
})`
  
  background: inherit !important;
`
