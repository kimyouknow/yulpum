import React, {useState, useEffect} from "react";
import GDetailPresenter from './GDetailPresenter'
import {useHistory, useLocation  } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import { exitGroup, getGroupDetail } from "../../_actions/group_actions";
import { nextMonth, prevMonth, renderCalendar, setToday } from "../../hoc/renderCalendar";

function GDetailContainer() {
  const token = document.cookie.split("=")[1];
  const {state: {id: group_id, title, goal}} = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const [active, setActive] = useState("attendance");
  const [serverD, setServerD] = useState([]);
  const [dates, setDates] = useState([]);
  const [groupDate, setGroupDate] = useState({
    groupY: new Date().getFullYear(),
    groupM: new Date().getMonth(),
    groupD: new Date().getDate()
  })
  const {groupY, groupM} = groupDate;
  const handleMonth = (type) => {
    switch (type) {
      case "prev":
        const {preY, preM} = prevMonth(groupY, groupM);
        setGroupDate({groupY: preY, groupM: preM})
        break;
      case "next":
        const {nextY, nextM} = nextMonth(groupY, groupM);
        setGroupDate({groupY: nextY, groupM: nextM})
        break;
      case "today":
        const {setY, setM} = setToday();
        setGroupDate({groupY: setY, groupM: setM})
        break;
      default:
        break;
    }
  }
  const handleExit = async() => {
    const ok = window.confirm("탈퇴?");
    if(ok){
      let body = {
        token,
        group_id
      }
      await dispatch(exitGroup(body));
      history.push("/group")
    }
  }
  const getDetailData = async() => {
    let body = {
      group_id,
      year: groupY,
      month: groupM
    }
    const {payload: {isSuccess, retArr}} = await dispatch(getGroupDetail(body));
    if (!isSuccess) {
      alert("Error!");
    }
    const dates = renderCalendar(groupY, groupM);
    setDates(dates);
    setServerD(retArr);
  }
  useEffect(() => {
    getDetailData();
  },[groupY, groupM])
  return (
    <GDetailPresenter 
    handleExit={handleExit}
    dates={dates}
    handleMonth={handleMonth}
    groupDate={groupDate}
    serverD={serverD}
    active={active}
    setActive={setActive}
    />
  )
}

export default GDetailContainer
