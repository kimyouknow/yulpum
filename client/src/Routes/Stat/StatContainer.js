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
        const serverData =  [
            {
                date: new Date(2021, 6, 1),
                total_time: 2400,
                todo: ["english", "study"]
            },
            {
                date: new Date(2021, 6, 9),
                total_time: 3600,
                todo: ["science", "math"]
            },
            {
                date: new Date(2021, 6, 12),
                total_time: 3800,
                todo: ["coding", "take a work"]
            },
            {
                date: new Date(2021, 6, 24),
                total_time: 3800,
                todo: ["coding", "take a work"]
            },
            {
                date: new Date(2021, 6, 20),
                total_time: 4400,
                todo: ["multer", "eating"]
            },
            {
                date: new Date(2021, 6, 28),
                total_time: 4800,
                todo: ["multer", "eating"]
            }
        ]
        const preLast = new Date(renderYear, renderMonth, 0);
        const currentLast = new Date(renderYear, renderMonth+1, 0);
        const PLDate = preLast.getDate();
        const PLDay = preLast.getDay();
        // console.log("PL",PLDate, PLDay,preLast)
        const CLDate = currentLast.getDate();
        const CLDay = currentLast.getDay();
        // console.log("CL",CLDate, CLDay,currentLast)
        const PDates = [];
        const CDates = [];
        const NDates = [];
        const compareDate = (input) => {
            const inputY = String(input.getFullYear());
            const inputM = String(input.getMonth());
            const inputD = String(input.getDate());
            return inputY+inputM+inputD
        }
        for(let i = 1; i < CLDate+1; i++ ){
            const i_date = new Date(renderYear, renderMonth, i);
            let i_total_time  = 0;
            let i_todo = null;
            const matchDate = serverData.find(obj => compareDate(obj.date) === compareDate(i_date));
            if(matchDate) {
                i_total_time = matchDate.total_time
                i_todo = matchDate.todo
            }
            CDates.push({
                date: i_date,
                total_time: i_total_time,
                todo:i_todo,
                isCurrent: true 
            })
        }
        // Sunday - Saturday : 0 - 6
        if (PLDay !== 6){
            for (let i = PLDay; i >= 0; i--){
                PDates.push({
                    date: new Date(renderYear, renderMonth-1, PLDate-i),
                    total_time: -1
                });
            }
        }
        if (CLDay !== 6) {
            for (let i = 1; i <= 6-CLDay; i++){
                NDates.push({
                    date: new Date(renderYear, renderMonth+1, i),
                    total_time: -1
                });
            }
        }
        setDates(PDates.concat(CDates, NDates));
    }
    const handleLastMonth = () => {    
        const newMonth = new Date(dato.setMonth(dato.getMonth() - 1));
        const newDate = new Date(newMonth.setDate(1))
        setDato(newDate);
        renderCalendar();
        
    }

    const handleNextMonth = () => {
        const newMonth = new Date(dato.setMonth(dato.getMonth() + 1));
        const newDate = new Date(newMonth.setDate(1))
        setDato(newDate);
        renderCalendar();
    }
    const handleToday = () => {
        const newDate = new Date();
        setDato(newDate);
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