import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  /* 공통 스타일 */
  display: flex;
  flex-direction: column;
  padding: 1rem;
  /* 크기 */
  width: 100%;
  height: 90%;
  font-size: 1.2rem;

  /* 색상 */

  /* 기타 */
  > .input__name{
    align-self: flex-start;
    margin-bottom: 0.5rem;
    color: orange;
  }
  > .input__submit{
    
  }
`;

export default function Form({ children, ...rest }) {
  return <StyledForm {...rest}>{children}</StyledForm>;
}