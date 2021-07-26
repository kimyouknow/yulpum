import axios from 'axios';
import { GET_CALENDAR } from './types';

export function getCalendar(dataTosubmit) {
    const request = axios.post("api/get-calendar", dataTosubmit)
        .then(response => response.data)
    
    return {
        type: GET_CALENDAR,
        payload: request
    }
}
