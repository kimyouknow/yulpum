import { combineReducers} from 'redux';
import user from './user_reducer';
import course from "./course_reducer";

const rootReducer = combineReducers({
    user,
    course
})

export default rootReducer;