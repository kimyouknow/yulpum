import axios from 'axios';
import { UPDATE_TIMER ,GET_SUBJECT_TIME } from './types';

const api = axios.create({
    baseURL: "http://localhost:3000/api/"
})

export function getSubjectTime(dataTosubmit) {
    const request = api.post('subject-detail', dataTosubmit)
            .then(response => response.data)

    return {
        type: GET_SUBJECT_TIME,
        payload: request
    }
}

export function updateTimer(dataTosubmit) {
    const request = api.post('save-subject', dataTosubmit)
            .then(response => response.data)

    return {
        type: UPDATE_TIMER,
        payload: request
    }
}