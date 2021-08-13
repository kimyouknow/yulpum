import React, {useState, useEffect} from "react";
import StatPresenter from "./StatPresenter";
import { useDispatch, useSelector } from 'react-redux';
import { renderCalendar } from "../../hoc/renderCalendar";
import { getCalendar, getLine } from "../../_actions/calendar_actions";

const StatContainer = () => {
    const tokenData = document.cookie.split("=")[1];
    const dispatch = useDispatch();
    const {calendar} = useSelector((state) => state);
    const {activeD, activeM, activeY} = calendar;
    const [dates, setDates] = useState([]);
    const onClick = async(data) => {
        const clicked = new Date(data)
        const body = {
            year: clicked.getFullYear(),
            month: clicked.getMonth(),
            date: clicked.getDate(),
            token: tokenData
        }
        const response = await dispatch(getLine(body));
        const {payload} = response;
        console.log(payload);
        // history.push("/stat/daily");
    }
    const getServerData = async(body) => {
        const response = await dispatch(getCalendar(body));
        const {isSuccess, ret} = response.payload;
        if (!isSuccess) {
            alert("Error!");
        }
        return ret
    }
    const renderingCalendar = async() => {
        let body = {
            year: activeY,
            month: activeM,
            token: tokenData
        }
        const serverData = await getServerData(body);
        const dates = renderCalendar(activeY, activeM, serverData, "stat");
        setDates(dates);
    }
    useEffect(() => {
        renderingCalendar();
    }, [calendar])
    return(
        <StatPresenter 
            dates={dates}
            activeDate={{activeD,activeM,activeY}}
            onClick={onClick}
        />
        )
}

export default StatContainer;