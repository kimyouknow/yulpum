import React from "react";
import styled from "styled-components";
import LoaderCotainer from "../../Components/Loader";
import { displayTime } from "../ActiveTimer/ActiveTimerPresenter";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`;
const Header = styled.div``;
const Body = styled.div``;

const RankPresenter = ({timeValue,rankData ,calendar}) => {
    const {activeD, activeM, activeY} = calendar;
    // console.log(rankData)
    return (
    <Container>
        <Header>
            ◀
            <span>{activeY}년</span>
            <span>{activeM+1}월</span>
            <span>{activeD}일</span>
            ▶
        </Header>
        <Body>
            {!rankData ? <LoaderCotainer />: 
                rankData.map((user) => 
                <div key={user.id}>
                    <span>{user.name}</span>
                    {user.nowStudy ? 
                    <span>{displayTime(Math.floor(user.totalTime)+timeValue)}</span> :
                    <span>{displayTime(Math.floor(user.totalTime))}</span>
                    }
                    
                </div>)
            }
        </Body>
    </Container>
)}
export default RankPresenter