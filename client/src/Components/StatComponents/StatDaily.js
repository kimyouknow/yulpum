import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { displayTime } from '../../Routes/ActiveTimer/ActiveTimerPresenter';

const Container = styled.div`
    display: ${props => props.active ? "flex": "none"};
    flex-direction:column;
    align-items: center;
    width: 100%;
    padding-top: 10px;
`;

const Title = styled.div`
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 22px;
`;

const Top = styled.div`
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
    > h4{
        font-weight: 600;
        margin-bottom: 10px;
        color: rgba(238, 90, 36,1.0);
    }
    > span{
        font-size: 24px;
    }
`;

const Middle = styled.div``;
const Bot = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;
    li{
        display: flex;
        > .indicator{
            position: relative;
            > svg {
                position: absolute;
                left: -10px;
                background-color: #546de5;
                border-radius: 50%;
                color: #fff;
                padding: 4px;
            }
            > div{
                width: 1px;
                height: 100%;
                background-color: #546de5;
            }
        }
        > .info{
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            > span{
            font-size: 14px;
            margin-bottom: 6px;
            :nth-child(2){
                font-weight: 600;
            }
            :last-child{
                margin-bottom: 20px;
            }
            }
        }
    }
`;


function StatDaily({active, data}) {
    // console.log(data)
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
    const displayClock = (time) => {
        const splited = time.split(":");
        const hours = Number(splited[0]);
        const minutes = Number(splited[1]);
        // const seconds = Number(splited[2]); ${seconds < 10 ? `0${seconds}`: seconds}초
        return `${hours}시 ${minutes < 10 ? `0${minutes}` : minutes}분`;
    }
    console.log(data);
    return (
        <Container active={active}>
            <Title>{M+1}월 {D}일 ({weeks[S]})</Title>
            <Top>
                <TopContainer>
                    <h4>총 공부시간</h4>
                    <span>{displayTime(totalLapse)}</span>
                </TopContainer>
                <TopContainer>
                    <h4>최대 집중 시간</h4>
                    <span>{displayTime(totalMax)}</span>
                </TopContainer>
                <TopContainer>
                    <h4>시작 시간</h4>
                    <span>
                        {displayClock(startTime)}
                    </span>
                </TopContainer>
                <TopContainer>
                    <h4>종료시간</h4>
                    <span>{displayClock(endTime)}</span>
                </TopContainer>
            </Top>
            <Middle>
                <Title>과목별 공부량</Title>
            </Middle>
            <Bot>
                <Title>타임라인</Title>
                {data.map(ele => 
                    ele.l_lapse > 0 && 
                    <li key={ele.l_start_time}>
                        <div className={"indicator"}>
                            <FontAwesomeIcon icon={faPen} />
                            <div></div>
                        </div>
                        <div className={"info"}>
                            <span>{ele.l_subject_name}</span>
                            <span>{displayClock(ele.l_start_time)} - {displayClock(ele.l_end_time)}</span>
                            <span>{displayTime(ele.l_lapse)}</span>
                        </div>
                    </li>
                )}
            </Bot>
            <span>- 오늘도 꿈에 한 걸음 가까워졌네요 -</span>
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