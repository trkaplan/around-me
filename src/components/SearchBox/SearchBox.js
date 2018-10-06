import React, { Component } from "react"
import { withRouter } from "react-router"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import AsyncSelect from "react-select/lib/Async"
import uuid from "uuid/v4"
import store from "../../store"
import { setSearchTerm, fetchLocation } from "../../actionCreators"
import fetchPredictions from "../../utils/fetchPredictions"
import debounce from "../../utils/debouncer"

class SearchBox extends Component {
  state = {
    sessionToken: uuid()
  }

  componentDidMount() {
    store.dispatch(fetchLocation())
  }

  getSuggestions = async term => {
    if (!term) {
      return Promise.resolve({ options: [] })
    }
    const { sessionToken } = this.state
    const { location } = this.props
    return fetchPredictions({
      sessionToken,
      term,
      location
    })
  }

  handleOnKeyDown = ev => {
    if (ev.key === "Enter") {
      const keyword = ev.target.value
      this.searchPlace(keyword)
    }
  }

  handleOnChange = ev => {
    const placeId = ev.value
    const { history } = this.props
    history.push(`/place/${placeId}`)
  }

  searchPlace = keyword => {
    store.dispatch(setSearchTerm(keyword))
    const { history } = this.props
    history.push(`/search/${keyword}`)
  }

  render() {
    const { searchTerm } = this.props

    return (
      <div>
        <AsyncSelect
          autoFocusFirstOption={false}
          closeMenuOnSelect={false}
          placeholder="Search..."
          value={searchTerm}
          onKeyDown={this.handleOnKeyDown}
          onChange={this.handleOnChange}
          clearable
          loadOptions={debounce(this.getSuggestions, 500)}
          defaultValue={{ label: "Select Place", value: 0 }}
          valueKey="value"
          labelKey="label"
        />
      </div>
    )
  }
}

SearchBox.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  searchTerm: PropTypes.string.isRequired
}
const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  location: state.location
})

export default withRouter(connect(mapStateToProps)(SearchBox))
