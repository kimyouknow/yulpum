import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { displayTime } from "../../Routes/ActiveTimer/ActiveTimerPresenter";
import NotFound from "../NotFound";

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

const Container = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

function MemberRank({ active, serverD }) {
  const filtered = (date) =>
    serverD &&
    serverD
      .filter((obj) => Number(obj[0]) === Number(new Date(date).getDate()))
      .sort((a, b) => b[1].totalTime - a[1].totalTime);
  const date = new Date();
  const [timeValue, setTimeValue] = useState(0);
  useEffect(() => {
    const activeTime = setTimeout(() => setTimeValue(timeValue + 1), 1000);
    return () => clearTimeout(activeTime);
  }, [timeValue]);
  return (
    <Container active={active}>
      {filtered(date).length === 0 ? (
        <NotFound />
      ) : (
        filtered(date).map((user, idx) => (
          <RankEle key={idx}>
            <div className={"rank__number"}>{idx + 1}</div>
            <div className={"info"}>
              <div className={"info__span"}>
                <span>{user[1].userName}</span>
                {user[1].nowStudy ? (
                  <span>
                    {displayTime(Math.floor(user[1].totalTime) + timeValue)}
                  </span>
                ) : (
                  <span>{displayTime(Math.floor(user[1].totalTime))}</span>
                )}
              </div>
              <Info
                className={"info__bar"}
                long={
                  filtered(date)[0][1].totalTime === 0
                    ? 0
                    : Math.floor(
                        (user[1].totalTime / filtered(date)[0][1].totalTime) *
                          100
                      )
                }
              ></Info>
            </div>
          </RankEle>
        ))
      )}
    </Container>
  );
}

export default MemberRank;
