import React from 'react';
import styled, { css } from 'styled-components';

const StyledHeader = styled.header`
  ${({ theme }) => {
    const { colors, fonts, common, margins } = theme;
    return css`
      height: 160px;
      width: 100vw;
      color: ${colors.white};
      background-color: ${colors.orange};
      font-size: ${fonts.size.lg};
      ${common.flexCenter}
      > span {
        ${common.cursorPointer}
        margin: 0 ${margins.sm};
      }
      > span:first-child, >span:last-child{
        margin: 0;
        :hover {
          transform: scale(1.4);
        }
      }
    `;
  }}
`;

export default function Header({ children, ...rest }) {
  return <StyledHeader {...rest}>{children}</StyledHeader>;
}