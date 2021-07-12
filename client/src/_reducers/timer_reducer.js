import { TIMER } from "../_actions/types";

export default function (state={}, action) {
    switch(action.type) {
        case TIMER:
            return{...state, timerData: action.payload}
        default:
            return state;
    }
}