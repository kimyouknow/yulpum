import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { SideBar } from "../Styled/SideBar";

const SideMenu = withRouter(
  ({ location: { pathname }, clickLogout, clickSignout }) => {
    const [clicked, setClicked] = useState(false);
    const clickHandler = () => {
      if (clicked) {
        setClicked(false);
      } else {
        setClicked(true);
      }
    };
    return (
      <SideBar active={clicked} onClick={() => clickHandler()}>
        <div className={"subBtn first"} onClick={() => clickSignout()}>
          탈퇴
        </div>
        <div className={"subBtn second"} onClick={() => clickLogout()}>
          로그아웃
        </div>
        <div className={"menuBtn"} onClick={() => clickLogout()}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </SideBar>
    );
  }
);

export default SideMenu;
