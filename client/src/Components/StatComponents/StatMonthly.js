import React from "react";
import styled from "styled-components";
import { displayTime } from "../../Routes/ActiveTimer/ActiveTimerPresenter";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

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

function StatMonthly({ active, data }) {
  const { monthData, activeM, activeY } = data;
  const barData = [];
  for (let i = 0; i < monthData.length; i++) {
    barData.push({
      date: new Date(monthData[i].c_date).getDate(),
      time: monthData[i].c_total_time / 60,
    });
  }
  const totalLapse = monthData.reduce((acc, cur) => cur.c_total_time + acc, 0);
  const meanLapse = Math.floor(
    totalLapse / monthData.filter((ele) => ele.c_total_time > 0).length
  );
  console.log(monthData);
  return (
    <Container active={active}>
      <Title>{activeM + 1}월</Title>
      <Top>
        <TopContainer>
          <h4>총 공부시간</h4>
          <span>{displayTime(totalLapse)}</span>
        </TopContainer>
        <TopContainer>
          <h4>평균 공부 시간</h4>
          <span>{displayTime(meanLapse)}</span>
        </TopContainer>
      </Top>
      <Middle>
        <Title>월간 날자별 공부시간</Title>
        {barData && (
          <VictoryChart domainPadding={20}>
            <VictoryAxis
              domain={[0, new Date(activeY, activeM + 1, 0).getDate()]}
              tickFormat={(t) => `${t}일`}
            />
            <VictoryAxis
              dependentAxis
              domain={[0, 30, 60, 120]}
              tickFormat={(t) => `${t}분`}
            />
            <VictoryBar data={barData} x="date" y="time" barWidth={4} />
          </VictoryChart>
        )}
      </Middle>
    </Container>
  );
}

export default StatMonthly;
