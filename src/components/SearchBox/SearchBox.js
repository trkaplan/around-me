import React, { Component } from "react"
import { withRouter } from "react-router"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import AsyncSelect from "react-select/lib/Async"
import axios from "axios"
import uuid from "uuid/v4"
import store from "../../store"
import { setSearchTerm } from "../../actionCreators"
import getCurrentPosition from "../../utils/geolocation"
import GOOGLE_API_KEY from "../../config/keys"
import debounce from "../../utils/debouncer"

class SearchBox extends Component {
  state = {
    sessionToken: uuid()
  }

  getSuggestions = async term => {
    const { sessionToken } = this.state
    const location = await getCurrentPosition()
    const { latitude, longitude } = location.coords
    if (!term) {
      return Promise.resolve({ options: [] })
    }
    return axios
      .get(`/autocomplete/json`, {
        headers: { "Content-Type": "application/json" },
        params: {
          input: term,
          key: GOOGLE_API_KEY,
          session_token: sessionToken,
          types: "establishment",
          location: `${latitude},${longitude}`,
          radius: "1500",
          strictbounds: true
        }
      })
      .then(response => {
        const { predictions } = response.data
        let options = []

        if (predictions) {
          options = predictions.map(prediction => ({
            value: prediction.place_id,
            label: prediction.structured_formatting.main_text
          }))
        }
        return options
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
  searchTerm: state.searchTerm
})

export default withRouter(connect(mapStateToProps)(SearchBox))
