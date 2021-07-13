import axios from 'axios';
import { ADD_SUBJECT, GET_SUBJECTS } from './types';

const api = axios.create({
    baseURL: "http://localhost:3000/api/"
})

export function getSubject(dataTosubmit) {
    // console.log(dataTosubmit);
    const request = api.post("get-subject", dataTosubmit)
        .then(response => response.data)
    
    return {
        type: GET_SUBJECTS,
        payload: request
    }
}

export function addSubject(dataTosubmit) {
    console.log(dataTosubmit);
    const request = api.post('add-subject', dataTosubmit)
            .then(response => response.data)

    return {
        type: ADD_SUBJECT,
        payload: request
    }
}
