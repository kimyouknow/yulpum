import React from "react";
import styled from 'styled-components';
import StatInnerMenu from "../../Components/StatInnerMenu";
import LoaderCotainer from "../../Components/Loader";
import Calendar from "../../Components/Calendar";

const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    margin-top:48px;
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

const StatPresenter = ({dates, dato, setDato, todoInput ,setTodoInput}) => {
    return (
        <Container>
                {!dates ? <LoaderCotainer /> :
                    <Calendar dates={dates} dato={dato} setDato={setDato} />
                }   
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
    )
}

export default StatPresenter