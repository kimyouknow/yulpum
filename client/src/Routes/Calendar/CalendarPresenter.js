import React from "react";
import styled from 'styled-components';

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
    height: 70px;
    position: relative;
    background-color: ${props => (props.timecolor < 0) ? "rgba(223, 230, 233,1.0)":
    (props.timecolor < 10) ? "white" :
    (props.timecolor < 30) ? "rgba(238, 90, 36, 0.3)" :
    (props.timecolor < 40) ? "rgba(238, 90, 36, 0.6)":
    "rgba(238, 90, 36,1.0)"
    };
    :nth-child(7n+1){
        color: #d13e3e;
    }
    :nth-child(7n){
        color: #396ee2;
    }
`;

const ToDoContainer = styled.div`
    position: absolute;
    bottom: 10px;
    left: 0px;
    width: 100%;
    padding-left: 10px;
    color: black;
    &:hover {
        background-color: rgba(223, 230, 233,1.0);
        cursor: pointer;
    }
`;


const CalendarPresenter = ({today, weeks, dates, handleNextMonth, handleLastMonth, handleToday}) => (
    <>
        <Header>
            <Button onClick={() => handleLastMonth()}>◀</Button>
            <DisplayMonth onClick={()=> handleToday()}>{today}</DisplayMonth>
            <Button onClick={() => handleNextMonth()}>▶</Button>
        </Header>
        <WeekContainer>
            {weeks.map(week => <WeekComponent key={week}>{week}</WeekComponent>)}
        </WeekContainer>
        <DateContainer>
                {/* {console.log(dates)} */}
        {!dates ? <h1>Loading</h1> : 
        dates.map(date =>
            <DateComponent key={date.date} timecolor={date.total_time} >
                {date.date.getDate()}
                <ToDoContainer>{date.todo}</ToDoContainer>
            </DateComponent>)
        }
        </DateContainer>
    </>
)
export default CalendarPresenter