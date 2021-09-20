import { combineReducers} from 'redux';
import user from './user_reducer';
import subject from "./subject_reducer";
import timer from "./timer_reducer";
import calendar from "./calendar_reducer";
import group from "./group_reducer";

const rootReducer = combineReducers({
    user,
    subject,
    timer,
    calendar,
    group
})

export default rootReducer;