import axios from 'axios';
import { FINDGROUP, GET_MY_GROUP } from './types';

export function getMyGroup(dataTosubmit) {
    const request = axios.post('/api/group/get-myGroup', dataTosubmit)
            .then(response => response.data)
    return {
        type: GET_MY_GROUP,
        payload: request
    }
}

export function createGroup(dataTosubmit) {
    const request = axios.post('/api/group/create-group', dataTosubmit)
            .then(response => response.data)
    return {
        type: GET_MY_GROUP,
        payload: request
    }
}

export function findGroup(dataTosubmit) {
    const request = axios.get('/api/group/get-group', dataTosubmit)
            .then(response => response.data)
    return {
        type: FINDGROUP,
        payload: request
    }
}