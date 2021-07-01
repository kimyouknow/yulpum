import axios from 'axios';
import { COURSE } from './types';

export function addCourse(dataTosubmit) {
    const request = axios.post('api/add', dataTosubmit)
            .then(response => response.data)

    return {
        type: COURSE,
        payload: request
    }
}