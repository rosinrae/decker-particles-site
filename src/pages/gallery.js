import React from 'react'
import BasicPage from '../components/basic-page'

import Gallery from '../components/gallery'
import Img from 'gatsby-image'

const imagesFromProps = (data) => [
  data["img1"],
  data["img2"],
  data["img3"],
  data["img4"],
  data["img5"],
].map(img => img.childImageSharp.resolutions)

//const extractImageProps = ({childImageSharp: {resolutions: {src, srcSet}}}) => {
//  return {original: src}
//}

const renderImg = (resolutions) => {
  return <Img resolutions={resolutions} />
}


export default ({data}) => {
  return (
  <BasicPage title="MegaParticle™ Coating Examples">
<Gallery showFullscreenButton={false}
      showBullets={true}
      showThumbnails={false}
      renderItem={renderImg}
      items={imagesFromProps(data)} />
  </BasicPage>
)}

export const query = graphql`
  query galleryQuery {
    img1: file(relativePath: {regex: "/gallery1/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions
        }
      }
    },
    img2: file(relativePath: {regex: "/gallery2/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions
        }
      }
    },
    img3: file(relativePath: {regex: "/gallery3/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions
        }
      }
    },
    img4: file(relativePath: {regex: "/gallery4/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions
        }
      }
    },
    img5: file(relativePath: {regex: "/gallery5/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`
