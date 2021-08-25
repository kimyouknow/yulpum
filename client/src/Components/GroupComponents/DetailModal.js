import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { BackBtn, Button } from "../../Styled/Button";
import Modal, { ModalBody, ModalHeader } from "../../Styled/Modal";
import { signInGroup } from "../../_actions/group_actions";

const DetailModal = ({activeInfo ,setActiveInfo}) => {
    console.log(activeInfo)
    const dispatch = useDispatch();
    const tokenData = document.cookie.split("=")[1];
    const {g_id, g_name, g_description} = activeInfo;
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
        <Modal show={activeInfo}>
            <ModalHeader>
                <BackBtn onClick={() => closeModal()}>x</BackBtn>
                <span>그룹 둘러보기</span>
            </ModalHeader>
            <ModalBody>
                <span className={"input__name"}>그룹 이름</span>
                <span>{g_name}</span>
                <span className={"input__name"}>그룹 소개</span>
                <span>{g_description}</span>
                <Button onClick={() => handleSignIn()}>가입</Button>
            </ModalBody>
        </Modal>
    )
}

export default DetailModal;