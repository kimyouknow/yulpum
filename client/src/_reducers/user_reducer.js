import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    GET_RANK
} from '../_actions/types';

const initState = {
    rankData: [],
    userName: ""
}

const userReducer = (state=initState, action) => {
    // type마다 다른 것을 switch로 처리
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
        case REGISTER_USER:
            return {...state, register: action.payload}
        case AUTH_USER:
            return {...state, userName: action.payload.userName, userData: action.payload}
        case GET_RANK:
            return {...state, rankData: action.payload.resultArr}
        default:
            return state;
    }
}

export default userReducer