import { UPDATE_TIMER, GET_SUBJECT_TIME } from "../_actions/types";

export default function (state={}, action) {
    switch(action.type) {
        case UPDATE_TIMER:
            return{...state, timerData: action.payload}
        case GET_SUBJECT_TIME:
            return{...state, timerData: action.payload}
        default:
            return state;
    }
}