import React from "react";
import styled from 'styled-components';

const Container = styled.div``;

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
    height: 50px;
    :nth-child(7n+1){
        color: #d13e3e;
    }
    :nth-child(7n){
        color: #396ee2;
    }
    &:hover{
        background-color: rgba(0,0,0,0.2);
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
`;

const DateComponent = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    height: 50px;
    :nth-child(7n+1){
        color: #d13e3e;
    }
    :nth-child(7n){
        color: #396ee2;
    }
    &:hover{
        background-color: rgba(0,0,0,0.2);
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
                        {!dates ? <h1>Loading</h1> : 
                        dates.map(date => <DateComponent id={date}>{date}</DateComponent>)}
                    </DateContainer>
                </Container>
        )
    }

export default StatPresenter