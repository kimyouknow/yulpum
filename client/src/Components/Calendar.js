import React, { useState } from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import { changeDate, getLine, nextMonth, prevMonth, setToday } from "../_actions/calendar_actions";
import EditModal from "./PlannerComponents/EditModal";
import { compareDate } from "../hoc/renderCalendar";

const Header = styled.div`
    display: flex;
    justify-content:center;
    margin-bottom: 20px;
`;

const WeekContainer =styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

const WeekComponent = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    height: 70px;
    :nth-child(7n+1){
        color: #d13e3e;
    }
    :nth-child(7n){
        color: #396ee2;
    }
`;

const DisplayMonth = styled.div`
    &:hover{
        cursor: pointer;
    }
`;

const Button = styled.div`
    &:hover{
        cursor: pointer;
    }
`;

const DateContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: 20px;
`;

const DateComponent = styled.div`
    display: flex;
    justify-content:flex-start;
    align-items: flex-start;
    padding: 8px;
    height: 100px;
    position: relative;
    border: ${props => (props.today ? "3px solid red" : "none")};
    /* background-color: ${props => (props.timecolor < 0) ? "rgba(223, 230, 233,1.0)":
    (props.timecolor < 10) ? "white" :
    (props.timecolor < 30) ? "rgba(238, 90, 36, 0.3)" :
    (props.timecolor < 40) ? "rgba(238, 90, 36, 0.6)":
    "rgba(238, 90, 36,1.0)"
    }; */
    :nth-child(7n+1){
        color: #d13e3e;
    };
    :nth-child(7n){
        color: #396ee2;
    };
    cursor: pointer;
`;

const DateEle = styled.div`
    padding: 6px;
    margin-bottom: 4px;
    color: ${props => (props.today ? "#fff" : "#000")};
    background-color: ${props => (props.today ? "rgba(255, 107, 129,1.0)" : "none")};
    border-radius: ${props => (props.today ? "50%" : "none")};
`;

const ToDoContainer = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
    padding-left: 10px;
    color: black;
`;

const ToDoComponent = styled.div`
    &:hover {
        background-color: rgba(223, 230, 233,1.0);
    }
`;

const Calendar = ({activeDate, dates, monthData})  => {
    const tokenData = document.cookie.split("=")[1];
    const dispatch = useDispatch();
    const weeks = ["SUN", "MON","TUE","WED","THU","FRI","SAT"];    
    const {activeM,activeY, activeD} = activeDate;
    const [activeInfo, setActiveInfo] = useState(null);
    const filtered = (date) => monthData.filter(obj => compareDate(obj.date) === compareDate(date.date));
    return (
        <>
        <Header>
            <Button onClick={() => dispatch(prevMonth(activeM))}>◀</Button>
                <DisplayMonth onClick={()=> dispatch(setToday(new Date()))}>
                    {activeY}년 {activeM+1}월
                </DisplayMonth>
            <Button onClick={() => dispatch(nextMonth(activeM))}>▶</Button>
        </Header>
        <WeekContainer>
            {weeks.map(week => <WeekComponent key={week}>{week}</WeekComponent>)}
        </WeekContainer>
        <DateContainer>
            {/* {console.log(dates)} */}
            {!dates ? <h1>Loading</h1> : 
            dates.map(date =>
            <DateComponent key={date.date} 
                timecolor={date.total_time}
                onClick={() => {
                    dispatch(changeDate(date.date))
                    dispatch(getLine({
                        year: activeY,
                        month: activeM,
                        token: tokenData,
                        date:activeD}));
                }}
                isCur={date.isCur}>
                    <DateEle today={date.date.getDate() === new Date().getDate() && date.date.getMonth() === new Date().getMonth()}>{date.date.getDate()}</DateEle>
                    {filtered(date)&& 
                        <ToDoContainer>
                            {filtered(date).map((ele, idx)=>
                                <ToDoComponent key={idx}>
                                    {ele.totalTime}
                                </ToDoComponent>
                            )}
                        </ToDoContainer>
                    }
            </DateComponent>)
        }
        </DateContainer>
        {activeInfo && <EditModal 
            activeInfo={activeInfo}
            setActiveInfo={setActiveInfo}
        />}
    </>
    );
}

export default Calendar;
