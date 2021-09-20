import React from "react";
import SideMenu from "../../Components/SideMenu";
import Loader from "../../Components/Loader";
import Subjects from "../../Components/HomeComponents/Subjects";
import Container from "../../Styled/Container";

const HomePresenter = ({clickLogout,clickSignout, token}) => (
    <Container>
        <SideMenu clickLogout={clickLogout} clickSignout={clickSignout} />
        {!token ? <Loader /> : <Subjects tokenData={token}/>}
    </Container>
)
export default HomePresenter