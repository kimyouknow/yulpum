import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 100px;
  width: 100%;
  color: white;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  > span {
    cursor: pointer;
    margin: 0 0.5rem;
  }
  > span:first-child, >span:last-child{
    margin: 0;
    :hover {
      transform: scale(1.4);
    }
  }
`;

export default function Header({ children, ...rest }) {
  return <StyledHeader {...rest}>{children}</StyledHeader>;
}