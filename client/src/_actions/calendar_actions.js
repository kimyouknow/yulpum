import axios from 'axios';
import { ADD_PLAN, CHANGE_DATE, DELETE_PLAN, GET_CALENDAR, GET_LINE, NEXT_MONTH, PREV_MONTH, SET_TODAY } from './types';

export const changeDate = (date) =>{
    return {type: CHANGE_DATE, date};
};
export const setToday = (date) =>{
    return {type: SET_TODAY, date};
};
export const prevMonth = (thisMonth) =>{
    return {type:PREV_MONTH, thisMonth};
};
export const nextMonth = (thisMonth) =>{
    return {type:NEXT_MONTH, thisMonth};
};

export function getCalendar(dataTosubmit) {
    const request = axios.post("api/statics/get-calendar", dataTosubmit)
        .then(response => response.data)
    return {
        type: GET_CALENDAR,
        payload: request
    }
}

export function getLine(dataTosubmit) {
    const request = axios.post("api/statics/get-line", dataTosubmit)
        .then(response => response.data)
    return {
        type: GET_LINE,
        payload: request
    }
}

export function addPlan(data) {
    return {
        type: ADD_PLAN,
        payload: data
    }
}

export function DeletePlan(dataTosubmit) {
    const request = axios.post("api/planner/delete-todo", dataTosubmit)
        .then(response => response.data)
    return {
        type: DELETE_PLAN,
        payload: request
    }
}

export const addPlanServer = (dataTosubmit) => {
    return async function (dispatch) {
        axios.post("api/planner/add-todo", dataTosubmit)
            .then(response => dispatch(addPlan(dataTosubmit)))
    }
}