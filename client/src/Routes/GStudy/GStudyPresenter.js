import React from 'react'
import styled from "styled-components";
import LoaderCotainer from "../../Components/Loader";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-bottom: 50px;
`;
const Header = styled.div`
    margin-bottom: 50px;
`;
const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`;

function GStudyPresenter({}) {
    
    return (
        <Container>
        <Header>Group</Header>
        <Body>
            <Container>
                
            </Container>
        </Body>
    </Container>
    )
}

export default GStudyPresenter
