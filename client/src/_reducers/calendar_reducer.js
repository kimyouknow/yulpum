import { ADD_PLAN, CHANGE_DATE, DELETE_PLAN, GET_CALENDAR, GET_LINE, NEXT_MONTH, PREV_MONTH, SET_TODAY } from "../_actions/types";

const initState = {
    activeD: new Date().getDate(),
    activeM: new Date().getMonth(),
    activeY: new Date().getFullYear(),
    monthData: [],
    dayData: [],
    refresh: false
}

const calendarReducer = (state = initState, action) => {
    switch(action.type) {
        case CHANGE_DATE:{
            const newDate = new Date(action.date);
            return {...state, activeD: newDate.getDate()};
        }
        case SET_TODAY:{
            const newDate = action.date;
            return {...state, activeD: newDate.getDate(), activeM: newDate.getMonth(), activeY: newDate.getFullYear()};
        }
        case PREV_MONTH:{
            let newM = state.activeM -1;
            let newY = state.activeY;
            let newD = new Date(newY, newM, 1).getDate();
            if(state.activeM === 0){
                newM =  state.activeM+11;
                newY = state.activeY-1;
                newD = new Date(newY, newM, 1).getDate();
                return {...state, activeD: newD,activeM: newM, activeY:newY }
            } return {...state,activeD: newD, activeM:newM}
        }
        case NEXT_MONTH:{
            let newM = state.activeM +1;
            let newY = state.activeY;
            let newD = new Date(newY, newM, 1).getDate();
            if(state.activeM===11){
                newM =  state.activeM-11;
                newY = state.activeY+1;
                newD = new Date(newY, newM, 1).getDate();
                return {...state, activeD: newD,activeM: newM, activeY:newY }
            } return {...state,activeD: newD, activeM:newM}
        }
        case GET_CALENDAR:
            return {...state, monthData:action.payload.ret, calendarData: action.payload} 
        case ADD_PLAN:
            return{...state, refresh: !state.refresh}
        case DELETE_PLAN:
            return{...state, refresh: !state.refresh}
        case GET_LINE:
            return{...state, dayData:action.payload.found}
        default:
            return state;
    }
}

export default calendarReducer;