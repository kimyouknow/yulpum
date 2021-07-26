import React, { useEffect, useState } from "react";
import StatPresenter from "./StatPresenter";

const StatContainer = () => {
    const weeks = ["SUN", "MON","TUE","WED","THU","FRI","SAT"];
    const [dato, setDato] = useState(new Date());
    const [today, setToday] = useState("");
    const [dates, setDates] = useState([]);
    const renderCalendar = () => {
        const renderYear = dato.getFullYear();
        const renderMonth = dato.getMonth();
        setToday(`${renderYear}년 ${renderMonth+1}월`);
        const preLast = new Date(renderYear, renderMonth, 0);
        const currentLast = new Date(renderYear, renderMonth+1, 0);
        const PLDate = preLast.getDate();
        const PLDay = preLast.getDay();

        const CLDate = currentLast.getDate();
        const CLDay = currentLast.getDay();

        const PDates = [];
        const CDates = [...Array(CLDate+1).keys()].slice(1);
        const NDates = [];
        console.log(typeof(CDates[1]));
        
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