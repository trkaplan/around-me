import React from "react"
import PlaceList from "../../components/PlaceList"
import dummyPlaceList from "../../data/dummyPlaceList.json"

class SearchResults extends React.Component {
  state = {}

  render() {
    return <PlaceList data={dummyPlaceList} />
  }
}
export default SearchResults
