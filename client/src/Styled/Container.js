import React from "react";
import styled, { css } from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  min-height: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Container({ children, ...rest }) {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
}
