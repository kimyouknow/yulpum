import React from 'react'
import Body from '../../Styled/Body'
import styled from 'styled-components';
import Container from '../../Styled/Container'
import Header from '../../Styled/Header'
import { SideBar } from '../../Styled/SideBar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Attendance from '../../Components/GroupComponents/Attendance'
import MemberRank from '../../Components/GroupComponents/MemberRank';

const InnerMenu = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
`;

const Menus = styled.ul`
    display: flex;
    width: 100%;
`;

const Menu = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  border: 1px solid ${props => props.active ? "rgba(238, 90, 36,1.0)": "transparent"};
  color: ${props => props.active ? "rgba(238, 90, 36,1.0)" : "black"};
  padding: 20px;
  :hover {
      cursor: pointer;
      background-color:rgba(238, 90, 36,1.0);
      color: white;
  }
`;

function GDetailPresenter({handleExit, dates, handleMonth, groupDate, serverD,active ,setActive}) {
  const {groupY, groupM, groupD} = groupDate;
  return (
    <Container>
      {active === "attendance" ? 
        <Header>
          <span onClick={() => handleMonth("prev")}>◀</span>
          <span onClick={()=> handleMonth("today")}>
              {groupY}년 {groupM+1}월
          </span>
          <span onClick={() => handleMonth("next")}>▶</span>
        </Header>:
        <Header>
          <h3>지금 공부중인 멤버</h3>
        </Header>
      }
      <Body>
      <InnerMenu>
            <Menus>
                <Menu active={active === "attendance"} onClick={() => setActive("attendance")} >
                    출석부
                </Menu>
                <Menu active={active === "ranking"} onClick={() => setActive("ranking")} >
                    랭킹
                </Menu>
            </Menus>
        </InnerMenu>
        {dates.length !== 0 && active ==="attendance" && 
            <Attendance active={active === "attendance"} serverD={serverD} dates={dates} />}
        {dates.length !== 0 && active ==="ranking" && 
            <MemberRank active={active === "ranking"} serverD={serverD} dates={dates} />}
        <SideBar>
          <div className={"subBtn first empty"}></div>
          <div className={"subBtn second"} onClick={()=> handleExit()}>
              그룹 탈퇴
          </div>
          <div className={"menuBtn"}>
              <FontAwesomeIcon icon={faBars} />
          </div>
        </SideBar>
      </Body>
    </Container>
  )
}

export default GDetailPresenter

