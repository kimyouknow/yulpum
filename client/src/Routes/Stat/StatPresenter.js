import React from "react";
import styled from 'styled-components';

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
    justify-content:center;
    align-items: center;
    height: 70px;
    background-color: ${props => (props.timecolor < 0) ? "rgba(223, 230, 233,1.0)":
    (props.timecolor < 1000) ? "white" :
    (props.timecolor < 3000) ? "rgba(238, 90, 36, 0.3)" :
    (props.timecolor < 4000) ? "rgba(238, 90, 36, 0.6)":
    "rgba(238, 90, 36,1.0)"
    };
    :nth-child(7n+1){
        color: #d13e3e;
    }
    :nth-child(7n){
        color: #396ee2;
    }
`;

const TimeIndicatorContainer = styled.div`
    display: flex;
    justify-content:center;
    column-gap: 20px;
`;

const TimeIndicator = styled.div`
    display: flex;
`;

const TimeIndicatorColor = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin-right: 10px;
    :nth-child(1n){
        background-color: rgba(223, 230, 233,1.0);
    }
    :nth-child(2n){
        background-color: rgba(238, 90, 36, 0.3);
    }
    :nth-child(3){
        background-color: rgba(238, 90, 36, 0.6);
    }
    :nth-child(4){
        background-color: rgba(238, 90, 36,1.0);
    }
`;

const StatPresenter = ({today,
    weeks,
    dates,
    handleLastMonth,
    handleNextMonth,
    handleToday}) => {
        return (
            <Container>
                    <Header>
                        <Button onClick={() => handleLastMonth()}>◀</Button>
                        <DisplayMonth onClick={()=> handleToday()}>{today}</DisplayMonth>
                        <Button onClick={() => handleNextMonth()}>▶</Button>
                    </Header>
                    <WeekContainer>
                        {weeks.map(week => <WeekComponent id={week}>{week}</WeekComponent>)}
                    </WeekContainer>
                    <DateContainer>
                         {/* {console.log(dates)} */}
                    {!dates ? <h1>Loading</h1> : 
                    dates.map(date => <DateComponent key={date.date} timecolor={date.total_time} >{date.date.getDate()}</DateComponent>)}
                    </DateContainer>
                    <TimeIndicatorContainer>
                        <TimeIndicator>
                            <TimeIndicatorColor /> 0시간
                        </TimeIndicator> 
                        <TimeIndicator>
                            <TimeIndicatorColor /> 0시간
                        </TimeIndicator>
                        <TimeIndicator>
                            <TimeIndicatorColor /> 0시간
                        </TimeIndicator>
                        <TimeIndicator>
                            <TimeIndicatorColor /> 0시간
                        </TimeIndicator>
                    </TimeIndicatorContainer>
            </Container>
        )
    }

export default StatPresenter