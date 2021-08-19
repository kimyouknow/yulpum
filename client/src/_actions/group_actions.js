import axios from 'axios';
import { GET_GROUP, GET_MY_GROUP } from './types';

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

export function searchGroup(dataTosubmit) {
    const request = axios.post('/api/group/get-group', dataTosubmit)
            .then(response => response.data)
    return {
        type: GET_GROUP,
        payload: request
    }
}