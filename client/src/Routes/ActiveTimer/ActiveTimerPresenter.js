import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import Loader from "../../Components/Loader";
import Container from "../../Styled/Container";
import Header from "../../Styled/Header";
import Body from "../../Styled/Body";

const Display = styled.div`
  ${({ theme }) => {
    const { colors, common, fonts, margins } = theme;
    return css`
      ${common.flexCenter}
      height: 50vh;
      margin-top: ${margins.lg};
      font-size: ${fonts.size.lg};
      .display__icon {
        ${common.flexCenter}
        height: 6rem;
        width: 6rem;
        border-radius: 50%;
        color: ${colors.white};
        background-color: ${colors.orange};
        margin-right: ${margins.base};
        &:hover {
          ${common.cursorPointer};
          transform: scale(1.2);
        }
      }
      .display__body {
        height: 20%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        > div {
          ${common.flexCenterColumn};
          width: 100%;
          > span {
            margin-bottom: ${margins.base};
          }
        }
      }
      .display__title {
        display: block;
        font-weight: ${fonts.weight.bold};
        font-size: ${fonts.size.title};
      }
    `;
  }}
`;

export const displayTime = (timeData) => {
  let minutes = Math.floor(timeData / 60);
  let hour = Math.floor(minutes / 60);
  let sec = timeData % 60;
  let min = minutes % 60;
  return `${hour < 10 ? `0${hour}` : hour} :
                        ${min < 10 ? `0${min}` : min} :
                        ${sec < 10 ? `0${sec}` : sec}`;
};

const ActiveTimerPresenter = ({
  timeValue,
  onSubmitHandler,
  activedSubject,
  intialTime,
}) => {
  return (
    <>
      {!activedSubject ? (
        <Loader />
      ) : (
        <Container>
          <Header>{displayTime(timeValue)}</Header>
          <Body>
            <Display>
              <div
                className={"display__icon"}
                onClick={() => onSubmitHandler()}
              >
                <FontAwesomeIcon icon={faPause} />
              </div>
              <div className={"display__body"}>
                <div>
                  <span className={"display__title"}>과목명</span>
                  <span>{activedSubject}</span>
                </div>
                <div>
                  <span className={"display__title"}>공부시간</span>
                  <span>{displayTime(intialTime + timeValue)}</span>
                </div>
              </div>
            </Display>
          </Body>
        </Container>
      )}
    </>
  );
};
export default ActiveTimerPresenter;
