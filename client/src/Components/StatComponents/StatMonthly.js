import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: ${props => props.active ? "flex": "none"};
`;

function StatMonthly({active, data}) {
    // console.log(data);
    return (
        <Container active={active}>
            StatMonthly
        </Container>
    )
}

export default StatMonthly
