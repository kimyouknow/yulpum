import React, {useState, useEffect} from "react";
import StatPresenter from "./StatPresenter";
import {useDispatch} from "react-redux";
import { getCalendar } from "../../_actions/calendar_actions";

const StatContainer = () => {
    const dispatch = useDispatch();
    const getServerData = async(body) => {
        const response = await dispatch(getCalendar(body))
        const {isSuccess, ret} = response.payload;
        if (!isSuccess) {
            alert("Error!");
        }
        return ret
        // dispatch(getCalendar(body))
        //     .then(response => {
        //         const {isSuccess, ret} = response.payload;
        //         if (!isSuccess) {
        //             alert("Error!");
        //         }
        //         serverData = ret
        //     })
        // return serverData;
    }
    useEffect(() => {
        getServerData();
    },[])
    return(
        <StatPresenter 
            getServerData={getServerData}
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