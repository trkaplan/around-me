import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Message, Loader } from "semantic-ui-react"
import { findPlaceFromText } from "../../actionCreators"
import PlaceList from "../../components/PlaceList"
import extractTypeAndKeyword from "../../utils/search-utils"

class SearchResults extends Component {
  componentDidMount() {
    const { getAPIData, searchTerm } = this.props
    const { keyword, placeTypes } = extractTypeAndKeyword(searchTerm)
    getAPIData(keyword, placeTypes)
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
  apiData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string,
      rate: PropTypes.number.isRequired,
      favourited: PropTypes.bool
    }).isRequired
  ).isRequired,
  searchTerm: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  apiData: state.apiData,
  location: state.location,
  isLoading: state.isLoading
})

const mapDispatchToProps = dispatch => ({
  getAPIData: (searchTerm, placeTypes) =>
    dispatch(findPlaceFromText(searchTerm, placeTypes))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults)
