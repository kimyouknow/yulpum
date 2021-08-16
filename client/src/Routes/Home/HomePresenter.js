import React from "react";
import styled from 'styled-components';
import SideMenu from "../../Components/SideMenu";
import Loader from "../../Components/Loader";
import Subjects from "../../Components/HomeComponents/Subjects";

const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    margin-top:48px;
`;

const HomePresenter = ({clickLogout,clickSignout, token}) => (
    <Container>
        <SideMenu clickLogout={clickLogout} clickSignout={clickSignout} />
        <h1>Timer</h1>
        {!token ? <Loader /> : <Subjects tokenData={token}/>}
    </Container>
)
export default HomePresenter