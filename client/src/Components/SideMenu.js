import React, {useState} from "react";
import styled from 'styled-components';
import {withRouter, Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const SideBar = styled.nav`
    position: absolute;
    right: 20px;
    bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 200px;
    color: white;
    &:hover .subBtn {
        opacity: 1;
        visibility: visible;
        top: 0;
    }
    & div {
        cursor: pointer;
        box-sizing: content-box;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,0.5);
        :hover {
                transform: scale(1.2);
            }
        &.withdrawal {
            background-color: orange;
            z-index: 1;
            transition: all 0.4s ease;
        }
        &.logoutBtn {
            background-color: orange;
            z-index: 2;
            transition: all 0.5s ease;
        }
        &.menuBtn {
            background-color: orange;
            z-index: 4;
        }
        &.subBtn {
            opacity: 0;
            visibility: hidden;
            top: 60px;
            position: relative;
        }
    }
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
            <div className={"subBtn withdrawal"} onClick={() => clickSignout()}>
                탈퇴
            </div>
            <div className={"subBtn logoutBtn"} onClick={() => clickLogout()}>
                로그아웃
            </div>
            <div >
                <FontAwesomeIcon icon={faBars} className={"menuBtn"} onClick={() => clickLogout()}/>
            </div>
        </SideBar>
    )
})

export default SideMenu