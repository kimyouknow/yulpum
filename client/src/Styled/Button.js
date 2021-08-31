import React from "react";
import styled from "styled-components";
import { lighten } from "polished";

const StyledButton = styled.button`
  /* 공통 스타일 */
  width: 100%;
  cursor: pointer;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem;
  :hover {
  }
  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  color: #fff;
  background-color: orange;
  &:hover {
    background: ${lighten(0.2, `orange`)};
  }
`;

const StyledBackBtn = styled.button`
  font-size: 1.6rem;
  cursor: pointer;
  justify-self: start;
  position: absolute;
  top: 0.8rem;
  left: 0.5rem;
  color: #fff;
`;

export function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export function BackBtn({ children, ...rest }) {
  return <StyledBackBtn {...rest}>{children}</StyledBackBtn>;
}
