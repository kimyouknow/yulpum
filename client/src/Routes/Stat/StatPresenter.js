import React from "react";
import styled from 'styled-components';
import StatInnerMenu from "../../Components/StatComponents/StatInnerMenu";
import LoaderCotainer from "../../Components/Loader";
import { compareDate } from "../../hoc/renderCalendar";
import { changeDate, nextMonth, prevMonth, setToday } from "../../_actions/calendar_actions";
import { useDispatch } from "react-redux";

const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    margin-top:48px;
`;

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
    flex-direction: column;
    align-items: center;
    height: 120px;
    min-width: 62px;
    padding: 8px;
    position: relative;
    border: none;
    background-color: ${props => (props.timecolor < 0) ? "rgba(223, 230, 233,1.0)":
    (props.timecolor < 10) ? "white" :
    (props.timecolor < 30) ? "rgba(238, 90, 36, 0.3)" :
    (props.timecolor < 40) ? "rgba(238, 90, 36, 0.6)":
    "rgba(238, 90, 36,1.0)"
    };
    :nth-child(7n+1){
        color: #d13e3e;
    };
    :nth-child(7n){
        color: #396ee2;
    };
    cursor: ${props => props.isCur && "pointer"};
`;

const DateEle = styled.div`
    padding: 6px;
    margin-bottom: 4px;
    color: ${props => (props.today ? "#fff" : "#000")};
    background-color: ${props => (props.today ? "#000" : "none")};
    border-radius: ${props => (props.today ? "50%" : "none")};
`;

const TimeIndicatorContainer = styled.div`
    display: flex;
    justify-content:center;
    column-gap: 20px;
    div:nth-child(1) div{
        background-color: white;
    }
    div:nth-child(2) div{
        background-color: rgba(238, 90, 36, 0.3);
    }
    div:nth-child(3) div{
        background-color: rgba(238, 90, 36, 0.6);
    }
    div:nth-child(4) div{
        background-color: rgba(238, 90, 36,1.0);
    }
`;

const TimeIndicator = styled.div`
    display: flex;
`;

const TimeIndicatorColor = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin-right: 10px;
`;

const StatPresenter =  ({dates, activeDate, monthData}) => {
    const dispatch = useDispatch();
    const weeks = ["SUN", "MON","TUE","WED","THU","FRI","SAT"];    
    const {activeM,activeY} = activeDate;
    const filtered = (date) => monthData.find(obj => compareDate(obj.c_date) === compareDate(date.date));
    return (
        <>
        {dates.length === 0 ? <LoaderCotainer />:
            <Container>
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
                    onClick={() => date.isCur && dispatch(changeDate(date.date))}
                    timecolor={filtered(date) ? filtered(date).c_total_time : date.totalTime}
                    isCur={date.isCur}>
                        <DateEle today={date.date.getDate() === new Date().getDate() && date.date.getMonth() === new Date().getMonth()}>{date.date.getDate()}</DateEle>
                </DateComponent>)
            }
            </DateContainer>
            <TimeIndicatorContainer>
                <TimeIndicator>
                    <TimeIndicatorColor /> 0~3 시간
                </TimeIndicator> 
                <TimeIndicator>
                    <TimeIndicatorColor /> 3~6 시간
                </TimeIndicator>
                <TimeIndicator>
                    <TimeIndicatorColor /> 6~9 시간
                </TimeIndicator>
                <TimeIndicator>
                    <TimeIndicatorColor /> 9 시간 이상
                </TimeIndicator>
            </TimeIndicatorContainer>
            <StatInnerMenu />
        </Container>
        }
        </>
    )
}

export default StatPresenter