import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { AddPlan, addPlanServer } from "../../_actions/calendar_actions";


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
    z-index: 100;
`;

const ModalWindow = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 10px;
    background-color: #fff;
`;

const AddModal = ({openModal ,setOpenModal}) => {
    const dispatch = useDispatch();
    const tokenData = document.cookie.split("=")[1];
    const [planInput, setPlanInput] = useState("");
    const closeModal = () => setOpenModal(false);
    const [activeDate, setActiveDate] = useState(new Date());
    const onChangeHandler = (value) => {
        const Y = Number(value.slice(0,4))
        const M = Number(value.slice(5,7))-1
        const D = Number(value.slice(8,10))
        setActiveDate(new Date(Y,M,D));
    }
    const onSubmitHandler = async(e) => {
        e.preventDefault();
        setPlanInput("");
        const body = {
            year: activeDate.getFullYear(),
            month: activeDate.getMonth(),
            date: activeDate.getDate(),
            todo: planInput,
            token: tokenData
        }
        await dispatch(addPlanServer(body));
        closeModal()
    }
    if (openModal){
        window.addEventListener("keydown", (e) => e.keyCode === 27 ? closeModal(): null);
    }

    return (
        <Container show={openModal}>
            <ModalWindow>
                <button onClick={() =>closeModal()}>x</button>
                <input type="date" value={activeDate.toISOString().substring(0, 10)} onChange={(e) => onChangeHandler(e.target.value)} />
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