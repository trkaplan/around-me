import styled from "styled-components"

export const Wrapper = styled.div`
  background-color: #f2f2f2;
  position: relative;
`
Wrapper.displayName = "Wrapper"

export const Title = styled.h2`
  color: white;
  padding-left: 12px;
  max-width: 70%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
  line-height: 1.3rem;
  font-size: 1.3rem;
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
  border-radius: 4px;
  background-color: #3f9d2f;
  min-width: 25px;
  display: inline-block;
  padding: 2px 6px 2px 6px
  text-align: center;
  letter-spacing: 1px;
  margin-right:12px;
`
Rate.displayName = "Rate"

export const Actions = styled.div`
  float: right;
`
Actions.displayName = "Actions"
