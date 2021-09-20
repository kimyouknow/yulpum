import axios from 'axios';
import { ADD_GROUP, EXIT_GROUP, FINDGROUP, GET_GROUP_DETAIL, GET_MY_GROUP } from './types';

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

export function signInGroup(dataTosubmit) {
    const request = axios.post('/api/group/add-group', dataTosubmit)
            .then(response => response.data)
    return {
        type: ADD_GROUP,
        payload: request
    }
}

export function getGroupDetail(dataTosubmit) {
    const request = axios.post('/api/group/get-detail', dataTosubmit)
            .then(response => response.data)
    return {
        type: GET_GROUP_DETAIL,
        payload: request
    }
}

export function exitGroup(dataTosubmit) {
    const request = axios.post('/api/group/exit-group', dataTosubmit)
            .then(response => response.data)
    return {
        type: EXIT_GROUP,
        payload: request
    }
}