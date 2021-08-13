import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import Datepicker from "./DatePicker";
import { AddPlan } from "../_actions/calendar_actions";

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
    font-size: 25px;
`;

const ModalWindow = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 10px;
    background-color: #fff;
`;

const AddModal = ({openModal ,setOpenModal}) => {
    const dispatch = useDispatch();
    const {calendar} = useSelector((state) => state);
    const {activeD, activeM, activeY} = calendar;
    const tokenData = document.cookie.split("=")[1];
    const [planInput, setPlanInput] = useState("");
    const closeModal = () => setOpenModal(false);
    const onSubmitHandler = async(e) => {
        e.preventDefault();
        setPlanInput("");
        const body = {
            year: activeY,
            month: activeM,
            date: activeD,
            todo: planInput,
            token: tokenData
        }
        console.log(body);
        const response = await dispatch(AddPlan(body));
        const {payload} = response;
        console.log(payload);
        closeModal()
    }
    if (openModal){
        window.addEventListener("keydown", (e) => e.keyCode === 27 ? closeModal(): null);
    }
    return (
        <Container show={openModal}>
            <ModalWindow>
                <button onClick={() =>closeModal()}>x</button>
                <Datepicker />
                <form onSubmit={(e => onSubmitHandler(e))}>
                    <label>Add to do</label>
                    <input type="text" value={planInput} onChange={(e => setPlanInput(e.target.value))} />
                    <button type="submit">submit</button>
                </form>
            </ModalWindow>
        </Container>
    )
}

export default AddModal;