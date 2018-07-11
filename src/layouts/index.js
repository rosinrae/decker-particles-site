import React from 'react'
import PropTypes from 'prop-types'

import 'semantic-ui-css/semantic.min.css'
import 'react-image-gallery/styles/css/image-gallery.css'

import Helmet from 'react-helmet'
import Header from '../components/header'
import {Container} from 'semantic-ui-react'
import styled, {injectGlobal} from 'styled-components'


const Content = styled.div`
margin: 0 auto;
max-width: 960px !important;
padding: 1.25em 1.0875rem 1.45rem;
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
    <Header
      logo={data.logo.childImageSharp.sizes} 
      siteTitle={data.site.siteMetadata.title}
    />
    <Content>
      {children()}
    </Content>
  </div>
)

injectGlobal`

  body {
    background: #edeeef;
  }
`

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        title
      }
    },

    logo: file(relativePath: { regex: "/logo/decker-particles-logo.png/" }) {
      childImageSharp {
        sizes(maxWidth: 128) {
          ...GatsbyImageSharpSizes_withWebp_noBase64
        }
      }
    }
  }
`
