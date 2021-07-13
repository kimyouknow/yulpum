import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from './types';

const api = axios.create({
    baseURL: "http://localhost:3000/api/"
})

export function loginUser(dataTosubmit) {
    const request = api.post('login', dataTosubmit)
            .then(response => response.data)

    return {
        // request변수로 받은 data를 reducer로 넘겨주기
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataTosubmit) {
    const request = api.post('register', dataTosubmit)
            .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function auth() {
    const request = api.get('auth')
    .then(response =>  response.data )

    return {
        type: AUTH_USER,
        payload: request
    }
}
