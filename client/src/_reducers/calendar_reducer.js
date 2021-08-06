import { ADD_PLAN, DELETE_PLAN, GET_CALENDAR, GET_LINE } from "../_actions/types";

export default function (state={}, action) {
    switch(action.type) {
        case GET_CALENDAR:
            return{...state, calendarData: action.payload}
        case GET_LINE:
            return{...state, calendarData: action.payload}
        case ADD_PLAN:
            return{...state, calendarData: action.payload}
        case DELETE_PLAN:
            return{...state, calendarData: action.payload}
        default:
            return state;
    }
}