import React, { Component } from "react"
import { withRouter } from "react-router"
import { Input } from "semantic-ui-react"
import PropTypes from "prop-types"

class SearchBar extends Component {
  searchPlace = ev => {
    if (ev.key === "Enter") {
      const keyword = ev.target.value
      const { history } = this.props
      history.push(`/search/${keyword}`)
    }
  }

  render() {
    return (
      <div>
        <Input placeholder="Search..." onKeyPress={this.searchPlace} />
      </div>
    )
  }
}
SearchBar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default withRouter(SearchBar)
