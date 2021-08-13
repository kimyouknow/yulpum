import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: ${props => props.active ? "flex": "none"};
`;

function StatWeekly({active, data}) {
    return (
        <Container active={active}>
            StatWeekly
        </Container>
    )
}

export default StatWeekly



