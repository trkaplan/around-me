import React from "react"
import styled from "styled-components"
import logo from "./aroundme-logo.png"
import NavigationBar from "../../components/NavigationBar"

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  background-color: #4599ea;
`

const StyledLogo = styled.img`
  display: block;
  width: 70%;
  margin: 0 auto;
`

const HomePage = () => (
  <Wrapper>
    <StyledLogo src={logo} />
    <NavigationBar />
  </Wrapper>
)

export default HomePage