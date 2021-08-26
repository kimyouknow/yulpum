import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { createGroup } from "../../_actions/group_actions";
import Modal, { ModalBody, ModalHeader } from "../../Styled/Modal";
import Input from "../../Styled/Input";
import {BackBtn, Button} from "../../Styled/Button";
import Form from "../../Styled/Form";

const AddModal = ({openModal ,setOpenModal}) => {
    const dispatch = useDispatch();
    const tokenData = document.cookie.split("=")[1];
    const closeModal = () => setOpenModal(false);
    const [groupName, setGroupName] = useState("");
    const [groupGoal, setGroupGoal] = useState("");
    const [groupMax, setGroupMax] = useState("");
    const [groupDesc, setGroupDesc] = useState("");
    const onSubmitHandler = async(e) => {
        e.preventDefault();
        let body = {
            token: tokenData,
            groupName,
            groupMax,
            groupGoal,
            groupDesc,
        }
        const {payload: {isSuccess, isDuplicate}} = await dispatch(createGroup(body));
        if(isSuccess){
            closeModal();
        } else if(isDuplicate){
            alert("이미 사용된 이름입니다")
        }
        else{
            alert("Error");
        }
    }
    if (openModal){
        window.addEventListener("keydown", (e) => e.keyCode === 27 ? closeModal(): null);
    }
    return (
        <Modal show={openModal}>
            <ModalHeader>
                <BackBtn onClick={() =>closeModal()}>x</BackBtn>
                <span>그룹 추가</span>
            </ModalHeader>
            <ModalBody>
            <Form onSubmit={(e => onSubmitHandler(e))}>
                <span className={"input__name"}>그룹이름</span>
                <Input type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)} placeholder="e.g. 대학생모임, 수능준비.." />
                <span className={"input__name"}>목표시간</span>
                <Input type="number" value={groupGoal} onChange={(e) => setGroupGoal(e.target.value)} placeholder="e.g. 6시간" />
                <span className={"input__name"}>최대 인원수</span>
                <Input type="number" value={groupMax} onChange={(e) => setGroupMax(e.target.value)} placeholder="e.g. 5명"  />
                <span className={"input__name"}>그룹 설명</span>
                <Input type="text" value={groupDesc} onChange={(e) => setGroupDesc(e.target.value)}/>
            </Form>
            <Button onClick={(e => onSubmitHandler(e))}>추가</Button>
            </ModalBody>
        </Modal>
    )
}

export default AddModal;