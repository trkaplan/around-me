import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { findPlaceFromText } from "../../actionCreators"
import PlaceList from "../../components/PlaceList"
import dummyPlaceList from "../../data/dummyPlaceList.json"

class SearchResults extends Component {
  componentDidMount() {
    const { getAPIData, searchTerm } = this.props
    getAPIData(searchTerm)
  }

  render() {
    return (
      <div>
        <h1>Search Results</h1>
        <PlaceList data={dummyPlaceList} />
      </div>
    )
  }
}
SearchResults.propTypes = {
  getAPIData: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.searchTerm]
    ? state.apiData[ownProps.searchTerm]
    : {}
  return {
    rating: apiData.rating,
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = dispatch => ({
  getAPIData: searchTerm => dispatch(findPlaceFromText(searchTerm))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults)
