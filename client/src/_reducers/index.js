import { combineReducers} from 'redux';
import user from './user_reducer';
import course from "./course_reducer";
import timer from "./timer_reducer";

const rootReducer = combineReducers({
    user,
    course,
    timer
})

export default rootReducer;