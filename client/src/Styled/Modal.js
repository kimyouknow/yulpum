import React from 'react';
import styled, {css} from 'styled-components';

const StyledModal = styled.div`
  /* 공통 스타일 */
  display: ${props => props.show ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;

  /* 크기 */
  font-size: 25px;
  width: 100%;
  height: 100%;

  /* 색상 */
  background-color: rgba(0, 0, 0, 0.7);

  /* 기타 */
`;

const StlyedModalWindow = styled.div`
    width: 500px;
    height: 500px;
    font-weight: 600;
    border-radius: 10px;
    background-color: #fff;
`;

const StyledMHeader = styled.header`
  width: 100%;
  height: 10%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  position: relative;
`;

export function ModalHeader({children, ...rest}){
  return <StyledMHeader {...rest}>{children}</StyledMHeader>
};

export default function Modal({ children, ...rest }) {
  return <StyledModal {...rest}>
    <StlyedModalWindow>{children}</StlyedModalWindow>
  </StyledModal>;
}