import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addPlanServer } from "../../_actions/calendar_actions";
import Modal, { ModalHeader } from "../../Styled/Modal";
import Input from "../../Styled/Input";
import {BackBtn, Button} from "../../Styled/Button";
import Form from "../../Styled/Form";

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
    const diplayDate = (activeDate) => {
        let year = activeDate.getFullYear();
        let month = activeDate.getMonth()+1;
        let date = activeDate.getDate();
        return `${year}-${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date}`: date}`;
    }
    return (
        <Modal show={openModal}>
            <ModalHeader>
                <BackBtn className={"bbtn"} onClick={() =>closeModal()}>x</BackBtn>
                <span>계획 추가</span>
            </ModalHeader>
            <Form onSubmit={(e => onSubmitHandler(e))}>
                <span className={"input__name"}>날짜</span>
                <Input type="date" value={diplayDate(activeDate)} onChange={(e) => onChangeHandler(e.target.value)} />
                <span className={"input__name"}>추가할 계획 이름</span>
                <Input type="text" value={planInput} placeholder="To Do" onChange={(e => setPlanInput(e.target.value))} />
                <Button className={"input__submit"} type="submit">submit</Button>
            </Form>
        </Modal>
    )
}

export default AddModal;