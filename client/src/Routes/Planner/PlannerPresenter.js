import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import LoaderCotainer from "../../Components/Loader";
import AddModal from "../../Components/PlannerComponents/AddModal";
import EditModal from "../../Components/PlannerComponents/EditModal";
import { compareDate } from "../../hoc/renderCalendar";
import { nextMonth, prevMonth, setToday } from "../../_actions/calendar_actions";


const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    margin-top:48px;
`;

const Header = styled.div`
    display: flex;
    justify-content:center;
    margin-bottom: 20px;
`;

const WeekContainer =styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

const WeekComponent = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    height: 70px;
    :nth-child(7n+1){
        color: #d13e3e;
    }
    :nth-child(7n){
        color: #396ee2;
    }
`;

const DisplayMonth = styled.div`
    &:hover{
        cursor: pointer;
    }
`;

const Button = styled.div`
    &:hover{
        cursor: pointer;
    }
`;

const DateContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-bottom: 20px;
`;

const DateComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 120px;
    min-width: 62px;
    padding: 8px;
    position: relative;
    border: none;
    :nth-child(7n+1){
        color: #d13e3e;
    };
    :nth-child(7n){
        color: #396ee2;
    };
    cursor: pointer;
`;

const DateEle = styled.div`
    padding: 6px;
    margin-bottom: 4px;
    color: ${props => (props.today ? "#fff" : "#000")};
    background-color: ${props => (props.today ? "rgba(255, 107, 129,1.0)" : "none")};
    border-radius: ${props => (props.today ? "50%" : "none")};
`;

const ToDoContainer = styled.div`
    display: flex;
    flex-direction:column;
    width: 90%;
    z-index: 5;
    &:hover .overflow {
        opacity: 1;
        visibility: visible;
    }
`;

const ToDoElement = styled.div`
    font-size: 0.9rem;
    padding: 4px 0;
    color: #fff;
    margin-top: 4px;
    text-align: center;
    background-color: ${props => props.done? "rgba(255, 107, 129,1.0)": "rgba(164, 176, 190,1.0)" };
    border-radius: 6px;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.done? "rgba(255, 107, 129,0.5)": "rgba(164, 176, 190,0.5)" };
    }
    &.overflow{
        z-index: 10;
        opacity: 0;
        visibility: hidden;
    }
    &.more{
        text-align: center;
    }
`;

const PlannerPresenter = ({dates, activeDate, monthData, handleModal, openModal, setOpenModal}) => {
    const dispatch = useDispatch();
    const weeks = ["SUN", "MON","TUE","WED","THU","FRI","SAT"];    
    const {activeM,activeY} = activeDate;
    const [activeInfo, setActiveInfo] = useState(null);
    const filtered = (date) => monthData.find(obj => compareDate(obj.c_date) === compareDate(date.date));
    // console.log(monthData)
    return (
        <>
        {dates.length === 0 ? <LoaderCotainer /> :
            <Container>
                <Header>
            <Button onClick={() => dispatch(prevMonth(activeM))}>◀</Button>
                <DisplayMonth onClick={()=> dispatch(setToday(new Date()))}>
                    {activeY}년 {activeM+1}월
                </DisplayMonth>
            <Button onClick={() => dispatch(nextMonth(activeM))}>▶</Button>
                </Header>
                <WeekContainer>
                    {weeks.map(week => <WeekComponent key={week}>{week}</WeekComponent>)}
                </WeekContainer>
                <DateContainer>
                    {!dates ? <h1>Loading</h1> : 
                    dates.map(date =>
                    <DateComponent key={date.date} 
                        timecolor={date.total_time}
                        isCur={date.isCur}>
                            <DateEle today={date.date.getDate() === new Date().getDate() && date.date.getMonth() === new Date().getMonth()}>{date.date.getDate()}</DateEle>
                            {filtered(date) &&
                            <ToDoContainer>
                            {filtered(date).c_todo.length > 3 ?
                            <>
                                <ToDoElement onClick={()=> setActiveInfo({ele: filtered(date).c_todo[0], c_date: filtered(date).c_date})}>
                                    {filtered(date).c_todo[0].length > 8 ? filtered(date).c_todo[0].substring(0,8)+"..." : filtered(date).c_todo[0]}
                                </ToDoElement>
                                <ToDoElement className={"more"}>
                                    +
                                </ToDoElement >
                                {filtered(date).c_todo.slice(1).map((ele, idx) => 
                                    <ToDoElement className={"overflow"} key={idx} onClick={()=> {
                                        setActiveInfo({ele, c_date: filtered(date).c_date})
                                    }}>
                                        {ele.length > 8 ? ele.substring(0,8)+"..." : ele}
                                    </ToDoElement>
                                )}
                            </> :
                            filtered(date).c_todo.map((ele, idx) => 
                                <ToDoElement key={idx} onClick={()=> {
                                    setActiveInfo({ele, c_date: filtered(date).c_date})
                                }}>
                                    {ele.length > 8 ? ele.substring(0,8)+"..." : ele}
                                </ToDoElement>
                            )      
                            }
                            </ToDoContainer>
                            }
                    </DateComponent>)
                }
                </DateContainer>
                <button onClick={()=> handleModal()}>ADD</button>
                <AddModal openModal={openModal} setOpenModal={setOpenModal} />
                {activeInfo && 
                    <EditModal
                    activeInfo={activeInfo}
                    setActiveInfo={setActiveInfo}/>
                }
            </Container>
        }
        </>
    )
}
export default PlannerPresenter