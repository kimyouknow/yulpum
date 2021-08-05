import React, {useState, useEffect} from "react";
import CalendarPresenter from "./CalendarPresenter";
import { useLocation } from 'react-router-dom';

const CalendarContainer = ({getServerData}) => {
    const pathname = useLocation().pathname;
    const tokenData = document.cookie.split("=")[1];
    const weeks = ["SUN", "MON","TUE","WED","THU","FRI","SAT"];
    const [dato, setDato] = useState(new Date());
    const [today, setToday] = useState("");
    const [dates, setDates] = useState([]);
    const compareDate = (input) => {
        const inputDate = new Date(input);
        const inputY = String(inputDate.getFullYear());
        const inputM = String(inputDate.getMonth());
        const inputD = String(inputDate.getDate());
        return inputY+inputM+inputD
    }
    const getArray = (renderYear, renderMonth, serverData) => {
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
        for(let i = 1; i < CLDate+1; i++ ){
            const i_date = new Date(renderYear, renderMonth, i);
            let i_total_time  = 0;
            let i_todo = null;
            const matchDate = serverData.find(obj => compareDate(obj.c_date) === compareDate(i_date));
            if(matchDate) {
                i_total_time = matchDate.c_total_time
                i_todo = matchDate.c_todo
            }
            if(pathname === "/planner"){
                CDates.push({
                    date: i_date,
                    todo:i_todo,
                    total_time: 0,
                    isCurrent: true 
                })
            } else if (pathname === "/stat"){
                CDates.push({
                    date: i_date,
                    total_time: i_total_time,
                    isCurrent: true 
                })
            }
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
    const renderCalendar = async() => {
        const renderYear = dato.getFullYear();
        const renderMonth = dato.getMonth();
        setToday(`${renderYear}년 ${renderMonth+1}월`);
        let body = {
            year: renderYear,
            month: renderMonth,
            token: tokenData
        }
        const serverData = await getServerData(body);
        getArray(renderYear, renderMonth, serverData);
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
        <CalendarPresenter 
            today={today}
            weeks={weeks}
            dates={dates}
            handleLastMonth={handleLastMonth}
            handleNextMonth={handleNextMonth}
            handleToday={handleToday}
        />
        )
}
export default CalendarContainer