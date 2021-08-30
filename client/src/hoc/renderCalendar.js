export const compareDate = (input) => {
    const inputDate = new Date(input);
    const inputY = String(inputDate.getFullYear());
    const inputM = String(inputDate.getMonth());
    const inputD = String(inputDate.getDate());
    return inputY+inputM+inputD
}

export const setToday = () => {
    const newDate = new Date();
    const setM = newDate.getMonth();
    const setY = newDate.getFullYear();
    return {setY, setM};
}

export const prevMonth = (Y, M, D) => {
    let preM = M -1;
    let preY = Y;
    if(M === 0){
        preM = M+11;
        preY = Y-1;
        return {preY, preM, D};
    }
    return {preY, preM};
}

export const nextMonth = (Y, M, D) => {
    let nextM = M +1;
    let nextY = Y;
    if(M === 11){
        nextM = M-11;
        nextY = Y+1;
        return {nextY, nextM, D};
    }
    return {nextY, nextM};
}

export const renderCalendar = (renderYear, renderMonth) => {
    const preLast = new Date(renderYear, renderMonth, 0);
    const currentLast = new Date(renderYear, renderMonth+1, 0);
    const PLDate = preLast.getDate();
    const PLDay = preLast.getDay();
    const CLDate = currentLast.getDate();
    const CLDay = currentLast.getDay();
    const PDates = [];
    const CDates = [];
    const NDates = [];
    for(let i = 1; i < CLDate+1; i++ ){
        // const i_date = new Date(activeY, activeM, i);
        CDates.push({
            date: new Date(renderYear, renderMonth, i),
            totalTime: 0,
            isCur: true
        });
    }
    // Sunday - Saturday : 0 - 6
    if (PLDay !== 6){
        for (let i = PLDay; i >= 0; i--){
            PDates.push({
                date: new Date(renderYear, renderMonth-1, PLDate-i),
                totalTime: -1,
                isCur: false
            });
        }
    }
    if (CLDay !== 6) {
        for (let i = 1; i <= 6-CLDay; i++){
            NDates.push({
                date: new Date(renderYear, renderMonth+1, i),
                totalTime: -1,
                isCur: false
            });
        }
    }
    return (PDates.concat(CDates, NDates));
}