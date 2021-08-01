import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const SLink = styled(Link)`
    width: 100%;
    &:hover {
        cursor: pointer;
        background-color: #dcdde1;
    }
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const TimerContainer = styled.div``;

const Subject = ({text, id, time}) => {
    // console.log(time)
    return (
    <SLink to={{pathname: "/active", state: {id: id}}}>
        {/* to={`/active/${id}`} params={{id: id}} */}
        <Container>
            <h1>{text}</h1>
            <TimerContainer>{time}</TimerContainer>
        </Container>
    </SLink>
    )
};

export default Subject;