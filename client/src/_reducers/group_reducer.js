import { ADD_GROUP, CREATE_GROUP, EXIT_GROUP, FINDGROUP, GET_GROUP_DETAIL, GET_MY_GROUP } from "../_actions/types";

const initState = {

}

const groupReducer = (state=initState, action) => {
    switch (action.type) {
        case GET_MY_GROUP:
            return {...state, groupData: action.payload}
        case CREATE_GROUP:
                return {...state, groupData: action.payload}
        case ADD_GROUP:
            return {...state, groupData: action.payload}
        case EXIT_GROUP:
                return {...state, groupData: action.payload}
        case FINDGROUP:
            return {...state, groupData: action.payload}
        case GET_GROUP_DETAIL:
                return {...state, groupData: action.payload}
        default:
            return state;
    }
}
export default groupReducer;