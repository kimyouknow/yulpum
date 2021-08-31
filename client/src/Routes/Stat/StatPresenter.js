import React from "react";
import styled from "styled-components";
import StatInnerMenu from "../../Components/StatComponents/StatInnerMenu";
import LoaderCotainer from "../../Components/Loader";
import { compareDate } from "../../hoc/renderCalendar";
import {
  changeDate,
  nextMonth,
  prevMonth,
  setToday,
} from "../../_actions/calendar_actions";
import { useDispatch } from "react-redux";
import Container from "../../Styled/Container";
import Header from "../../Styled/Header";
import {
  DateComponent,
  DateContainer,
  DateEle,
  WeekComponent,
  WeekContainer,
} from "../../Styled/Calendar";
import Body from "../../Styled/Body";

const TimeIndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;
  div:nth-child(1) div {
    background-color: white;
  }
  div:nth-child(2) div {
    background-color: rgba(238, 90, 36, 0.3);
  }
  div:nth-child(3) div {
    background-color: rgba(238, 90, 36, 0.6);
  }
  div:nth-child(4) div {
    background-color: rgba(238, 90, 36, 1);
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

const StatPresenter = ({ dates, activeDate, monthData }) => {
  const dispatch = useDispatch();
  const weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const { activeM, activeY } = activeDate;
  const filtered = (date) =>
    monthData.find((obj) => compareDate(obj.c_date) === compareDate(date.date));
  return (
    <>
      {dates.length === 0 ? (
        <LoaderCotainer />
      ) : (
        <Container>
          <Header>
            <span onClick={() => dispatch(prevMonth(activeM))}>◀</span>
            <span onClick={() => dispatch(setToday(new Date()))}>
              {activeY}년 {activeM + 1}월
            </span>
            <span onClick={() => dispatch(nextMonth(activeM))}>▶</span>
          </Header>
          <Body>
            <WeekContainer>
              {weeks.map((week) => (
                <WeekComponent key={week}>{week}</WeekComponent>
              ))}
            </WeekContainer>
            <DateContainer>
              {!dates ? (
                <h1>Loading</h1>
              ) : (
                dates.map((date) => (
                  <DateComponent
                    key={date.date}
                    onClick={() =>
                      date.isCur && dispatch(changeDate(date.date))
                    }
                    timecolor={
                      filtered(date)
                        ? filtered(date).c_total_time
                        : date.totalTime
                    }
                    isCur={date.isCur}
                  >
                    <DateEle
                      today={
                        date.date.getDate() === new Date().getDate() &&
                        date.date.getMonth() === new Date().getMonth()
                      }
                    >
                      {date.date.getDate()}
                    </DateEle>
                  </DateComponent>
                ))
              )}
            </DateContainer>
            <TimeIndicatorContainer>
              <TimeIndicator>
                <TimeIndicatorColor /> 0~30분
              </TimeIndicator>
              <TimeIndicator>
                <TimeIndicatorColor /> 30분 ~ 1시간
              </TimeIndicator>
              <TimeIndicator>
                <TimeIndicatorColor /> 1시간 ~ 2시간
              </TimeIndicator>
              <TimeIndicator>
                <TimeIndicatorColor /> 2시간 이상
              </TimeIndicator>
            </TimeIndicatorContainer>
            <StatInnerMenu />
          </Body>
        </Container>
      )}
    </>
  );
};

export default StatPresenter;
