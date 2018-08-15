import React, { Component } from "react"
import { Icon } from "semantic-ui-react"
import styled from "styled-components"
import rem from "../../utils/style-helper"

const StyledIcon = styled(Icon)`
  color: #ff4070
  vertical-align: bottom
  && {
    font-size: ${rem(24)}
    line-height: ${rem(24)}
    padding-right: ${rem(32)}
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
