import React, { useState } from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import { DeletePlan } from "../_actions/calendar_actions";

const PlanUl = styled.ul``;
const PlanLi = styled.li`
    display:flex;
`;

const ToDoElement = styled.div`
    margin-top: 10px;
    cursor: pointer;
    :hover{
    -webkit-transform:scale(1.2);
    }
`;

const EditModal = ({temp, setOpenModal ,activeDate}) => {
    const dispatch = useDispatch();
    const tokenData = document.cookie.split("=")[1];
    const handleDel = async(todo) => {
        const body = {
            year: activeDate.activeY,
            month: activeDate.activeM,
            date: activeDate.activeD,
            todo,
            token: tokenData
        }
        console.log(body);
        const response = await dispatch(DeletePlan(body));
        const {payload} = response;
        console.log(payload);
        setOpenModal(false);
    }
    return (
        <>
        <PlanUl>
            {!temp ? <span>계획된 일정이 없습니다</span> : 
                temp.todo.map((ele, idx) => 
                <PlanLi key={idx}>
                    <span>{ele}</span>
                    <ToDoElement>✅</ToDoElement>
                    <ToDoElement onClick={() => handleDel(ele)}>❌</ToDoElement>
                </PlanLi>)
            }
        </PlanUl>
        </>
    )
}

export default EditModal;