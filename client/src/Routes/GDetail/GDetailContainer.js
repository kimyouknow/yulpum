import React, {useState, useEffect} from "react";
import GDetailPresenter from './GDetailPresenter'
import {useHistory, useLocation  } from "react-router";
import {useDispatch} from "react-redux";
import { getGroupDetail } from "../../_actions/group_actions";

function GDetailContainer() {
  const token = document.cookie.split("=")[1];
  const dispatch = useDispatch();
  const history = useHistory();
  const [groupY, setGroupY] = useState(new Date().getFullYear());
  const [groupM, setGroupM] = useState(new Date().getMonth());
  const {state: {id: group_id, title, goal}} = useLocation();
  const getDetailData = async() => {
    let body = {
      group_id,
      year: groupY,
      month: groupM
    }
    const server = await dispatch(getGroupDetail(body));
    console.log(server);
  }
  useEffect(() => {
    getDetailData();
  },[])
  return (
    <GDetailPresenter />
  )
}

export default GDetailContainer
