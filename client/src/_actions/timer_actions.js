import axios from 'axios';
import { TIMER } from './types';

export function updateTimer(dataTosubmit) {
    const request = axios.post('api/update-time', dataTosubmit)
            .then(response => response.data)

    return {
        type: TIMER,
        payload: request
    }
}