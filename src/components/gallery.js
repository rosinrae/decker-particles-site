import React from 'react'
import ImageGallery from 'react-image-gallery'
import styled from 'styled-components'

const maxWidth = (images) => Math.max(...images.map(x => x.width))
const maxHeight = (images) => Math.max(...images.map(x => x.height))

const Gallery = styled(ImageGallery)`
  width: ${props => maxWidth(props.items)}px;
  height: ${props => {console.log("foo"); return maxHeight(props.items)}}px;
`

export default Gallery
