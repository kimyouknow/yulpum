import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import Loader from "../../Components/Loader";

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

const ActiveTimerPresenter = ({timeValue, onSubmitHandler, activedSubject ,intialTime}) => {
    const displayTime = (time) => {
        let minutes = Math.floor(timeValue/60);
        let hour = Math.floor(timeValue/60);
        let sec = timeValue%60;
        let min = minutes%60;
        return `${hour < 10 ?`0${hour}`:hour}:
                            ${min < 10 ?`0${min}`:min}:
                            ${sec < 10 ?`0${sec}`:sec}`;}
    
    return (
        <>
            {!activedSubject ? <Loader /> : 
                <Container>
                    <h1>{displayTime(timeValue)}</h1>
                    <div>
                        <h2>{activedSubject}</h2>
                        <h3>{displayTime(intialTime+timeValue)}</h3>
                    </div>
                    <IconContainer onClick={() => onSubmitHandler()}>
                        <FontAwesomeIcon icon={faPause}/>
                    </IconContainer>
                </Container>
            }
        </>
    )
}
export default ActiveTimerPresenter