import React from "react"
import PropTypes from "prop-types"
import PlaceCard from "../PlaceCard"
import StyledGrid from "./styled"

const PlaceList = ({ places }) => (
  <StyledGrid stackable columns={3}>
    {places &&
      places.map(place => (
        <StyledGrid.Column key={`place-${place.id}`}>
          <PlaceCard
            id={`/${place.id}`}
            imageURL={place.imageURL}
            name={place.name}
            rate={place.rate}
          />
        </StyledGrid.Column>
      ))}
  </StyledGrid>
)
PlaceList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
      favourited: PropTypes.bool
    }).isRequired
  ).isRequired
}
export default PlaceList
