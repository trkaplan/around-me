import React from "react"
import { Grid } from "semantic-ui-react"
import PropTypes from "prop-types"
import PlaceCard from "../PlaceCard"

const PlaceList = ({ places }) => (
  <Grid stackable columns={4}>
    {places &&
      places.map(place => (
        <Grid.Column key={`place-${place.id}`}>
          <PlaceCard
            id={`/${place.id}`}
            imageURL={place.imageURL}
            name={place.name}
            rate={place.rate}
          />
        </Grid.Column>
      ))}
  </Grid>
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
