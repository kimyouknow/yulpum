import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const StyledGroupElement = styled.li`
  width: 100%;
  height: 140px;
  border: 1px solid #ced6e0;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color:#fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  > .group__title{
    cursor: pointer;
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  > .group__infos{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 1rem;
    > .group__info{
      font-size: 1.2rem;
      font-weight: 600;
      >.goup__info-ele{
        color: #a4b0be;
        font-size: 1rem;
        margin-right: 0.4rem;
      }
    }
  }
`;

export function GroupElement({ children, detail, found, ...rest }) {
  return <StyledGroupElement {...rest}>
    {detail ? 
      <Link className={"group__title"}
        to={{pathname: "/group/detail", state: {id: found._id, title: found.g_name, goal: found.g_goal }}}>
        {found.g_name}
      </Link>
      :
      <div className={"group__title"}>
        {found.g_name}
      </div>
    }
    <div className={"group__infos"}>
      <div className={"group__info"}>
        <span className={"goup__info-ele"}>방장</span>
        <span>{found.g_leader}</span>
      </div>
      <div className={"group__info"}>
        <span className={"goup__info-ele"}>목표</span>
        <span>{found.g_goal}</span>
      </div>
      <div className={"group__info"}>
        <span className={"goup__info-ele"}>공부량</span>
        <span>{found.g_mean_time}</span>
      </div>
      <div className={"group__info"}>
        <span className={"goup__info-ele"}>인원</span>
        <span>{found.g_current} / {found.g_max}</span>
      </div>
      <div className={"group__info"}>
        <span className={"goup__info-ele"}>시작일</span>
        <span>{found.g_start_date.slice(2,10)}</span>
      </div>
    </div>
  </StyledGroupElement>;
}