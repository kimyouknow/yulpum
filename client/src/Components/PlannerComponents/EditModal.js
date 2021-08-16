import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import { DeletePlan } from "../../_actions/calendar_actions";


const Container = styled.div`
    display: ${props => props.show ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    left: 0;
    top: 0;
    font-size: 50px;
`;

const ModalWindow = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 10px;
    background-color: #fff;
`;

const ToDoElement = styled.div`
    cursor: pointer;
    border: 1px solid;
`;

const EditModal = ({activeInfo ,setActiveInfo}) => {
    const dispatch = useDispatch();
    const tokenData = document.cookie.split("=")[1];
    const {calendar} = useSelector((state) => state);
    const {activeD, activeM, activeY} = calendar;
    const closeModal = () => setActiveInfo(false);
    const handleDel = async() => {
        const body = {
            year: activeY,
            month: activeM,
            date: activeD,
            todo: activeInfo,
            token: tokenData
        }
        console.log(body);
        const response = await dispatch(DeletePlan(body));
        const {payload} = response;
        console.log(payload);
        closeModal()
    }
    if (activeInfo){
        window.addEventListener("keydown", (e) => e.keyCode === 27 ? closeModal(): null);
    }
    return (
        <Container show={activeInfo}>
        <ModalWindow>
            <button onClick={() => closeModal()}>x</button>
            <span>{activeY}</span>
            <span>{activeM+1}</span>
            <span>{activeD}</span>
            <h3>activeInfo</h3>
            <ToDoElement onClick={() => handleDel()}>❌</ToDoElement>
        </ModalWindow>
        </Container>
    )
}

export default EditModal;