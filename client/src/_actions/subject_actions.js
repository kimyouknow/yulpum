import axios from 'axios';
import { ADD_SUBJECT, GET_SUBJECTS, EDIT_SUBJECTS } from './types';

export function getSubject(dataTosubmit) {
    // console.log(dataTosubmit);
    const request = axios.post("api/get-subject", dataTosubmit)
        .then(response => response.data)
    
    return {
        type: GET_SUBJECTS,
        payload: request
    }
}

export function addSubject(dataTosubmit) {
    // console.log(dataTosubmit);
    const request = axios.post('/api/add-subject', dataTosubmit)
            .then(response => response.data)

    return {
        type: ADD_SUBJECT,
        payload: request
    }
}

export function editSubject(dataTosubmit) {
    // console.log(dataTosubmit);
    const request = axios.post('/api/edit-subject', dataTosubmit)
            .then(response => response.data)

    return {
        type: EDIT_SUBJECTS,
        payload: request
    }
}