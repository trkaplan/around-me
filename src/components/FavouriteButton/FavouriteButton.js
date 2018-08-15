import React, { Component } from "react"
import { Icon } from "semantic-ui-react"
import styled from "styled-components"

const StyledIcon = styled(Icon)`
  color: #ff4070;
  vertical-align: bottom;
  && {
    font-size: 24px
    line-height: 24px
  }
`

class FavouriteButton extends Component {
  state = { favourited: false }

  toggleFavourite = () => {
    const { favourited } = this.state
    this.setState({
      favourited: !favourited
    })
  }

  render() {
    const { favourited } = this.state

    return (
      <StyledIcon
        onClick={this.toggleFavourite}
        name={favourited ? "star" : "star outline"}
        aria-label="Favourite"
      />
    )
  }
}

export default FavouriteButton
