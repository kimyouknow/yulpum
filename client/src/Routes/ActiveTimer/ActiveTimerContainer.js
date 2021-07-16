import React, {useState, useEffect} from "react";
import { updateTimer, getSubjectTime } from "../../_actions/timer_actions";
import ActiveTimerPresenter from "./ActiveTimerPresenter";
import {useDispatch} from "react-redux";
import {useHistory, useParams, useLocation  } from "react-router";

const ActiveTimerContainer = () => {
    const token = document.cookie.split("=")[1];
    const dispatch = useDispatch();
    const history = useHistory();
    // const params = useParams();
    const {state: {id}} = useLocation();
    // console.log(id);
    const [timeValue, setTimeValue] = useState(0);
    const onSubmitHandler = () => {
        // console.log(timeValue);
        let body = {
            token,
            timeValue,
            id
        };
        dispatch(updateTimer(body))
            .then(response => {
                console.log(response);
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
            id
        }
        dispatch(getSubjectTime(body))
            .then(response => {
                console.log(response);
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
        />
        )
}
export default ActiveTimerContainer