import React from "react";
import styled from 'styled-components';
import SideMenu from "../../Components/SideMenu";
import Subjects from "../Subjects";
import Timer from "../Timer.js";
import Loader from "../../Components/Loader";

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const HomePresenter = ({clickLogout, token}) => (
    <Container>
        <SideMenu clickLogout={clickLogout}/>
        <Timer />
        {!token ? <Loader /> : <Subjects tokenData={token}/>}
    </Container>
)
export default HomePresenter