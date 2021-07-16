import axios from 'axios';
import { UPDATE_TIMER ,GET_SUBJECT_TIME } from './types';

export function getSubjectTime(dataTosubmit) {
    const request = axios.post('api/subject-detail', dataTosubmit)
            .then(response => response.data)

    return {
        type: GET_SUBJECT_TIME,
        payload: request
    }
}

export function updateTimer(dataTosubmit) {
    const request = axios.post('api/save-subject', dataTosubmit)
            .then(response => response.data)

    return {
        type: UPDATE_TIMER,
        payload: request
    }
}