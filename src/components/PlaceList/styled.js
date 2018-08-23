import styled from "styled-components"
import { Grid } from "semantic-ui-react"
import media from "../../utils/media"

const StyledGrid = styled(Grid)`
  margin: 0 !important;
  &&& .column:not(.row) {
    padding: 0 !important;
    ${media.desktop`width:50% !important`};
    ${media.phoneLarge`width:100% !important`};
  }
`

StyledGrid.displayName = "StyledGrid"

export default StyledGrid
