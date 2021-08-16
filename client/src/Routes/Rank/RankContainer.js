import React, {useState, useEffect} from "react";
import RankPresenter from "./RankPresenter";
import { useDispatch, useSelector } from 'react-redux';
import { requestRank } from "../../_actions/user_action";

const RankContainer = () => {
    const tokenData = document.cookie.split("=")[1];
    const dispatch = useDispatch();
    const {user: {rankData}, calendar} = useSelector((state) => state);
    const getRankData = async() => {
        await dispatch(requestRank());
    }
    useEffect(() => {
        getRankData();
    }, [])
    return(
        <RankPresenter 
        rankData={rankData}
        calendar={calendar}
        />
        )
}
export default RankContainer