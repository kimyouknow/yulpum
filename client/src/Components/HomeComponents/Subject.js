import React from "react";
import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const SLink = styled(Link)`
    ${({ theme }) => {
    const { colors, common, margins } = theme;
    return css`
    width: 100%;
    display: flex;
    align-items: center;
    >.subject__playBtn{
        ${common.flexCenter}
        height: 40px;
        width: 40px;
        border-radius: 50%;
        color: ${colors.white};
        background-color: ${colors.orange};
        margin-right: ${margins.sm}
    }
    >.subject__container{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    `;
}}
`;

const Subject = ({text, id, time}) => {
    // console.log(time)
    return (
    <SLink to={{pathname: "/active", state: {id, text, time}}}>
        <div className={"subject__playBtn"}>
            <FontAwesomeIcon icon={faPlay} />
        </div>
        <div className={"subject__container"}>
            <h1>{text}</h1>
            <span>{time}</span>
        </div>
    </SLink>
    )
};

export default Subject;