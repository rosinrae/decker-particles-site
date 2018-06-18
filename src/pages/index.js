import React from 'react'
import BasicPage from '../components/basic-page'
import Gallery from '../components/gallery'
import img1 from '../assets/black-white-flake-large.jpg'
import img2 from '../assets/white-black-flake-large.jpg'
import img3 from '../assets/candy-speckle-large.jpg'
import img4 from '../assets/stone-speckle-large.jpg'
import img5 from '../assets/frying-pan-base-large.jpg'

import thumb1 from '../assets/thumbnails/black-white-flake.png'
import thumb2 from '../assets/thumbnails/white-black-flake.png'
import thumb3 from '../assets/thumbnails/candy-speckle.png'
import thumb4 from '../assets/thumbnails/stone-speckle.png'
import thumb5 from '../assets/thumbnails/frying-pan-base.png'

const thumbnails = [thumb1, thumb2, thumb3, thumb4, thumb5]

const imageProps = (image, index) => {
  let filename = image.split('/').pop()
  let alt = (filename.split('.')[0]).replace(/-/g, ' ')
  let thumbnail = thumbnails[index]
  return {
    original: image,
    originalAlt: alt,
    thumbnail: thumbnail
  }
}

const images = [img1, img2, img3, img4, img5].map(imageProps)

const IndexPage = () => (
  <BasicPage title="">
    <Gallery showFullscreenButton={false}
      showBullets={true}
      showThumbnails={false}
      items={images} />
  </BasicPage>
)

export default IndexPage
