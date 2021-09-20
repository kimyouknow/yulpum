import React from 'react'
import styled from 'styled-components';
import { DateComponent, DateContainer, DateEle, WeekComponent, WeekContainer } from '../../Styled/Calendar'
import Loader from '../Loader'

const Container = styled.div`
    display: ${props => props.active ? "flex": "none"};
    flex-direction:column;
    align-items: center;
    width: 100%;
`;

const ToDoContainer = styled.div`
    display: flex;
    flex-direction:column;
    width: 90%;
    /* z-index: 5; */
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
    background-color: ${props => props.done? "rgba(255, 107, 129,1.0)": "rgba(164, 176, 190,1.0)" };
    border-radius: 6px;
    &:hover {
        background-color: ${props => props.done? "rgba(255, 107, 129,0.5)": "rgba(164, 176, 190,0.5)" };
    }
    &.overflow{
        z-index: 5;
        opacity: 0;
        visibility: hidden;
    }
    &.more{
        text-align: center;
    }
`;

function Attendance({active,serverD, dates}) {
  const weeks = ["SUN", "MON","TUE","WED","THU","FRI","SAT"];
  const filtered = (date) => serverD && serverD.filter(obj =>Number(obj[0]) === Number(new Date(date).getDate()));
  console.log(dates)
  return (
    <Container active={active}>
      <WeekContainer>
        {weeks.map(week => <WeekComponent key={week}>{week}</WeekComponent>)}
      </WeekContainer>
      <DateContainer>
        {!dates?<Loader />: 
          dates.map(date => 
            <DateComponent key={date.date} 
            timecolor={1}
            isCur={date.isCur}>
              <DateEle today={date.date.getDate() === new Date().getDate() && date.date.getMonth() === new Date().getMonth()}>{date.date.getDate()}</DateEle>
              {filtered(date.date) &&
                <ToDoContainer>
                {filtered(date.date).length > 3 ?
                <>
                    <ToDoElement>
                        {filtered(date.date)[0][1].userName.length > 8 ? filtered(date.date)[0][1].userName.substring(0,8)+"..." : filtered(date.date)[0][1].userName}
                    </ToDoElement>
                    <ToDoElement className={"more"}>
                        +
                    </ToDoElement >
                    {filtered(date.date).slice(1).map((ele, idx) => 
                        <ToDoElement className={"overflow"} key={idx}>
                            {ele[1].userName.length > 8 ? ele[1].userName.substring(0,8)+"..." : ele[1].userName}
                        </ToDoElement>
                    )}
                </> :
                filtered(date.date).map((ele, idx) => 
                    <ToDoElement key={idx}>
                        {ele[1].userName.length > 8 ? ele[1].userName.substring(0,8)+"..." : ele[1].userName}
                    </ToDoElement>
                )      
                }
                </ToDoContainer>
                }
            </DateComponent>
          )
        }
      </DateContainer>
    </Container>
  )
}

export default Attendance
