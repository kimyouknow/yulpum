import React from 'react';
import styled, { css } from 'styled-components';

const StyledBody = styled.div`
  ${({ theme }) => {
    const { common } = theme;
    return css`
      ${common.flexCenterColumn}
      width: 100%;
      margin-top: 20px;
    `;
  }}
`;

export default function Body({ children, ...rest }) {
  return <StyledBody {...rest}>{children}</StyledBody>;
}