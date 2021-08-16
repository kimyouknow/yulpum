import React, {useState, useEffect} from "react";
import RankPresenter from "./RankPresenter";
import { useDispatch, useSelector } from 'react-redux';
import { requestRank } from "../../_actions/user_action";

const RankContainer = () => {
    const tokenData = document.cookie.split("=")[1];
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state);
    const getRankData = async() => {
        const serverData = await dispatch(requestRank());
        console.log(serverData)
    }
    useEffect(() => {
        getRankData();
    }, [])
    return(
        <RankPresenter />
        )
}
export default RankContainer