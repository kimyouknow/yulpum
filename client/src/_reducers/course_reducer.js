import { GET_COURSES, ADD_COURSE } from "../_actions/types";

export default function (state={}, action) {
    switch(action.type) {
        case ADD_COURSE:
            return{...state, courseData: action.payload}
        case GET_COURSES:
            return{...state, courseData: action.payload}
        default:
            return state;
    }
}