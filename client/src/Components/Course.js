import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const SLink = styled(Link)`
    width: 100%;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;


const TimerContainer = styled.div``;

const Course = ({text}) => {
    return (
    <SLink to="/active">
        <Container>
            <h1>{text}</h1>
            <TimerContainer>00:00:00</TimerContainer>
        </Container>
    </SLink>
    )
};

export default Course;