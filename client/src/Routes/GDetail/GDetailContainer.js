import React, {useState, useEffect} from "react";
import GDetailPresenter from './GDetailPresenter'
import {useHistory, useLocation  } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import { exitGroup, getGroupDetail } from "../../_actions/group_actions";

function GDetailContainer() {
  const token = document.cookie.split("=")[1];
  const {state: {id: group_id, title, goal}} = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const [groupY, setGroupY] = useState(new Date().getFullYear());
  const [groupM, setGroupM] = useState(new Date().getMonth());
  const [dates, setDates] = useState([]);
  const handleExit = async() => {
    const ok = window.confirm("탈퇴?");
    if(ok){
      let body = {
        token,
        group_id
      }
      const server = await dispatch(exitGroup(body));
      history.push("/group")
      console.log(server);
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
  }
  // const renderingCalendar = async() => {
  //   let body = {
  //       year: activeY,
  //       month: activeM,
  //       token
  //   }
  //   const response = await dispatch(getCalendar(body));
  //   const {isSuccess, } = response.payload;
  //   if (!isSuccess) {
  //       alert("Error!");
  //   }
  //   const dates = renderCalendar(activeY, activeM);
  //   setDates(dates);
  // }
  useEffect(() => {
    getDetailData();
  },[])
  return (
    <GDetailPresenter 
    handleExit={handleExit}
    />
  )
}

export default GDetailContainer
