import React from "react";
import styled from 'styled-components';
import {withRouter, Link, Route} from "react-router-dom";
import StatDailyContainer from "../Routes/StatDaily";
import StatWeeklyContainer from "../Routes/StatWeekly";
import StatMonthlyContainer from "../Routes/StatMonthly";

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


const StatInnerMenu = withRouter(({location: {pathname},}) => {
    return (
        <InnerMenu>
            <Menus>
                <Menu active={pathname === "/stat/daily"} >
                    <Link to="/stat/daily" >일간</Link>
                </Menu>
                <Menu active={pathname === "/stat/weekly"} >
                    <Link to="/stat/weekly" >주간</Link>
                </Menu>
                <Menu active={pathname === "/stat/monthly"} >
                    <Link to="/stat/monthly" >월간</Link>
                </Menu>
            </Menus>
            <Route path="/stat/daily" component={StatDailyContainer} />
            <Route path="/stat/weekly" component={StatWeeklyContainer} />
            <Route path="/stat/monthly" component={StatMonthlyContainer} />
        </InnerMenu>
    )
})

export default StatInnerMenu;