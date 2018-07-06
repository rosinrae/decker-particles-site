import React from "react"
import styled from "styled-components"
import BasicPage from "../components/basic-page.js"

const accessOrEmptyString = (obj, x) => obj.hasOwnProperty(x) ? obj[x] : ""

export default ({ data, }) => {
  const { markdownRemark: { frontmatter, html }} = data
  return (
    <BasicPage
      title={frontmatter.title}
      footerMsg={frontmatter.footer}
    >
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
  }
`
