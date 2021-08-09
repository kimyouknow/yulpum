import React, {useState, useEffect} from "react";
import PlannerPresenter from "./PlannerPresenter";
import {useDispatch} from "react-redux";
import { renderCalendar, getRenderBase } from "../../hoc/renderCalendar";
import { AddPlan, DeletePlan, getCalendar } from "../../_actions/calendar_actions";

// 여기에 랜더링이 있으어햠 -> todo를 추가할 때마다 재 랜덜링되어야해서
//  date가 바귈떄마다 재 랜더링

const PlannerContainer = () => {
    const dispatch = useDispatch();
    const tokenData = document.cookie.split("=")[1];
    const [planInput, setPlanInput] = useState("");
    const [dato, setDato] = useState(new Date());
    const [active, setActive] = useState(new Date());
    const [dates, setDates] = useState([]);
    const [plans, setPlans] = useState(null);
    const onClick = (data) => {
        const {date:activeDate} = data;
        setActive(new Date(activeDate));
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setPlanInput("");
        const body = {
            year: new Date(active).getFullYear(),
            month: new Date(active).getMonth(),
            date: new Date(active).getDate(),
            todo: planInput,
            token: tokenData
        }
        const response = await dispatch(AddPlan(body));
        const {payload} = response;
        console.log(payload);
    }
    const handleCheck = async (isDel, element, idx) => {
        if(isDel){
            const body = {
                year: new Date(active).getFullYear(),
                month: new Date(active).getMonth(),
                date: new Date(active).getDate(),
                todo: element,
                token: tokenData
            }
            console.log(body)
            const response = await dispatch(DeletePlan(body));
            console.log(response)
        } else{
            
        }
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
        const {renderYear, renderMonth} = await getRenderBase(dato);
        let body = {
            year: renderYear,
            month: renderMonth,
            token: tokenData
        }
        const serverData = await getServerData(body);
        const dates = renderCalendar(renderYear, renderMonth, serverData, "planner");
        setDates(dates);
    }
    useEffect(() => {
        renderingCalendar();
    }, [dato])
    return(
        <PlannerPresenter 
            dates={dates}
            dato={dato}
            setDato={setDato}
            getServerData={getServerData}
            planInput={planInput}
            setPlanInput={setPlanInput}
            onSubmitHandler={onSubmitHandler}
            onClick={onClick}
            handleCheck={handleCheck}
            plans={plans}
        />
        )
}
export default PlannerContainer