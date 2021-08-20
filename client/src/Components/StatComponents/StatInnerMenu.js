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
    const {dayData, monthData} = calendar;
    console.log(dayData, monthData)
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
                    <StatWeekly active={active === "weekly"} data={monthData} /> }
                {monthData.length !== 0 &&  active==="monthly"  && 
                    <StatMonthly active={active === "monthly"} data={monthData} /> }
                {/* 일일총공부시간, 최대집중시간, 시작시간, 종료시간,과목별 공부량,  공부휴식비율, 타임라인 */}
                {/* 주간총공부시간, 평균공부시간, 요일별 공부시간,  */}
                {/* 월간총공부시간, 평균공부시간, 월간 날짜별 공부시간, 월간과목별공부량 */}
        </InnerMenu>
    )
}

export default StatInnerMenu;