import { ADD_SUBJECT, GET_SUBJECTS, EDIT_SUBJECTS, DELETE_SUBJECTS } from "../_actions/types";

const subjectReducer = (state={}, action) => {
    switch(action.type) {
        case ADD_SUBJECT:
            return{...state, subjectData: action.payload}
        case GET_SUBJECTS:
            return{...state, subjectData: action.payload}
        case EDIT_SUBJECTS:  
            return{...state, subjectData: action.payload}
        case DELETE_SUBJECTS:  
            return{...state, subjectData: action.payload}
        default:
            return state;
    }
}

export default subjectReducer