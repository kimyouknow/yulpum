import axios from 'axios';
import { TIMER } from './types';

export function sumTimer(dataTosubmit) {
    const request = axios.post('api/sum', dataTosubmit)
            .then(response => response.data)

    return {
        type: TIMER,
        payload: request
    }
}