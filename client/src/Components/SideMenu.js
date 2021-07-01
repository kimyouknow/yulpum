import React, {useState} from "react";
import styled from 'styled-components';
import {withRouter, Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    width: 40%;
    max-width: 300px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 12px;
    opacity: ${props => props.active ? "1": "0"};
    padding-left: 48px;
    background-color: white;
    z-index: ${props => props.active ? "5": "-10"};
`;

const List = styled.ul`
    display: flex;
`;

const Button = styled.div`
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 600;
    border: 2px solid #34495e;
    padding: 8px;
    border-radius: 3px;
    &:hover {
        cursor: pointer;
    }
`;

const SideBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    font-size: 24px;
    padding: 8px;
    &:hover {
        cursor: pointer;
    }
    opacity: ${props => props.active ? "0": "1"};
`;

const SideMenu = withRouter(({location: {pathname}}) => {
    const [clicked, setClicked] = useState(false)
    const clickHandler = () => {
        if(clicked) {
            setClicked(false);
        } else {
            setClicked(true)
        }
    }
    return (
    <> 
        <SideBar active={clicked} onClick={() =>clickHandler()}>
            <FontAwesomeIcon icon={faBars} />
        </SideBar>
        <Container active={clicked}>
            <List>
                <Button>
                    <Link to="/login">login</Link>
                </Button>
                <Button>
                    <Link to="/register">register</Link>
                </Button>
                <SideBar onClick={() =>clickHandler()}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </SideBar>
            </List>
            
        </Container>
        
    </>
    )
})

export default SideMenu