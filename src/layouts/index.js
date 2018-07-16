import React from 'react'
import PropTypes from 'prop-types'

import 'semantic-ui-css/semantic.min.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Helmet from 'react-helmet'
import Header from '../components/header'
import {Container} from 'semantic-ui-react'
import styled, {injectGlobal} from 'styled-components'


const Content = styled.div`
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
      banner={data.banner.childImageSharp.resolutions}
      siteTitle={data.site.siteMetadata.title}
    />
    <Content>
      {children()}
    </Content>
  </div>
)

injectGlobal`

html {
  min-height: 100%;
}

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
    },

    banner: file(relativePath: { regex: "/banner.png/" }) {
      childImageSharp {
        resolutions(width: 960) {
          ...GatsbyImageSharpResolutions_withWebp_noBase64
      }
    }
  }
  }
`
