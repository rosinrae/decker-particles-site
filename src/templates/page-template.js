import React from "react"
import styled from "styled-components"
import BasicPage from "../components/basic-page"
import Img from "gatsby-image"
import Gallery, { GalleryImage } from "../components/gallery"
import rehypeReact from "rehype-react"
import Link from "gatsby-link"

const accessOrEmptyString = (obj, x) => obj.hasOwnProperty(x) ? obj[x] : ""

const PageLink = styled(Link).attrs({
  to: (props => props.href || "#")
})`
  text-decoration: underline;
`

// need renderAst to have access to our graphql data
const makeRenderer = (data) => {


  let Image = ({name, caption}) => {
    return data[name].childImageSharp.resolutions ?
          <Img resolutions={data[name].childImageSharp.resolutions} /> :
          <Img sizes={data[name].childImageSharp.sizes} />
  }

  let ContextGalleryImage = (props) => {
    return(
    <GalleryImage resolutions={data[props.name].childImageSharp.resolutions} {...props} />
  )}

  return new rehypeReact({
    createElement: React.createElement,
    components: {
      "image-custom" : Image,
      "gallery-image": ContextGalleryImage,
      "gallery"   : Gallery,
      a           : PageLink,

    }
  }).Compiler
}

const imagesFromProps = (data) => [
  data["img1"],
  data["img2"],
  data["img3"],
  data["img4"],
  data["img5"],
  data["img6"],
  data["img7"],
  data["img8"],
  data["img9"],
  data["img10"],
  data["img11"],
  data["img12"],
  data["img13"],
  data["img14"],
  data["img15"],
].map(img => <Img resolutions={img.childImageSharp.resolutions} />)

export default ({ data, }) => {
  const { markdownRemark: { frontmatter, htmlAst }} = data
  
  const renderAst = makeRenderer(data)

  return (
    <BasicPage
      title={frontmatter.title}
      footerMsg={frontmatter.footer}
    >
      { renderAst(htmlAst) }

    </BasicPage>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: {eq: $path }}) {
      htmlAst
      frontmatter {
        path
        title
        footer
        hasGallery
      }
    }

    img1: file(relativePath: {regex: "/gallery1/"}) {
      childImageSharp {
        resolutions(width:700) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img2: file(relativePath: {regex: "/gallery2/"}) {
      childImageSharp {
        resolutions(width:700) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img3: file(relativePath: {regex: "/gallery3/"}) {
      childImageSharp {
        resolutions(width:700) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img4: file(relativePath: {regex: "/gallery4/"}) {
      childImageSharp {
        resolutions(width:700) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img5: file(relativePath: {regex: "/gallery5/"}) {
      childImageSharp {
        resolutions(width:700) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img6: file(relativePath: {regex: "/gallery6/"}) {
      childImageSharp {
        resolutions(width:700) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img7: file(relativePath: {regex: "/gallery7/"}) {
      childImageSharp {
        resolutions(width:700) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img8: file(relativePath: {regex: "/gallery8/"}) {
      childImageSharp {
        resolutions(width:700) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img9: file(relativePath: {regex: "/gallery9/"}) {
      childImageSharp {
        resolutions(width:700) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img10: file(relativePath: {regex: "/gallery10/"}) {
      childImageSharp {
        resolutions(width:700) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img11: file(relativePath: {regex: "/gallery11/"}) {
      childImageSharp {
        resolutions(width:700) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img12: file(relativePath: {regex: "/gallery12/"}) {
      childImageSharp {
        resolutions(width:700) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img13: file(relativePath: {regex: "/gallery13/"}) {
      childImageSharp {
        resolutions(width:700) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img14: file(relativePath: {regex: "/gallery14/"}) {
      childImageSharp {
        resolutions(width:700) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img15: file(relativePath: {regex: "/gallery15/"}) {
      childImageSharp {
        resolutions(width:700) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },

    sprayGunModel: file(relativePath: {regex: "/spray-gun-model.png/"}) {
      childImageSharp {
        resolutions(width:500) {
          ...GatsbyImageSharpResolutions_withWebp_tracedSVG
      }
    }
  }

  }
`
