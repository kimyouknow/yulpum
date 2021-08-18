import React from 'react'
import styled from 'styled-components';
import { displayTime } from '../../Routes/ActiveTimer/ActiveTimerPresenter';

const Container = styled.div`
    display: ${props => props.active ? "flex": "none"};
    flex-direction:column;
    align-items: center;
    width: 100%;
`;

const Top = styled.div`
    margin-top: 20px;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
`;
const TopContainer = styled.div`
    height: 100px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`;
const TopTitle = styled.div``;
const TopContent = styled.div``;

const Middle = styled.div``;

function StatDaily({active, data}) {
    console.log(data)
    const weeks = ["일", "월","화","수","목","금","토"];    
    const {l_date} = data[0];
    const M = new Date(l_date).getMonth();
    const D = new Date(l_date).getDate();
    const S = new Date(l_date).getDay();
    const totalLapse = data.reduce((acc, cur) => cur.l_lapse + acc, 0)
    const totalMax = data.length === 0 ? data.length.l_lapse :
        data.reduce((acc, cur) => acc > cur.l_lapse ? acc: cur.l_lapse)
    const startTime = data[0].l_start_time
    const filtered = data.filter((ele) => ele.l_lapse !== 0);
    const endTime = filtered[filtered.length-1].l_end_time;
    return (
        <Container active={active}>
            {M+1}월 {D}일 ({weeks[S]})
            <Top>
                <TopContainer>
                    <h3>총 공부시간</h3>
                    <span>{displayTime(totalLapse)}</span>
                </TopContainer>
                <TopContainer>
                    <h3>최대 집중 시간</h3>
                    <span>{displayTime(totalMax)}</span>
                </TopContainer>
                <TopContainer>
                    <h3>시작 시간</h3>
                    <span>
                        {startTime}
                    </span>
                </TopContainer>
                <TopContainer>
                    <h3>종료시간</h3>
                    <span>{endTime}</span>
                </TopContainer>
            </Top>
            <Middle></Middle>
        </Container>
    )
}

export default StatDaily


// l_date
// l_end_time
// l_lapse
// l_start_time
// l_subject_name
// l_user_id