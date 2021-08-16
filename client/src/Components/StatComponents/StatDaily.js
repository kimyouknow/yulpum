import React from 'react'
import styled from 'styled-components';

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
    align-items: center;
    justify-content: center;
`;
const TopTitle = styled.div``;
const TopContent = styled.div``;

const Middle = styled.div``;

function StatDaily({active, data}) {
    const weeks = ["일", "월","화","수","목","금","토"];    
    console.log(data)
    const {l_date} = data[0];
    const M = new Date(l_date).getMonth();
    const D = new Date(l_date).getDate();
    const S = new Date(l_date).getDay();
    return (
        <Container active={active}>
            {M+1}월 {D}일 ({weeks[S]})
            <Top>
                <TopContainer>
                    <TopTitle>총 공부시간</TopTitle>
                    <TopContent></TopContent>
                </TopContainer>
                <TopContainer>
                    <TopTitle>최대 집중 시간</TopTitle>
                    <TopContent></TopContent>
                </TopContainer>
                <TopContainer>
                    <TopTitle>시작 시간</TopTitle>
                    <TopContent></TopContent>
                </TopContainer>
                <TopContainer>
                    <TopTitle>종료시간</TopTitle>
                    <TopContent></TopContent>
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