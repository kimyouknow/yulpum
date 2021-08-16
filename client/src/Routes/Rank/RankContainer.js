import React, {useState, useEffect} from "react";
import RankPresenter from "./RankPresenter";
import { useDispatch, useSelector } from 'react-redux';
import { requestRank } from "../../_actions/user_action";

const RankContainer = () => {
    const tokenData = document.cookie.split("=")[1];
    const dispatch = useDispatch();
    const [timeValue, setTimeValue] = useState(0);
    const {user: {rankData}, calendar} = useSelector((state) => state);
    const getRankData = async() => {
        await dispatch(requestRank());
    }
    useEffect(() => {
        getRankData();
    }, [])
    useEffect(() => {
        const activeTime = setTimeout(() => setTimeValue(timeValue + 1), 1000);
        return () => clearTimeout(activeTime);
    },[timeValue])
    return(
        <RankPresenter 
        rankData={rankData}
        calendar={calendar}
        timeValue={timeValue}
        />
        )
}
export default RankContainer