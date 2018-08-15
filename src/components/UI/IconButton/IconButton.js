import React from "react"
import { Link } from "react-router-dom"
import { Icon } from "semantic-ui-react"
import PropTypes from "prop-types"
import styled from "styled-components"
import rem from "../../../utils/style-helper"

const StyledLink = styled(Link)`
  display: block;
  margin: 0 auto;
  font-size: ${rem(13)};
  color: #f2f2f2;
  letter-spacing: ${rem(1)};
  padding: ${rem(8)} ${rem(4)};
  line-height: ${rem(24)};
  text-align: center;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: rgb(242, 242, 242, 0.8);
  }
  &:active {
    color: rgb(242, 242, 242, 0.9);
  }
`

const Label = styled.div`
  margin: ${rem(2)};
`

const IconButton = ({ link, name, size, children }) => (
  <StyledLink to={link}>
    <Icon name={name} size={size} />
    <Label>{children} </Label>
  </StyledLink>
)
IconButton.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default IconButton
