import React from "react";
import styled from 'styled-components';
import SideMenu from "../../Components/SideMenu";
import Subjects from "../Subjects";
import Loader from "../../Components/Loader";

const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    margin-top:48px;
`;

const HomePresenter = ({clickLogout, token}) => (
    <Container>
        <SideMenu clickLogout={clickLogout}/>
        <h1>Timer</h1>
        {!token ? <Loader /> : <Subjects tokenData={token}/>}
    </Container>
)
export default HomePresenter