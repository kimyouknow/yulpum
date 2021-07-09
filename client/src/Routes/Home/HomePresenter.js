import React from "react";
import styled from 'styled-components';
import SideMenu from "../../Components/SideMenu";
import Courses from "../Courses";
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

const HomePresenter = ({clickLogout,userID}) => (
    <Container>
        <SideMenu clickLogout={clickLogout}/>
        <Timer />
        <Courses userID={userID} />   
    </Container>
)
export default HomePresenter