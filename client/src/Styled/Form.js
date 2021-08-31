import React from "react";
import styled from "styled-components";
import { lighten } from "polished";

const StyledForm = styled.form`
  /* 공통 스타일 */
  display: flex;
  flex-direction: column;
  position: relative;
  /* 크기 */
  width: 100%;
  height: 90%;
  font-size: 1.2rem;

  input {
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    margin-bottom: 0.2rem;
    padding: 0.4rem 0.8rem;
    ::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
    /* 크기 */
    width: 100%;
    font-size: 1.2rem;
    &[type="submit"],
    &[type="reset"] {
      width: 100%;
      border: none;
      margin: ${(props) =>
        props.styles === "auth" ? "none" : "auto 0 1rem auto"};
      cursor: pointer;
      border-radius: 10px;
      font-weight: bold;
      cursor: pointer;
      padding: 0.5rem;
      /* 크기 */
      height: 2.25rem;
      font-size: 1rem;

      /* 색상 */
      color: #fff;
      background-color: orange;
      &:hover {
        background: ${lighten(0.2, `orange`)};
      }
    }
    &[type="reset"] {
      margin: 0;
      margin-bottom: -2rem;
    }
  }
  > span {
    font-size: 0.8rem;
    color: grey;
    margin: 0.4rem 0;
  }
  > .input__name {
    align-self: flex-start;
    margin-bottom: 0.5rem;
    color: orange;
  }
`;

export default function Form({ children, ...rest }) {
  return <StyledForm {...rest}>{children}</StyledForm>;
}
