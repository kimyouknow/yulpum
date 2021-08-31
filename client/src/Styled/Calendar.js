import React from "react";
import styled from "styled-components";

const StyledWeekContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(7, 1fr);
`;

const StyledWeekComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100%;
  :nth-child(7n + 1) {
    color: #d13e3e;
  }
  :nth-child(7n) {
    color: #396ee2;
  }
`;

const StyledDateContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 20px;
`;

const StyledDateComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 120px;
  width: 100%;
  padding: 8px;
  position: relative;
  border: none;
  background-color: ${(props) =>
    props.timecolor < 0
      ? "rgba(223, 230, 233,1.0)"
      : props.timecolor < 60 * 30
      ? "white"
      : props.timecolor < 60 * 60
      ? "rgba(238, 90, 36, 0.3)"
      : props.timecolor < 60 * 60 * 2
      ? "rgba(238, 90, 36, 0.6)"
      : "rgba(238, 90, 36,1.0)"};
  :nth-child(7n + 1) {
    color: #d13e3e;
  }
  :nth-child(7n) {
    color: #396ee2;
  }
  cursor: pointer;
`;

const StyledDateEle = styled.div`
  padding: 6px;
  margin-bottom: 4px;
  color: ${(props) => (props.today ? "#fff" : "#000")};
  background-color: ${(props) =>
    props.today ? "rgba(255, 107, 129,1.0)" : "none"};
  border-radius: ${(props) => (props.today ? "50%" : "none")};
`;

export function WeekContainer({ children, ...rest }) {
  return <StyledWeekContainer {...rest}>{children}</StyledWeekContainer>;
}

export function WeekComponent({ children, ...rest }) {
  return <StyledWeekComponent {...rest}>{children}</StyledWeekComponent>;
}

export function DateContainer({ children, ...rest }) {
  return <StyledDateContainer {...rest}>{children}</StyledDateContainer>;
}

export function DateComponent({ children, ...rest }) {
  return <StyledDateComponent {...rest}>{children}</StyledDateComponent>;
}
export function DateEle({ children, ...rest }) {
  return <StyledDateEle {...rest}>{children}</StyledDateEle>;
}
