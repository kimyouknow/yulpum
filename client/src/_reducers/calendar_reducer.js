import { GET_CALENDAR } from "../_actions/types";

export default function (state={}, action) {
    switch(action.type) {
        case GET_CALENDAR:
            return{...state, calendarData: action.payload}
        default:
            return state;
    }
}