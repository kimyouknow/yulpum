import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';
import StatDaily from "./StatDaily";
import StatMonthly from "./StatMonthly";
import StatWeekly from "./StatWeekly";


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
    :hover {
        cursor: pointer;
        background-color:rgba(238, 90, 36,1.0);
        color: white;
    }
`;


const StatInnerMenu = () => {
    const [active, setActive] = useState("daily");
    const {calendar} = useSelector((state) => state);
    const {dayData, monthData,activeD, activeM, activeY} = calendar;
    const actveDay = new Date(activeY, activeM, activeD).getDay();
    const actveDate = new Date(activeY, activeM, activeD);
    // console.log(actveDate)
    return (
        <InnerMenu>
            <Menus>
                <Menu active={active === "daily"} onClick={() => setActive("daily")} >
                    일간
                </Menu>
                <Menu active={active === "weekly"} onClick={() => setActive("weekly")} >
                    주간
                </Menu>
                <Menu active={active === "monthly"} onClick={() => setActive("monthly")} >
                    월간
                </Menu>
            </Menus>
                {dayData.length !== 0 && active ==="daily" && 
                    <StatDaily active={active === "daily"} data={dayData} />}
                {monthData.length !== 0 &&  active==="weekly"  && 
                    <StatWeekly active={active === "weekly"} data={{monthData,actveDay, actveDate , activeD, activeM, activeY}} /> }
                {monthData.length !== 0 &&  active==="monthly"  && 
                    <StatMonthly active={active === "monthly"} data={{monthData, activeM, activeY}} /> }
        </InnerMenu>
    )
}

export default StatInnerMenu;