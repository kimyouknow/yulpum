import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import { BackBtn, Button } from "../../Styled/Button";
import Modal, { ModalBody, ModalHeader } from "../../Styled/Modal";
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
    const dispatch = useDispatch();
    const tokenData = document.cookie.split("=")[1];
    const {c_date, ele} = activeInfo;
    const year = new Date(c_date).getFullYear();
    const month = new Date(c_date).getMonth();
    const date = new Date(c_date).getDate();
    const closeModal = () => setActiveInfo(false);
    const handleDel = async() => {
        const body = {
            year,
            month,
            date,
            todo: ele,
            token: tokenData
        }
        console.log(body)
        await dispatch(DeletePlan(body));
        closeModal()
    }
    if (activeInfo){
        window.addEventListener("keydown", (e) => e.keyCode === 27 ? closeModal(): null);
    }
    return (
        <Modal show={activeInfo}>
            <ModalHeader>
                <BackBtn onClick={() => closeModal()}>x</BackBtn>
                <span>플래너 수정</span>
            </ModalHeader>
            <ModalBody>
                <ModalBody>
                <span className={"input__name"}>날짜</span>
                <div style={{marginBottom: "2rem"}}>
                    <span>{year} 년 </span> 
                    <span>{month+1} 월 </span> 
                    <span>{date} 일 </span>
                </div>
                <span className={"input__name"}>할 일</span>
                <span>{ele}</span>
                </ModalBody>
                <Button onClick={() => handleDel()}>삭제</Button>
            </ModalBody>
        </Modal>
    )
}

export default EditModal;