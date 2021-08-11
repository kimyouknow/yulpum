import React, {useState, useEffect} from "react";
import StatPresenter from "./StatPresenter";
import {useDispatch} from "react-redux";
import { connect } from "react-redux";
import { renderCalendar } from "../../hoc/renderCalendar";
import { getCalendar, getLine } from "../../_actions/calendar_actions";

const StatContainer = ({states}) => {
    const {calendar: {activeD, activeM, activeY}} = states;
    // const active = new Date(activeY, activeM, activeD);
    const [dates, setDates] = useState([]);
    const dispatch = useDispatch();
    const tokenData = document.cookie.split("=")[1];
    const onClick = async() => {
        // const {date:activeDate} = data;
        const body = {
            year: activeY,
            month: activeM,
            date: activeD,
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
    }, [states])
    return(
        <StatPresenter 
            dates={dates}
            activeDate={{activeD,activeM,activeY}}
            onClick={onClick}
        />
        )
}
function mapStateToProps(state, ownProps){
    return {states : state}
}

export default connect(mapStateToProps, null)(StatContainer);