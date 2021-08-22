import React from "react";
import styled from 'styled-components';
import SideMenu from "../../Components/SideMenu";
import Loader from "../../Components/Loader";
import Subjects from "../../Components/HomeComponents/Subjects";

const Container = styled.div`
    width: 100%;
    height: 50vh;
    border: 1px solid black;
`;

const HomePresenter = ({clickLogout,clickSignout, token}) => (
    <Container>
        <SideMenu clickLogout={clickLogout} clickSignout={clickSignout} />
        <h1>Timer</h1>
        {!token ? <Loader /> : <Subjects tokenData={token}/>}
    </Container>
)
export default HomePresenter