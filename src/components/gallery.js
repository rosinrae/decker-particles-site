import React from 'react'
import Slider from 'react-slick'
import Img from 'gatsby-image'
import styled from 'styled-components'

const maxWidth = (images) => Math.max(...images.map(x => x.width))
const maxHeight = (images) => Math.max(...images.map(x => x.height))

//const Gallery = styled(GalleryWrapper)`
//`

const Gallery = styled(Slider).attrs({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  slidesToScroll: 1,
  centerMode: true,
})`
width: ${props => maxWidth(props.children)}px;
height: ${props => maxHeight(props.children)}px;
background: red;
`


export default Gallery
