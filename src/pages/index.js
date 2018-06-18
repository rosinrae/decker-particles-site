import React from 'react'
import BasicPage from '../components/basic-page'
import Gallery from '../components/gallery'
import blackWhiteFlake from '../assets/black-white-flake.jpg'
import whiteBlackFlake from '../assets/white-black-flake.jpg'
import candySpeckle from '../assets/candy-speckle.jpg'
import stoneSpeckle from '../assets/stone-speckle.jpg'
import fryingPanBase from '../assets/frying-pan-base.jpg'

const imageProps = (image) => {
  let filename = image.split('/').pop()
  let alt = (filename.split('.')[0]).replace(/-/g, ' ')
  return {
    original: image,
    originalAlt: alt 
  }
}

const images = [blackWhiteFlake, whiteBlackFlake, candySpeckle, stoneSpeckle, fryingPanBase].map(imageProps)

const IndexPage = () => (
  <BasicPage title="">
    <Gallery showFullscreenButton={false} items={images} />
  </BasicPage>
)

export default IndexPage
