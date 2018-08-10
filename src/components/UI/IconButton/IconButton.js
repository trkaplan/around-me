import React from "react"
import { Link } from "react-router-dom"
import { Icon } from "semantic-ui-react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledLink = styled(Link)`
  display: block;
  margin: 0 auto;
  font-size: 13px;
  color: #f2f2f2;
  letter-spacing: 1px;
  padding: 8px 4px;
  line-height: 1em;
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
  margin: 2px;
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
