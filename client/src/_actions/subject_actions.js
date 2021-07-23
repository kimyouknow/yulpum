import axios from 'axios';
import { ADD_SUBJECT, GET_SUBJECTS, EDIT_SUBJECTS, DELETE_SUBJECTS } from './types';

export function getSubject(dataTosubmit) {
    const request = axios.post("api/get-subject", dataTosubmit)
        .then(response => response.data)
    
    return {
        type: GET_SUBJECTS,
        payload: request
    }
}

export function addSubject(dataTosubmit) {
    const request = axios.post('/api/add-subject', dataTosubmit)
            .then(response => response.data)

    return {
        type: ADD_SUBJECT,
        payload: request
    }
}

export function editSubject(dataTosubmit) {
    const request = axios.post('/api/edit-subject', dataTosubmit)
            .then(response => response.data)

    return {
        type: EDIT_SUBJECTS,
        payload: request
    }
}

export function deleteSubject(dataTosubmit) {
    const request = axios.post('/api/delete-subject', dataTosubmit)
            .then(response => response.data)

    return {
        type: DELETE_SUBJECTS,
        payload: request
    }
}