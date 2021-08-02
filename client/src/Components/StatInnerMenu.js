import React from "react";
import styled from 'styled-components';
import {withRouter, Link, Route} from "react-router-dom";

const InnerMenu = styled.div``;

const Menus = styled.ul``;

const Menu = styled.li``;


const StatInnerMenu = () => {
    return (
        <InnerMenu>
            {/* <Menus>
                <Menu>
                    <Link >일간</Link>
                </Menu>
                <Menu>
                    <Link >주간</Link>
                </Menu>
                <Menu>
                    <Link >월간</Link>
                </Menu>
            </Menus> */}
        </InnerMenu>
    )
}

export default StatInnerMenu;