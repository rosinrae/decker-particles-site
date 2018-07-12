import React from "react"
import styled from "styled-components"
import BasicPage from "../components/basic-page"
import Img from "gatsby-image"
import Gallery from "../components/gallery"


const accessOrEmptyString = (obj, x) => obj.hasOwnProperty(x) ? obj[x] : ""

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
].map(img => <Img resolutions={img.childImageSharp.resolutions} />)

export default ({ data, }) => {
  const { markdownRemark: { frontmatter, html }} = data
  return (
    <BasicPage
      title={frontmatter.title}
      footerMsg={frontmatter.footer}
    >
      { frontmatter.path === "/" ? <Gallery>{imagesFromProps(data)}</Gallery> : null}
      <div dangerouslySetInnerHTML={{ __html: html }} />

    </BasicPage>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: {eq: $path }}) {
      html
      frontmatter {
        path
        title
        footer
        hasGallery
      }
    }

    img1: file(relativePath: {regex: "/gallery01/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img2: file(relativePath: {regex: "/gallery02/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img3: file(relativePath: {regex: "/gallery03/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img4: file(relativePath: {regex: "/gallery04/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img5: file(relativePath: {regex: "/gallery05/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img6: file(relativePath: {regex: "/gallery06/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img7: file(relativePath: {regex: "/gallery07/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img8: file(relativePath: {regex: "/gallery08/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img9: file(relativePath: {regex: "/gallery09/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img10: file(relativePath: {regex: "/gallery10/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    },
    img11: file(relativePath: {regex: "/gallery11/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    }

  }
`
