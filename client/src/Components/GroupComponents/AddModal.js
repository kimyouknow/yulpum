import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { createGroup } from "../../_actions/group_actions";

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
    const closeModal = () => setOpenModal(false);
    const [groupName, setGroupName] = useState("");
    const [groupGoal, setGroupGoal] = useState("")
    const [groupMax, setGroupMax] = useState("")
    const onSubmitHandler = async(e) => {
        e.preventDefault();
        let body = {
            token: tokenData,
            groupName,
            groupMax,
            groupGoal,
        }
        const server = await dispatch(createGroup(body));
        console.log(server);
        // await dispatch(addPlanServer(body));
        closeModal()
    }
    if (openModal){
        window.addEventListener("keydown", (e) => e.keyCode === 27 ? closeModal(): null);
    }
    return (
        <Container show={openModal}>
            <ModalWindow>
                <button onClick={() =>closeModal()}>x</button>
                <h3>그룹 만들기</h3>
                <form onSubmit={(e => onSubmitHandler(e))}
                style={{display: "flex", flexDirection:"column"}}>
                    <label>그룹명</label>
                    <input type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)} />
                    <label>그룹목표</label>
                    <input type="number" value={groupGoal} onChange={(e) => setGroupGoal(e.target.value)} />
                    <label>최대인원</label>
                    <input type="number" value={groupMax} onChange={(e) => setGroupMax(e.target.value)} />
                    <input type="submit" value="추가" />
                </form>
            </ModalWindow>
        </Container>
    )
}

export default AddModal;