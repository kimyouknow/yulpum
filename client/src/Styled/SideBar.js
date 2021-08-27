import React from 'react';
import styled from 'styled-components';

const StyledSideBar = styled.nav`
  position: fixed;
  right: 5vw;
  bottom: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 200px;
  color: white;
  &:hover .subBtn {
    opacity: 1;
    visibility: visible;
    top: 0;
  }
  & div {
    cursor: pointer;
    box-sizing: content-box;
    width: 80px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
    :hover {
      transform: scale(1.2);
    }
    &.first {
      background-color: orange;
      z-index: 1;
      transition: all 0.4s ease;
    }
    &.second {
      background-color: orange;
      z-index: 2;
      transition: all 0.5s ease;
    }
    &.menuBtn {
      background-color: orange;
      z-index: 4;
    }
    &.subBtn {
      opacity: 0;
      visibility: hidden;
      top: 60px;
      position: relative;
    }
    &.empty{
      background-color: transparent;
    }
  }
`;


export function SideBar({ children, ...rest }) {
  return <StyledSideBar {...rest}>{children}</StyledSideBar>
}
