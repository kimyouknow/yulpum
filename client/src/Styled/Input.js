import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  /* 공통 스타일 */
  border-bottom: 2px solid rgba(0,0,0,0.3); 
  margin-bottom: 2rem;
  padding:0.4rem 0.8rem;
  ::placeholder{
      color: rgba(0,0,0,0.3);
  }

  /* 크기 */
  width: 100%;
  font-size: 1.2rem;

  /* 색상 */
  
  
  

  /* 기타 */
`;

export default function Input({ children, ...rest }) {
  return <StyledInput {...rest}>{children}</StyledInput>;
}