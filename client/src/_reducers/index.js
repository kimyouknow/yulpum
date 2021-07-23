import { combineReducers} from 'redux';
import user from './user_reducer';
import subject from "./subject_reducer";
import timer from "./timer_reducer";

const rootReducer = combineReducers({
    user,
    subject,
    timer
})

export default rootReducer;