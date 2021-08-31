import React from "react";
import styled, { css } from "styled-components";

const NFContainer = styled.div`
  ${({ theme }) => {
    const { colors, fonts, common, margins } = theme;
    return css`
      width: 100%;
      height: 100%;
      margin-top: ${margins.xl};
      ${common.flexCenter};
      color: ${colors.orange};
      font-size: ${fonts.size.lg};
      font-weight: ${fonts.weight.bold};
    `;
  }}
`;

function NotFound() {
  return <NFContainer>🧐 표시할 데이터가 없어요</NFContainer>;
}

export default NotFound;
