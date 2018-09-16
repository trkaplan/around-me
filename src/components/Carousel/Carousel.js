import React from "react"
import Slider from "react-slick"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Image } from "semantic-ui-react"
import media from "../../utils/media"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ImageWrapper = styled.div`
  height: 50vh;
  overflow: hidden;
`
const StyledImage = styled(Image)`
  ${media.tablet`width:100%`};
  width: 70%;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
`
const defaultSettings = {
  arrows: false,
  dots: false,
  infinite: false,
  speed: 300,
  variableWidth: false
}
const Carousel = ({ photos }) => (
  <Slider {...defaultSettings}>
    {photos.map(photo => (
      <ImageWrapper key={photo.id}>
        <StyledImage src={photo.url} />
      </ImageWrapper>
    ))}
  </Slider>
)

Carousel.defaultProps = {
  settings: {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 300
  }
}
Carousel.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  settings: PropTypes.shape({
    arrows: PropTypes.bool,
    dots: PropTypes.bool,
    infinite: PropTypes.bool,
    speed: PropTypes.number
  })
}
export default Carousel
