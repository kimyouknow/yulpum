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
    border: ${props => (props.today ? "3px solid red" : "none")};
    :nth-child(7n+1){
        color: #d13e3e;
    }
    :nth-child(7n){
        color: #396ee2;
    }
    :hover {
        background-color: ${props => (props.timecolor < 0) ? "transparent" : "rgba(238, 90, 36, 0.1)"};
        cursor: ${props => (props.timecolor < 0) ? "not-allowed": "pointer"};
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


const Calendar = ({dates, dato, setDato, onClick, plans}) => {
    const weeks = ["SUN", "MON","TUE","WED","THU","FRI","SAT"];
    const handleLastMonth = (dato) => {    
        const newMonth = new Date(dato.setMonth(dato.getMonth() - 1));
        const newDate = new Date(newMonth.setDate(1));
        setDato(newDate);
    }
    
    const handleNextMonth = (dato) => {
        const newMonth = new Date(dato.setMonth(dato.getMonth() + 1));
        const newDate =new Date(newMonth.setDate(1));
        setDato(newDate);
    }
    
    const handleToday = () => {
        setDato(new Date());
    }
    return (
        <>
            <Header>
                <Button onClick={() => handleLastMonth(dato)}>◀</Button>
                <DisplayMonth onClick={()=> handleToday()}>{`${dato.getFullYear()}년 ${dato.getMonth()+1}월`}</DisplayMonth>
                <Button onClick={() => handleNextMonth(dato)}>▶</Button>
            </Header>
            <WeekContainer>
                {weeks.map(week => <WeekComponent key={week}>{week}</WeekComponent>)}
            </WeekContainer>
            <DateContainer>
                    {/* {console.log(dates)} */}
            {!dates ? <h1>Loading</h1> : 
            dates.map(date =>
                <DateComponent key={date.date} timecolor={date.total_time} today={date.date.getDate() === new Date().getDate() && date.date.getMonth() === new Date().getMonth()} 
                    onClick={() => onClick(date)}
                >
                    {date.date.getDate()}
                    <ToDoContainer>{date.todo}</ToDoContainer>
                </DateComponent>)
            }
            </DateContainer>
        </>
    )
}
export default Calendar