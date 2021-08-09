import React from "react";
import styled from 'styled-components';
import {withRouter, Link, Route} from "react-router-dom";
import StatDaily from "../Routes/StatDaily";
import StatWeekly from "../Routes/StatWeekly";
import StatMonthly from "../Routes/StatMonthly";

const InnerMenu = styled.div`
    border-top: 10px solid white;
    margin-top: 10px;
    padding-top: 10px;
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
`;

const Menus = styled.ul`
    display: flex;
    column-gap: 60px;
`;

const Menu = styled.li`
    padding: 10px;
    border-bottom: 5px solid ${props => props.active ? "rgba(238, 90, 36,1.0)": "transparent"};
    color: ${props => props.active ? "rgba(238, 90, 36,1.0)" : "black"};
    margin-bottom: 10px;
`;


const StatInnerMenu = () => {
    return (
        <InnerMenu>
            <Menus>
                <Menu active={true}>
                    일간
                </Menu>
                <Menu active={false}>
                    주간
                </Menu>
                <Menu active={false}>
                    월간
                </Menu>
            </Menus>
                <StatDaily />
                <StatWeekly />
                <StatMonthly />
        </InnerMenu>
    )
}

export default StatInnerMenu;