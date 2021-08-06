import React, {useState, useEffect} from "react";
import StatPresenter from "./StatPresenter";
import {useDispatch} from "react-redux";
import { renderCalendar, getRenderBase } from "../../hoc/renderCalendar";
import { getCalendar } from "../../_actions/calendar_actions";

const StatContainer = () => {
    const dispatch = useDispatch();
    const tokenData = document.cookie.split("=")[1];
    const [todoInput, setTodoInput] = useState("");
    const [dato, setDato] = useState(new Date());
    const [dates, setDates] = useState([]);
    const getServerData = async(body) => {
        const response = await dispatch(getCalendar(body));
        const {isSuccess, ret} = response.payload;
        if (!isSuccess) {
            alert("Error!");
        }
        return ret
    }
    const temp = async() => {
        const {renderYear, renderMonth} = await getRenderBase(dato);
        let body = {
            year: renderYear,
            month: renderMonth,
            token: tokenData
        }
        const serverData = await getServerData(body);
        const dates = renderCalendar(renderYear, renderMonth, serverData, "stat");
        setDates(dates);
    }
    useEffect(() => {
        temp();
    }, [dato])
    return(
        <StatPresenter 
            dates={dates}
            dato={dato}
            setDato={setDato}
            getServerData={getServerData}
            todoInput={todoInput}
            setTodoInput={setTodoInput}
        />
        )
}
export default StatContainer


// const serverData =  [
        //     {
        //         c_date: new Date(2021, 6, 1),
        //         c_total_time: 2400,
        //         c_todo: "english"
        //     },
        //     {
        //         c_date: new Date(2021, 6, 9),
        //         c_total_time: 3600,
        //         c_todo: "science"
        //     },
        //     {
        //         c_date: new Date(2021, 6, 12),
        //         c_total_time: 3800,
        //         c_todo: "coding"
        //     },
        //     {
        //         c_date: new Date(2021, 6, 24),
        //         c_total_time: 3800,
        //         c_todo: "coding"
        //     },
        //     {
        //         c_date: new Date(2021, 6, 20),
        //         c_total_time: 4400,
        //         c_todo: "multer"
        //     },
        //     {
        //         c_date: new Date(2021, 6, 28),
        //         c_total_time: 4800,
        //         c_todo: "multer"
        //     }
        // ]