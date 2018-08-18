import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Message, Loader } from "semantic-ui-react"
import { findPlaceFromText } from "../../actionCreators"
import PlaceList from "../../components/PlaceList"

class SearchResults extends Component {
  componentDidMount() {
    const { getAPIData, searchTerm } = this.props
    getAPIData(searchTerm)
  }

  render() {
    const { apiData, isLoading } = this.props
    return (
      <div>
        <h1>Search Results</h1>
        {isLoading && <Loader active inline="centered" />}
        {!isLoading &&
          apiData.toString() === "" && (
            <Message warning content="No places found around:(" />
          )}
        {!isLoading && apiData && <PlaceList places={apiData} />}
      </div>
    )
  }
}
SearchResults.propTypes = {
  getAPIData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  apiData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        imageURL: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        rate: PropTypes.number.isRequired,
        favourited: PropTypes.bool
      }).isRequired
    )
  ]).isRequired,
  searchTerm: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  apiData: state.apiData,
  location: state.location,
  isLoading: state.isLoading
})

const mapDispatchToProps = dispatch => ({
  getAPIData: searchTerm => dispatch(findPlaceFromText(searchTerm))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults)
