import React from "react";
import styled from 'styled-components';
import SideMenu from "../../Components/SideMenu";
import Course from "../Course";

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const HomePresenter = () => (
    <Container>
        <SideMenu />
        <Course />   
    </Container>
)
export default HomePresenter