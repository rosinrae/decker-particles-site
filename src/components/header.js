import React from 'react'
import Link from './link'
import styled from 'styled-components'
import {Header as SemHeader} from 'semantic-ui-react'

const StyledHeader = styled(SemHeader)`
background: black;
margin-bottom: 1.45rem;
align: center;
`

const Wrapper = styled.div`
margin: 0 auto;
max-width: 960px;
padding: 1.45rem 1.0875rem;
`

const Title = styled.h1`
margin: 0;
`

const TitleLink = Link.extend`
color: white;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Wrapper>
      <Title>
        <TitleLink to='/'>
          {siteTitle}
        </TitleLink>
      </Title>
    </Wrapper>
  </StyledHeader>
)

export default Header
