import React, { useEffect, useState } from "react";
import StatPresenter from "./StatPresenter";
import {useDispatch} from "react-redux";
import { getCalendar } from "../../_actions/calendar_actions";

const StatContainer = () => {
    const tokenData = document.cookie.split("=")[1];
    const dispatch = useDispatch();
    const weeks = ["SUN", "MON","TUE","WED","THU","FRI","SAT"];
    const [dato, setDato] = useState(new Date());
    const [today, setToday] = useState("");
    const [dates, setDates] = useState([]);
    const renderCalendar = () => {
        const renderYear = dato.getFullYear();
        const renderMonth = dato.getMonth();
        setToday(`${renderYear}년 ${renderMonth+1}월`);
        let body = {
            year: renderYear,
            month: renderMonth,
            token: tokenData
        }
        // dispatch(getCalendar(body))
        //     .then(response => {
        //         const {isSuccess, body} = response.payload;
        //         if (!isSuccess) {
        //             alert("Error!");
        //         }
        //         console.log(body);
        //     })

        const preLast = new Date(renderYear, renderMonth, 0);
        const currentLast = new Date(renderYear, renderMonth+1, 0);
        const PLDate = preLast.getDate();
        const PLDay = preLast.getDay();

        const CLDate = currentLast.getDate();
        const CLDay = currentLast.getDay();

        const PDates = [];
        const CDates = [...Array(CLDate+1).keys()].slice(1);
        const NDates = [];
        
        if (PLDay !== 0){
            for (let i = PLDay; i >= 0; i--){
                PDates.push(PLDate-i);
            }
        }

        if (CLDay !== 6) {
            for (let i = 1; i <= 6-CLDay; i++){
                NDates.push(i);
            }
        }
        setDates(PDates.concat(CDates, NDates));
    }
    const handleLastMonth = () => {    
        let newMonth = new Date(dato.setMonth(dato.getMonth() - 1));
        setDato(newMonth);
        renderCalendar();
        
    }

    const handleNextMonth = () => {
        let newMonth = new Date(dato.setMonth(dato.getMonth() + 1));
        setDato(newMonth);
        renderCalendar();
    }
    const handleToday = () => {
        setDato(new Date());
        renderCalendar();
    }
    useEffect(() => {
        renderCalendar();
    },[])
    return(
        <StatPresenter 
            today={today}
            weeks={weeks}
            dates={dates}
            handleLastMonth={handleLastMonth}
            handleNextMonth={handleNextMonth}
            handleToday={handleToday}
        />
        )
}
export default StatContainer


// app.post("/api/get-calendar", (req, res) => {
//     // console.log(req, req.body);
//     res.status(200).json({
//         isSuccess: true,
//         body: [
//             {
//                 date: new Date(2021, 7, 1),
//                 total_time: 3600,
//                 todo: ["english", "study"]
//             },
//             {
//                 date: new Date(2021, 7, 9),
//                 total_time: 4800,
//                 todo: ["science", "math"]
//             },
//             {
//                 date: new Date(2021, 7, 12),
//                 total_time: 4000,
//                 todo: ["coding", "take a work"]
//             },
//             {
//                 date: new Date(2021, 7, 20),
//                 total_time: 4000,
//                 todo: ["multer", "eating"]
//             }
//         ]
//     });
// })