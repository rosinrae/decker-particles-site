import React from 'react'
import PropTypes from 'prop-types'

import 'semantic-ui-css/semantic.min.css'
import 'react-image-gallery/styles/css/image-gallery.css'

import Helmet from 'react-helmet'
import Header from '../components/header'
import {Container} from 'semantic-ui-react'
import styled from 'styled-components'


const Content = styled.div`
margin: 0 auto;
max-width: 960px !important;
padding: 0px 1.0875rem 1.45rem;
padding-top: 0;
`

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'powder coatings' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Content>
      {children()}
    </Content>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
