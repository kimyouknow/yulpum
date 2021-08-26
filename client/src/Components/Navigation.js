import React from "react";
import {Link, withRouter} from "react-router-dom";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Navigation = styled.nav`
    background-color: #f5f6fa;
    position: fixed;
    display: flex;
    align-items: center;
    z-index: 10;

    width: 100px;
    height: 100%;
    top: 0;
    left: 0;
    border-bottom: 2px solid #dcdde1;
    @media all and (min-width:768px) and (max-width:1023px) {
        width: 50px;
    }
    @media screen and (max-width: 480px) {
        width: 100%;
        height: 100px;
    }


`;  

const List = styled.ul`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    @media all and (min-width:768px) and (max-width:1023px) {
        
    }
    @media screen and (max-width: 480px) {
        flex-direction: row;
    }
`;

const Item = styled.li`
    height: 100%;
    width: 100%;
    text-align: center;
    color: ${props => (props.current ? "black" : "#a4b0be")};
`;

const SLink = styled(Link)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:14px;
    font-weight: 700;
`;

const Icon = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
`;

export default withRouter(({location: {pathname}}) => (
    <Navigation>
        <List>
            <Item current={pathname === "/stat"}>
                <SLink to="/stat">통계</SLink>
            </Item>
            <Item current={pathname === "/planner"}>
                <SLink to="/planner">플래너</SLink>
            </Item>
            {pathname === "/active" ? 
                <Icon><FontAwesomeIcon icon={faUser} /></Icon>:
                <Item current={pathname === "/"}>
                    <SLink to="/">Home</SLink>
                </Item>
            }
            <Item current={pathname === "/group"}>
                <SLink to="/group">그룹</SLink>
            </Item>
            <Item current={pathname === "/rank"}>
                <SLink to="/rank">랭킹</SLink>
            </Item>
        </List>
    </Navigation>
))