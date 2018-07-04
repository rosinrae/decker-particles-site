import React from 'react'
import BasicPage from '../components/basic-page'
import {List, Header} from 'semantic-ui-react'
import {TM, Title, Subtitle} from '../components/text'
import Gallery from '../components/gallery'
import Footer from '../components/footer'

import Img from 'gatsby-image'

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
].map(img => img.childImageSharp.resolutions)

const renderImg = (resolutions) => {
  return <Img resolutions={resolutions} />
}

export default ({data}) => (
  <BasicPage title="">
      <Title>Welcome to the world of <TM>MegaParticle</TM> coatings</Title>
      <Subtitle>"the most important innovation in powder since the spray gun"</Subtitle>
      <Gallery showFullscreenButton={false}
            showBullets={true}
            showThumbnails={false}
            renderItem={renderImg}
            items={imagesFromProps(data)} />
    <article>
          <h4><TM>MegaParticle</TM> coatings:</h4>
          <ul>
            <li>Solid, flake-shaped particles</li>
            <li>Up to an inch across</li>
            <li>Co-curable with powder coatings</li>
            <li>Available in all colors and glosses</li>
            <li>Applied like powder by elecrostatic spray</li>
          </ul>
          <h4><TM>MegaBore</TM> spray equipment:</h4>
          <ul>
            <li>Designed to apply both solid flake and powder</li>
            <li>Operates on compressed air</li>
            <li>Corona electrostatic charging</li>
            <li>Rugged and inexpensive</li>
          </ul>
    </article>
    <Footer>Call <big>208-881-8245</big> to learn more</Footer>
  </BasicPage>
)

export const query = graphql`
  query imageQuery {
    img1: file(relativePath: {regex: "/gallery01/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions
        }
      }
    },
    img2: file(relativePath: {regex: "/gallery02/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions
        }
      }
    },
    img3: file(relativePath: {regex: "/gallery03/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions
        }
      }
    },
    img4: file(relativePath: {regex: "/gallery04/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions
        }
      }
    },
    img5: file(relativePath: {regex: "/gallery05/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions
        }
      }
    },
    img6: file(relativePath: {regex: "/gallery06/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions
        }
      }
    },
    img7: file(relativePath: {regex: "/gallery07/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions
        }
      }
    },
    img8: file(relativePath: {regex: "/gallery08/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions
        }
      }
    },
    img9: file(relativePath: {regex: "/gallery09/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions
        }
      }
    },
    img10: file(relativePath: {regex: "/gallery10/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions
        }
      }
    },
    img11: file(relativePath: {regex: "/gallery11/"}) {
      childImageSharp {
        resolutions(width:800) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`
