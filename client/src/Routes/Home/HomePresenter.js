import React from "react";
import styled from 'styled-components';
import SideMenu from "../../Components/SideMenu";

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const HomePresenter = () => (
    <Container>
        <SideMenu />
        <h2>Home</h2>        
    </Container>
)
export default HomePresenter