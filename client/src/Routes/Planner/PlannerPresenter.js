import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import LoaderCotainer from "../../Components/Loader";
import AddModal from "../../Components/PlannerComponents/AddModal";
import EditModal from "../../Components/PlannerComponents/EditModal";
import {
  nextMonth,
  prevMonth,
  setToday,
} from "../../_actions/calendar_actions";
import { compareDate } from "../../hoc/renderCalendar";
import {
  DateComponent,
  DateContainer,
  DateEle,
  WeekComponent,
  WeekContainer,
} from "../../Styled/Calendar";
import Container from "../../Styled/Container";
import Header from "../../Styled/Header";
import { SideBar } from "../../Styled/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Body from "../../Styled/Body";

const ToDoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  z-index: 5;
  &:hover .overflow {
    opacity: 1;
    visibility: visible;
  }
`;

const ToDoElement = styled.div`
  font-size: 0.9rem;
  padding: 4px 0;
  color: #fff;
  margin-top: 4px;
  text-align: center;
  background-color: ${(props) =>
    props.done ? "rgba(255, 107, 129,1.0)" : "rgba(164, 176, 190,1.0)"};
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.done ? "rgba(255, 107, 129,0.5)" : "rgba(164, 176, 190,0.5)"};
  }
  &.overflow {
    z-index: 10;
    opacity: 0;
    visibility: hidden;
  }
  &.more {
    text-align: center;
  }
`;

const PlannerPresenter = ({
  dates,
  activeDate,
  monthData,
  handleModal,
  openModal,
  setOpenModal,
}) => {
  const dispatch = useDispatch();
  const weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const { activeM, activeY } = activeDate;
  const [activeInfo, setActiveInfo] = useState(null);
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
                    timecolor={1}
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
                    {filtered(date) && (
                      <ToDoContainer>
                        {filtered(date).c_todo.length > 3 ? (
                          <>
                            <ToDoElement
                              onClick={() =>
                                setActiveInfo({
                                  ele: filtered(date).c_todo[0],
                                  c_date: filtered(date).c_date,
                                })
                              }
                            >
                              {filtered(date).c_todo[0].length > 8
                                ? filtered(date).c_todo[0].substring(0, 8) +
                                  "..."
                                : filtered(date).c_todo[0]}
                            </ToDoElement>
                            <ToDoElement className={"more"}>+</ToDoElement>
                            {filtered(date)
                              .c_todo.slice(1)
                              .map((ele, idx) => (
                                <ToDoElement
                                  className={"overflow"}
                                  key={idx}
                                  onClick={() => {
                                    setActiveInfo({
                                      ele,
                                      c_date: filtered(date).c_date,
                                    });
                                  }}
                                >
                                  {ele.length > 8
                                    ? ele.substring(0, 8) + "..."
                                    : ele}
                                </ToDoElement>
                              ))}
                          </>
                        ) : (
                          filtered(date).c_todo.map((ele, idx) => (
                            <ToDoElement
                              key={idx}
                              onClick={() => {
                                setActiveInfo({
                                  ele,
                                  c_date: filtered(date).c_date,
                                });
                              }}
                            >
                              {ele.length > 8
                                ? ele.substring(0, 8) + "..."
                                : ele}
                            </ToDoElement>
                          ))
                        )}
                      </ToDoContainer>
                    )}
                  </DateComponent>
                ))
              )}
            </DateContainer>
            <SideBar>
              <div className={"subBtn first empty"}></div>
              <div className={"subBtn second"} onClick={() => handleModal()}>
                계획 추가
              </div>
              <div className={"menuBtn"}>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </SideBar>
          </Body>
          <AddModal openModal={openModal} setOpenModal={setOpenModal} />
          {activeInfo && (
            <EditModal activeInfo={activeInfo} setActiveInfo={setActiveInfo} />
          )}
        </Container>
      )}
    </>
  );
};
export default PlannerPresenter;
