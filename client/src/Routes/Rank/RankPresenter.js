import React from "react";
import styled from "styled-components";
import NotFound from "../../Components/NotFound";
import Body from "../../Styled/Body";
import Container from "../../Styled/Container";
import Header from "../../Styled/Header";
import { displayTime } from "../ActiveTimer/ActiveTimerPresenter";

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
  > div > span {
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
  .rank__number {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border: 1px solid black;
    border-radius: 50%;
    font-size: 18px;
    font-weight: 600;
    width: 50px;
    height: 50px;
  }
  > .info {
    display: flex;
    flex-direction: column;
    width: 90%;
    > .info__span {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    > .info__bar {
      height: 10px;
      border-radius: 10px;
      background-color: orange;
    }
  }
`;

const Info = styled.div`
  width: ${(props) => (props.long !== "undefined" ? props.long + "%" : "0%")};
`;

const RankPresenter = ({ timeValue, rankData, top3, myRate, nowStudy }) => {
  return (
    <Container>
      <Header>
        <h3>오늘의 랭킹</h3>
      </Header>
      <Body>
        {!rankData || !myRate ? (
          <NotFound />
        ) : (
          <Middle>
            <Indicator>
              <div>
                공부중 <span>{nowStudy}</span>명{" "}
              </div>
              <div>
                오늘 전체 <span>{rankData.length}</span>명{" "}
              </div>
              <div>
                내 등수 <span>{myRate}</span> 등
              </div>
              <div>
                상위 <span>{(myRate / rankData.length) * 100}</span>%
              </div>
            </Indicator>
            {rankData.map((user, idx) => (
              <RankEle key={user.id}>
                <div className={"rank__number"}>{idx + 1}</div>
                <div className={"info"}>
                  <div className={"info__span"}>
                    <span>{user.name}</span>
                    {user.nowStudy ? (
                      <span>
                        {displayTime(Math.floor(user.totalTime) + timeValue)}
                      </span>
                    ) : (
                      <span>{displayTime(Math.floor(user.totalTime))}</span>
                    )}
                  </div>
                  <Info
                    className={"info__bar"}
                    long={
                      top3[0].totalTime === 0
                        ? 0
                        : Math.floor((user.totalTime / top3[0].totalTime) * 100)
                    }
                  ></Info>
                </div>
              </RankEle>
            ))}
          </Middle>
        )}
      </Body>
    </Container>
  );
};
export default RankPresenter;
