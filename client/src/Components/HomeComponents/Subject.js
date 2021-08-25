import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const SLink = styled(Link)`
    width: 100%;
    display: flex;
    align-items: center;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TimerContainer = styled.span``;
const PlayBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: white;
    background-color: teal;
    margin-right: 8px;
`;

const Subject = ({text, id, time}) => {
    // console.log(time)
    return (
    <SLink to={{pathname: "/active", state: {id, text, time}}}>
        {/* to={`/active/${id}`} params={{id: id}} */}
        <PlayBtn>
            <FontAwesomeIcon icon={faPlay} />
        </PlayBtn>
        <Container>
            <h1>{text}</h1>
            <TimerContainer>{time}</TimerContainer>
        </Container>
    </SLink>
    )
};

export default Subject;