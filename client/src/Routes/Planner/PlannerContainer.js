import React, {useState, useEffect} from "react";
import PlannerPresenter from "./PlannerPresenter";
import {useDispatch} from "react-redux";
import { renderCalendar, getRenderBase } from "../../hoc/renderCalendar";
import { getCalendar } from "../../_actions/calendar_actions";

// 여기에 랜더링이 있으어햠 -> todo를 추가할 때마다 재 랜덜링되어야해서
//  date가 바귈떄마다 재 랜더링

const PlannerContainer = () => {
    const dispatch = useDispatch();
    const tokenData = document.cookie.split("=")[1];
    const [todoInput, setTodoInput] = useState("");
    const [dato, setDato] = useState(new Date());
    const [dates, setDates] = useState([]);
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const addTodo = todoInput;
        setTodoInput("");
        console.log(addTodo);
    }
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
        const dates = renderCalendar(renderYear, renderMonth, serverData, "planner");
        setDates(dates);
    }
    useEffect(() => {
        temp();
    }, [dato])
    return(
        <PlannerPresenter 
            dates={dates}
            dato={dato}
            setDato={setDato}
            getServerData={getServerData}
            todoInput={todoInput}
            setTodoInput={setTodoInput}
            onSubmitHandler={onSubmitHandler}
        />
        )
}
export default PlannerContainer