import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Message, Loader, Card, Icon } from "semantic-ui-react"
import { withRouter } from "react-router"
import styled from "styled-components"
import Carousel from "../../components/Carousel"
import { fetchPlaceDetails, clearPlaceDetails } from "../../actionCreators"
import rem from "../../utils/style-helper"
import media from "../../utils/media"

const StyledCard = styled(Card)`
  &&& {
    max-width: ${rem(1000)};
    margin: ${rem(32)} auto;
    ${media.desktop`max-width: inherit;
    margin: inherit`};
  }
`

const Rating = styled.div`
  border-radius: ${rem(4)};
  min-width: ${rem(24)};
  display: inline-block;
  padding: ${rem(2)} ${rem(4)};
  text-align: center;
  letter-spacing: ${rem(1)};
  margin-right: ${rem(12)};
  &&& .star.icon {
    opacity: 1;
    color: #ffb70a;
    cursor: default;
  }
`

class PlaceDetails extends Component {
  componentDidMount() {
    const { fetchData } = this.props
    fetchData()
  }

  componentWillUnmount() {
    const { clearData } = this.props
    clearData()
  }

  render() {
    const { apiData, isLoading } = this.props
    const { phone } = apiData || {}
    return (
      <div>
        {isLoading && <Loader active inline="centered" />}
        {!isLoading &&
          !apiData && (
            <Message warning content="Couldn't get place details :(" />
          )}
        {!isLoading &&
          apiData && (
            <StyledCard fluid>
              <Carousel photos={apiData.photos} />
              <Card.Content>
                <Card.Header>{apiData.name}</Card.Header>
                <Card.Meta>
                  <Rating>
                    <Icon name="star" /> {apiData.rating}
                  </Rating>
                  {phone && <Icon name="phone" />}
                  {phone}
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>{apiData.formatted_address}</Card.Content>
            </StyledCard>
          )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  apiData: state.placeDetails,
  isLoading: state.isLoading
})

const mapDispatchToProps = (dispatch, { match }) => ({
  fetchData: () => {
    dispatch(fetchPlaceDetails({ id: match.params.query }))
  },
  clearData: () => {
    dispatch(clearPlaceDetails())
  }
})

PlaceDetails.defaultProps = {
  apiData: null
}

PlaceDetails.propTypes = {
  fetchData: PropTypes.func.isRequired,
  clearData: PropTypes.func.isRequired,
  apiData: PropTypes.shape({
    phone: PropTypes.string.isRequired,
    name: PropTypes.string,
    rating: PropTypes.number.isRequired
  }),
  isLoading: PropTypes.bool.isRequired
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PlaceDetails)
)
