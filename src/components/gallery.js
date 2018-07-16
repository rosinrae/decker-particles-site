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
  slidesToShow: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
})`
height: ${props => maxHeight(props.children)}px;


  .slick-next {
    :before {
      color: black;
    }
  }

  .slick-prev{
    :before {
      color: black;
    }
  }

`

const ImageWrapper = styled(Img)`
width: 60%;
`


const Title = styled.h3`

`

const Description = styled.p`

`

const Caption = styled.section`
  width: 40%;
  padding: 1em;
  text-align: center;

  ${Title} {
    font-style: italic;

    quotes: "“" "”" "‘" "’";

    :before {
      content: open-quote;
    }

    :after {
      content: close-quote;
    }
  }

  ${Description} {

  }
`

const Wrapper = styled.div`
display: flex;
flex-direction: row;
`

export const GalleryImage = ({resolutions, title, description}) => (
  <Wrapper>
    <ImageWrapper resolutions={resolutions} />
    <Caption>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Caption>
  </Wrapper>
)
  


export default Gallery
