import axios from 'axios';
import { ADD_COURSE, GET_COURSES } from './types';

export function getCourses(dataTosubmit) {
    const request = axios.post("/api/getCourse", dataTosubmit)
        .then(response => response.data)
    
    return {
        type: GET_COURSES,
        payload: request
    }
}



export function addCourse(dataTosubmit) {
    const request = axios.post('api/add', dataTosubmit)
            .then(response => response.data)

    return {
        type: ADD_COURSE,
        payload: request
    }
}
