import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from '../_actions/types';

export default function (state={}, action) {
    // type마다 다른 것을 switch로 처리
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
            // loginSuccess에 user_actions에서 받은 payload(request)를 넣어줌
        case REGISTER_USER:
            return {...state, register: action.payload}
        case AUTH_USER:
            return {...state, userData: action.payload}
        case AUTH_USER:
            return {...state, userData: action.payload}   
        default:
            return state;
    }
}