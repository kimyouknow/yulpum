import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import { DeletePlan } from "../../_actions/calendar_actions";
import { signInGroup } from "../../_actions/group_actions";


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
    z-index: 100;
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
    console.log(activeInfo)
    const dispatch = useDispatch();
    const tokenData = document.cookie.split("=")[1];
    const {g_id, g_name} = activeInfo;
    const closeModal = () => setActiveInfo(false);
    const handleSignIn = async() => {
        const body = {
            token: tokenData,
            group_id: g_id
        }
        console.log(body)
        await dispatch(signInGroup(body));
        closeModal()
    }
    if (activeInfo){
        window.addEventListener("keydown", (e) => e.keyCode === 27 ? closeModal(): null);
    }
    return (
        <Container show={activeInfo}>
        <ModalWindow>
            <button onClick={() => closeModal()}>x</button>
            <ToDoElement onClick={() => handleSignIn()}>가입</ToDoElement>
        </ModalWindow>
        </Container>
    )
}

export default EditModal;