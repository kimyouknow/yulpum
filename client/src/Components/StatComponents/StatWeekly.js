import React from "react";
import styled from "styled-components";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import { displayTime } from "../../Routes/ActiveTimer/ActiveTimerPresenter";

const Container = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > h4 {
    font-weight: 600;
    margin-bottom: 10px;
    color: rgba(238, 90, 36, 1);
  }
  > span {
    font-size: 24px;
  }
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function StatWeekly({ active, data }) {
  const { monthData, actveDay, activeD, activeM, activeY } = data;
  const barData = [];
  const barXaxis = [];
  for (let i = 0; i < 7; i++) {
    const thisWeek = activeD + i - actveDay;
    const thisData = monthData.find((ele) => {
      const eleDate = new Date(ele.c_date);
      return (
        eleDate.toISOString().slice(0, 10) ===
        new Date(activeY, activeM, thisWeek).toISOString().slice(0, 10)
      );
    });
    if (thisWeek > 0 && thisWeek < 32) {
      barData.push({
        date: thisWeek,
        time: thisData ? thisData.c_total_time / 60 : 0,
      });
      barXaxis.push(thisWeek);
    }
  }
  const totalLapse = Math.floor(
    barData.reduce((acc, cur) => cur.time * 3600 + acc, 0)
  );
  const meanLapse = Math.floor(
    totalLapse / barData.filter((ele) => ele.time > 0).length
  );
  return (
    <Container active={active}>
      <Title>
        {activeM + 1}월 {barXaxis[0]}일~ {activeM + 1}월{" "}
        {barXaxis[barXaxis.length - 1]}일
      </Title>
      <Top>
        <TopContainer>
          <h4>총 공부시간</h4>
          <span>
            {totalLapse ? displayTime(totalLapse) : "데이터가 없네요"}
          </span>
        </TopContainer>
        <TopContainer>
          <h4>평균 공부 시간</h4>
          <span>{meanLapse ? displayTime(meanLapse) : "데이터가 없네요"}</span>
        </TopContainer>
      </Top>
      <Middle>
        <Title>월간 날자별 공부시간</Title>
        {barData && (
          <VictoryChart domainPadding={20}>
            <VictoryAxis
              tickValues={[...barXaxis]}
              tickFormat={(t) => `${t}일`}
            />
            <VictoryAxis
              dependentAxis
              domain={[0, 30, 60, 120]}
              tickFormat={(t) => `${t}분`}
            />
            <VictoryBar
              data={barData}
              x="date"
              y="time"
              style={{ data: { fill: "tomato", width: 4 } }}
            />
          </VictoryChart>
        )}
      </Middle>
    </Container>
  );
}

export default StatWeekly;

// 1. 선택한 날짜의 day가져오기
// 0 1 2 3 4 5 6

// 2. day기준으로 한 주 배열로 정의
// 0 -> 일 -> [자기날짜 ~ 자기날짜 + 6]
// 1 -> 월 -> [자기날짜 - 1 ~ 자기날짜 + 5]
// 2 -> 화 -> [자기날짜 - 2 ~ 자기날짜 + 4]
// 3 -> 수 -> [자기날짜 - 3 ~ 자기날짜 + 3]
// 4 -> 목 -> [자기날짜 - 4 ~ 자기날짜 + 2]
// 5 -> 금 -> [자기날짜 - 5 ~ 자기날짜 + 1]
// 6 -> 토 -> [자기날짜 - 6 ~ 자기날짜 + 0]

// 3. monthData에서 있는 데이터 넣기
