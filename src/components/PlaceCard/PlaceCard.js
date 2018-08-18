import React from "react"
import PropTypes from "prop-types"
import FavouriteButton from "../FavouriteButton"

import {
  Wrapper,
  ImageFrame,
  StyledImage,
  Title,
  BottomBar,
  Rate,
  Actions
} from "./styled"

const PlaceCard = ({ imageURL, name, rate, favourited }) => (
  <Wrapper>
    <ImageFrame>
      <StyledImage src={imageURL} />
    </ImageFrame>
    <BottomBar>
      <Title>{name}</Title>
      <Actions>
        <Rate>{rate}</Rate>
        <FavouriteButton favourited={favourited} />
      </Actions>
    </BottomBar>
  </Wrapper>
)
PlaceCard.defaultProps = {
  favourited: false
}
PlaceCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  favourited: PropTypes.bool
}
export default PlaceCard
