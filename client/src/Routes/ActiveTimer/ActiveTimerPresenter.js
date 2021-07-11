import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    width: 100%;
    height: 88vh;
    border: 1px solid black;
`;

const IconContainer = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

const ActiveTimerPresenter = ({timeValue, onSubmitHandler}) => {
    let minutes = Math.floor(timeValue/60);
    let hour = Math.floor(timeValue/60);
    let sec = timeValue%60;
    let min = minutes%60;
    let innerDisplay =  `${hour < 10 ?`0${hour}`:hour}:
    ${min < 10 ?`0${min}`:min}:
    ${sec < 10 ?`0${sec}`:sec}`;
    return (
        <Container>
            <h1>{innerDisplay}</h1>
            <IconContainer onClick={() => onSubmitHandler()}>
                <FontAwesomeIcon icon={faPause}/>
            </IconContainer>
        </Container>
    )
}
export default ActiveTimerPresenter