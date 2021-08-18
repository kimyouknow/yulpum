import { ADD_PLAN, CHANGE_DATE, DELETE_PLAN, GET_CALENDAR, GET_LINE, NEXT_MONTH, PREV_MONTH, SET_TODAY } from "../_actions/types";

const initState = {
    activeD: new Date().getDate(),
    activeM: new Date().getMonth(),
    activeY: new Date().getFullYear(),
    monthData: [],
    dayData: []
}

const calendarReducer = (state = initState, action) => {
    const found = (date) => state.monthData.find(element => {
        const eleData = new Date(element.date);
        return (eleData.toISOString().substring(0, 10)) === date.toISOString().substring(0, 10)
    });
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
            let temp = []
            action.payload.ret.map((ele) => temp.push({todo: ele.c_todo, date: ele.c_date}))
            return {...state, monthData:temp, calendarData: action.payload} 
        case ADD_PLAN:
            const {date, month, year, todo} = action.payload;
            const tempDate = new Date(year, month, date);
            return{...state, monthData: [...state.monthData,{...found(tempDate)}]}
        case DELETE_PLAN:
            console.log(action)
            return{...state, calendarData: action.payload}
        case GET_LINE:
            return{...state, dayData:action.payload.found}
        default:
            return state;
    }
}

export default calendarReducer;