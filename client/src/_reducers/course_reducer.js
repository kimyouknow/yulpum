import { COURSE } from "../_actions/types";

export default function (state={}, action) {
    switch(action.type) {
        case COURSE:
            return{...state, courseData: action.payload}
        default:
            return state;
    }
}