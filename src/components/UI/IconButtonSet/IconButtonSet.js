import React from "react"
import PropTypes from "prop-types"
import { Grid } from "semantic-ui-react"
import styled from "styled-components"
import IconButton from "../IconButton"
import rem from "../../../utils/style-helper"

const Wrapper = styled.div`
  margin-top: 12%;
  padding-right: ${rem(6)};
`
const StyledColumn = styled(Grid.Column)`
  padding: 0 !important;
`
const IconButtonSet = ({ buttonList, size }) => (
  <Wrapper>
    <Grid>
      <Grid.Row columns={4} centered>
        {buttonList.map(b => (
          <StyledColumn key={`icon-${b.icon}`}>
            <IconButton link={b.link} name={b.icon} size={size}>
              {b.label}
            </IconButton>
          </StyledColumn>
        ))}
      </Grid.Row>
    </Grid>
  </Wrapper>
)
IconButtonSet.defaultProps = {
  size: "big"
}

IconButtonSet.propTypes = {
  size: PropTypes.string,
  buttonList: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      name: PropTypes.string,
      icon: PropTypes.string
    }).isRequired
  ).isRequired
}
export default IconButtonSet
