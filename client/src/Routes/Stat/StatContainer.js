import React, {useState, useEffect} from "react";
import StatPresenter from "./StatPresenter";
import { useDispatch, useSelector } from 'react-redux';
import { renderCalendar } from "../../hoc/renderCalendar";
import { getCalendar, getLine } from "../../_actions/calendar_actions";

const StatContainer = () => {
    const tokenData = document.cookie.split("=")[1];
    const dispatch = useDispatch();
    const {calendar} = useSelector((state) => state);
    const {activeD, activeM, activeY, monthData} = calendar;
    const [dates, setDates] = useState([]);
    const renderingCalendar = async() => {
        let body = {
            year: activeY,
            month: activeM,
            token: tokenData
        }
        await dispatch(getLine({...body ,date:activeD}));
        const response = await dispatch(getCalendar(body));
        const {isSuccess} = response.payload;
        if (!isSuccess) {
            alert("Error!");
        }
        // setSd(ret)
        const dates = renderCalendar(activeY, activeM);
        setDates(dates);
    }
    useEffect(() => {
        renderingCalendar();
    }, [activeM, activeD])
    return(
        <StatPresenter 
            dates={dates}
            activeDate={{activeD,activeM,activeY}}
            monthData={monthData}
        />
        )
}

export default StatContainer;