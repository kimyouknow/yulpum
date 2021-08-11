import { ADD_PLAN, CHANGE_DATE, DELETE_PLAN, GET_LINE, NEXT_MONTH, PREV_MONTH, SET_TODAY } from "../_actions/types";

const initState = {
    activeD: new Date().getDate(),
    activeM: new Date().getMonth(),
    activeY: new Date().getFullYear()
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
            if(state.activeM === 1){
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
            if(state.activeM===12){
                newM =  state.activeM-11;
                newY = state.activeY+1;
                newD = new Date(newY, newM, 1).getDate();
                return {...state, activeD: newD,activeM: newM, activeY:newY }
            } return {...state,activeD: newD, activeM:newM}
        }
        case GET_LINE:
            return{...state, calendarData: action.payload}
        case ADD_PLAN:
            return{...state, calendarData: action.payload}
        case DELETE_PLAN:
            return{...state, calendarData: action.payload}
        default:
            return state;
    }
}

export default calendarReducer;