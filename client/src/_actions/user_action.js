import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    GET_RANK
} from './types';

export function loginUser(dataTosubmit) {
    const request = axios.post('/api/login', dataTosubmit)
            .then(response => response.data)
    return {
        // request변수로 받은 data를 reducer로 넘겨주기
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataTosubmit) {
    const request = axios.post('/api/register', dataTosubmit)
            .then(response => response.data)
    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function auth() {
    const request = axios.get('/api/auth')
    .then(response =>  response.data )
    return {
        type: AUTH_USER,
        payload: request
    }
}

export function requestRank() {
    const request = axios.get('/api/rank/get-rank')
    .then(response =>  response.data )
    return {
        type: GET_RANK,
        payload: request
    }
}