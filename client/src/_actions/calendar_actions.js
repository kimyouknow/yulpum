import axios from 'axios';
import { ADD_PLAN, DELETE_PLAN, GET_CALENDAR, GET_LINE } from './types';

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

export function AddPlan(dataTosubmit) {
    const request = axios.post("api/planner/add-todo", dataTosubmit)
        .then(response => response.data)
    
    return {
        type: ADD_PLAN,
        payload: request
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