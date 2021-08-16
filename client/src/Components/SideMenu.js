import React, {useState} from "react";
import styled from 'styled-components';
import {withRouter, Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons'


const SideBar = styled.div`
    position: absolute;
    bottom: 20px;
    right: 20px;
    height: 200px;
    border: 1px solid;
`;

const Button = styled.div`
    cursor: pointer;
    box-sizing: content-box;
    border-radius: 50%;
    font-size: 30px;
    padding: 10px;
    color: white;
    background-color: rgba(0,0,0,0.5);
`;


const SideMenu = withRouter(({location: {pathname}, clickLogout, clickSignout}) => {
    const [clicked, setClicked] = useState(false)
    const clickHandler = () => {
        if(clicked) {
            setClicked(false);
        } else {
            setClicked(true)
        }
    }
    return (
        <SideBar active={clicked} onClick={() =>clickHandler()}>
            <Button  className={"subBtn logoutBtn"} onClick={() => clickLogout()}>
                탈퇴
            </Button>
            <Button  className={"subBtn logoutBtn"} onClick={() => clickLogout()}>
                로그아웃
            </Button>
            <Button className={"subBtn addBtn"} onClick={() => clickLogout()}>
                <FontAwesomeIcon icon={faBars} />
            </Button>
        </SideBar>
    )
})

export default SideMenu