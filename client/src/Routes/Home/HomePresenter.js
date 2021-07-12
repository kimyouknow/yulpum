import React from "react";
import styled from 'styled-components';
import SideMenu from "../../Components/SideMenu";
import Subjects from "../Subjects";
import Timer from "../Timer.js";

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const HomePresenter = ({clickLogout}) => (
    <Container>
        <SideMenu clickLogout={clickLogout}/>
        <Timer />
        <Subjects/>   
    </Container>
)
export default HomePresenter