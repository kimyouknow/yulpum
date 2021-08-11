export const compareDate = (input) => {
    const inputDate = new Date(input);
    const inputY = String(inputDate.getFullYear());
    const inputM = String(inputDate.getMonth());
    const inputD = String(inputDate.getDate());
    return inputY+inputM+inputD
}

export const renderCalendar = (renderYear, renderMonth, serverData, pathname) => {
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
            const i_date = new Date(renderYear, renderMonth, i);
            let i_total_time  = 0;
            let i_todo = null;
            const matchDate = serverData.find(obj => compareDate(obj.c_date) === compareDate(i_date));
            if(matchDate) {
                i_total_time = matchDate.c_total_time
                i_todo = matchDate.c_todo
            }
            if(pathname === "planner"){
                CDates.push({
                    date: i_date,
                    todo:i_todo,
                    total_time: 0,
                    isCur: true
                })
            } else if (pathname === "stat"){
                CDates.push({
                    date: i_date,
                    total_time: i_total_time,
                    isCur: true
                })
            }
        }
        // Sunday - Saturday : 0 - 6
        if (PLDay !== 6){
            for (let i = PLDay; i >= 0; i--){
                PDates.push({
                    date: new Date(renderYear, renderMonth-1, PLDate-i),
                    total_time: -1,
                    isCur: false
                });
            }
        }
        if (CLDay !== 6) {
            for (let i = 1; i <= 6-CLDay; i++){
                NDates.push({
                    date: new Date(renderYear, renderMonth+1, i),
                    total_time: -1,
                    isCur: false
                });
            }
        }
        return (PDates.concat(CDates, NDates));
}