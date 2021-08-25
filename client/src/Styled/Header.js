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
  }
  > span:nth-child(2){
    margin: 0 1rem;
  }
  > span:not(:nth-child(2)){
    :hover {
      transform: scale(1.4);
    }
  }
`;

export default function Header({ children, ...rest }) {
  return <StyledHeader {...rest}>{children}</StyledHeader>;
}