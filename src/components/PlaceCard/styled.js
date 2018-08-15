import styled from "styled-components"
import rem from "../../utils/style-helper"

export const Wrapper = styled.div`
  background-color: #f2f2f2;
  position: relative;
`
Wrapper.displayName = "Wrapper"

export const Title = styled.h2`
  color: white;
  padding-left: ${rem(12)};
  max-width: 70%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
  line-height: ${rem(24)};
  font-size: ${rem(20)};
`
Title.displayName = "Title"

export const BottomBar = styled.div`
  position: absolute;
  bottom: 0;
  height: 20%
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
`
BottomBar.displayName = "BottomBar"

export const Rate = styled.div`
  color: white;
  border-radius: ${rem(4)};
  background-color: #3f9d2f;
  min-width: ${rem(24)};
  display: inline-block;
  padding: ${rem(2)} ${rem(6)};
  text-align: center;
  letter-spacing: ${rem(1)};
  margin-right: ${rem(12)};
`
Rate.displayName = "Rate"

export const Actions = styled.div`
  float: right;
`
Actions.displayName = "Actions"
