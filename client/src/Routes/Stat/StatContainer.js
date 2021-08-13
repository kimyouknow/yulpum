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
        await dispatch(getLine({...body, date:activeD}));
        const dates = renderCalendar(activeY, activeM, serverData, "stat");
        setDates(dates);
    }
    useEffect(() => {
        renderingCalendar();
    }, [activeD, activeM])
    return(
        <StatPresenter 
            dates={dates}
            activeDate={{activeD,activeM,activeY}}
        />
        )
}

export default StatContainer;