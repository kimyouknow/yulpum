import React from 'react';
import styled,{css} from 'styled-components';

const StyledSideBar = styled.nav`
${({ theme }) => {
    const { colors, fonts, common, margins } = theme;
    return css`
    position: fixed;
    right: 5vw;
    bottom: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 200px;
    color: ${colors.white};
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
      ${common.flexCenter}
      background-color: ${colors.orange};
      :hover {
        transform: scale(1.2);
      }
      &.first {
        z-index: 11;
        transition: all 0.4s ease;
      }
      &.second {
        z-index: 12;
        transition: all 0.5s ease;
      }
      &.menuBtn {
        z-index: 14;
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
  }}
`;


export function SideBar({ children, ...rest }) {
  return <StyledSideBar {...rest}>{children}</StyledSideBar>
}
