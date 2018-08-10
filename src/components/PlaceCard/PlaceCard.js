import React from "react"
import { Image } from "semantic-ui-react"
import PropTypes from "prop-types"

import { Wrapper, Title, BottomBar, Rate, Actions } from "./styled"

const PlaceCard = ({ imageURL, name, rate }) => (
  <Wrapper>
    <Image src={imageURL} />
    <BottomBar>
      <Title>{name}</Title>
      <Actions>
        <Rate>{rate}</Rate>
      </Actions>
    </BottomBar>
  </Wrapper>
)
PlaceCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired
}
export default PlaceCard
