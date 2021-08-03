import React from "react";
import styled from 'styled-components';
import Calendar from "../Calendar";

const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    margin-top:48px;
`;


const PlannerPresenter = () => {
    return (
        <Container>
            <Calendar />
        </Container>
    )
}
export default PlannerPresenter