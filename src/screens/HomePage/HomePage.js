import React from "react"
import styled from "styled-components"
import logo from "./aroundme-logo.png"
import NavigationBar from "../../components/NavigationBar"
import SearchBar from "../../components/SearchBar"

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`

const StyledLogo = styled.img`
  display: block;
  width: 70%;
  margin: 30% auto 25% auto;
`

const HomePage = () => (
  <Wrapper>
    <StyledLogo src={logo} />
    <NavigationBar />
    <SearchBar />
  </Wrapper>
)

export default HomePage
