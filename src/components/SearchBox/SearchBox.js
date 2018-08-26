import React, { Component } from "react"
import { withRouter } from "react-router"
import { Input } from "semantic-ui-react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { setSearchTerm } from "../../actionCreators"

class SearchBox extends Component {
  searchPlace = ev => {
    const { searchTerm } = this.props
    if (ev.key === "Enter") {
      const keyword = searchTerm
      const { history } = this.props
      history.push(`/search/${keyword}`)
    }
  }

  render() {
    const { searchTerm, handleSearchTermChange } = this.props
    return (
      <div>
        <Input
          placeholder="Search..."
          value={searchTerm}
          onKeyPress={this.searchPlace}
          onChange={handleSearchTermChange}
        />
      </div>
    )
  }
}
SearchBox.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  searchTerm: PropTypes.string.isRequired,
  handleSearchTermChange: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  searchTerm: state.searchTerm
})

const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value))
  }
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBox)
)
