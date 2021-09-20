import React, {useState, useEffect} from "react";
import { updateTimer, getSubjectTime } from "../../_actions/timer_actions";
import ActiveTimerPresenter from "./ActiveTimerPresenter";
import {useDispatch} from "react-redux";
import {useHistory, useLocation  } from "react-router";

const ActiveTimerContainer = () => {
    const token = document.cookie.split("=")[1];
    const dispatch = useDispatch();
    const history = useHistory();
    const {state: {id: subject_id, text, time}} = useLocation();
    const [timeValue, setTimeValue] = useState(0);
    const [activedSubject, setActivedSubject] = useState(null);
    const [intialTime, setIntialTime] = useState(null);
    const onSubmitHandler = () => {
        // console.log(timeValue);
        let body = {
            token,
            timeValue,
            subject_id
        };
        dispatch(updateTimer(body))
            .then(response => {
                if(response.payload.isWell) {
                    history.push('/');
                } else {
                    alert("Error!");
                }
            })
    }
    const getTime = () => {
        let body = {
            token,
            subject_id
        }
        dispatch(getSubjectTime(body))
            .then(response => {
                const {subject_name, total_time} = response.payload;
                setActivedSubject(text);
                setIntialTime(time);
            })
    }
    useEffect(() => {
        getTime()
    }, []);
    useEffect(() => {
        // if(timeValue < 0) return;
        const activeTime = setTimeout(() => setTimeValue(timeValue + 1), 1000);
        return () => clearTimeout(activeTime);
    },[timeValue])

    return(
        <ActiveTimerPresenter 
            timeValue={timeValue}
            onSubmitHandler={onSubmitHandler}
            activedSubject={activedSubject}
            intialTime={intialTime}
        />
        )
}
export default ActiveTimerContainer