import React from "react"
import { Grid } from "semantic-ui-react"
import PropTypes from "prop-types"
import PlaceCard from "../PlaceCard"

const PlaceList = ({ data }) => (
  <Grid stackable columns={4}>
    {data.map(place => (
      <Grid.Column key={`place-${place.id}`}>
        <PlaceCard
          id={`/${place.id}`}
          imageURL={`/${place.src}`}
          name={place.name}
          rate={place.rate}
        />
      </Grid.Column>
    ))}
  </Grid>
)
PlaceList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string,
      name: PropTypes.string,
      rate: PropTypes.number,
      favourited: PropTypes.bool
    }).isRequired
  ).isRequired
}
export default PlaceList
