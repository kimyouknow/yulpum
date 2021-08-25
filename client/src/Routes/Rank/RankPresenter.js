import React from "react";
import styled from "styled-components";
import LoaderCotainer from "../../Components/Loader";
import Container from "../../Styled/Container";
import { displayTime } from "../ActiveTimer/ActiveTimerPresenter";

const Title = styled.div`
    margin-bottom: 24px;
    font-weight: 600;
    font-size: 22px;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
const Top = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
`;
const Middle = styled.div`
    width: 95%;
    margin: 0 auto;
`;

const Indicator = styled.div`
    display: grid;
    align-self: flex-start;
    width: 50%;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 10px;
    margin-bottom: 24px;
    > div > span{
        font-weight: 600;
        color: orange;
    }
`;


const RankEle = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    align-items: center;
    .rank__number{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        border: 1px solid black;
        border-radius: 50%;
        font-size: 18px;
        font-weight: 600;
        width: 50px;
        height:50px; 
    }
    > .info{
        display: flex;
        flex-direction: column;
        width: 90%;
        >.info__span{
            display: flex;
            width: 100%;
            justify-content: space-between;
            margin-bottom: 10px;
        }
        >.info__bar{
            height: 10px;
            border-radius: 10px;
            background-color: orange;
        }
    }
`;

const Info = styled.div`
    width: ${props => props.long !== "undefined" ? props.long + "%" : "0%" };
`;

const RankPresenter = ({timeValue,rankData ,top3,nowStudy, calendar}) => {
    const {activeD, activeM, activeY} = calendar;
    console.log(rankData);
    return (
    <Container>
        <Title>
            ◀
            <span>{activeY}년</span>
            <span>{activeM+1}월</span>
            <span>{activeD}일</span>
            ▶
        </Title>
        <Body>
            <Middle>
                <Indicator>
                    <div>공부중 <span>{nowStudy}</span>명 </div>
                    <div>오늘 전체 <span>{rankData.length}</span>명 </div>
                    <div>내 등수 <span>10</span> 등</div>
                    <div>상위 <span>10</span>%</div>
                </Indicator>
            {!rankData ? <LoaderCotainer />: 
                rankData.map((user, idx) => 
                <RankEle key={user.id}>
                    <div className={"rank__number"}>
                        {idx+1}
                    </div>
                    <div className={"info"}>
                        <div className={"info__span"}>
                            <span>{user.name}</span>
                            {user.nowStudy ? 
                                <span>{displayTime(Math.floor(user.totalTime)+timeValue)}</span> :
                                <span>{displayTime(Math.floor(user.totalTime))}</span>
                            }
                        </div>
                        <Info className={"info__bar"} long={Math.floor((user.totalTime / top3[0].totalTime)*100)}></Info>
                    </div>
                </RankEle>)
            }
            </Middle>
        </Body>
    </Container>
)}
export default RankPresenter