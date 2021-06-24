import React, {useState} from "react";
import styled from 'styled-components';
import {withRouter, Link} from "react-router-dom";

const Container = styled.div`
    width: 40%;
    max-width: 300px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    border: 1px solid black;
    padding: 12px;
    /* opacity: ${props => props.active ? "1": "0"}; */
    opacity: 1;
`;

const List = styled.ul`
    display: flex;
`;

const Button = styled.li`
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

const SideMenu = withRouter(({location: {pathname}}) => {
    // const [clicked, setClicked] = useState(false)
    let onClicked = false;
    return (
    <>
        <Button 
            onClick={() => onClicked ? onClicked = false: onClicked = true}
        >side menu</Button>
        <Container active={onClicked}>
            <List>
                <Button>
                    <Link to="/login">login</Link>
                </Button>
                <Button>
                    <Link to="/register">register</Link>
                </Button>
            </List>
        </Container>
        
    </>
    )
})

export default SideMenu