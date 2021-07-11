import axios from 'axios';
import { ADD_SUBJECT, GET_SUBJECTS } from './types';

export function getSubject(dataTosubmit) {
    const request = axios.post("/api/getSubject", dataTosubmit)
        .then(response => response.data)
    
    return {
        type: GET_SUBJECTS,
        payload: request
    }
}



export function addSubject(dataTosubmit) {
    const request = axios.post('api/add', dataTosubmit)
            .then(response => response.data)

    return {
        type: ADD_SUBJECT,
        payload: request
    }
}
