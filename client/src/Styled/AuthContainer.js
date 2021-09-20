import React from 'react';
import styled, {css} from 'styled-components';

const StyledAuthContainer = styled.div`
  /* 공통 스타일 */
  padding: 0 10px;
  padding-top: 6vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* 크기 */
  font-size: 1.2rem;
  height: 50vh;
  width: 40%;
  min-width: 280px;

  /* 색상 */
  background-color: white;  

  /* 기타 */
`;

export default function AuthContainer({ children, ...rest }) {
  return <StyledAuthContainer {...rest}>{children}</StyledAuthContainer>;
}