import React from 'react'
import Body from '../../Styled/Body'
import Container from '../../Styled/Container'
import Header from '../../Styled/Header'
import { SideBar } from '../../Styled/SideBar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function GDetailPresenter({handleExit}) {
  return (
    <Container>
      <Header>??</Header>
      <Body>
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
