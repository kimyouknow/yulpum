import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { AddPlan } from "../_actions/calendar_actions";
// import styled from "styled-components";

const AddModal = ({setOpenModal, activeDate}) => {
    const dispatch = useDispatch();
    const tokenData = document.cookie.split("=")[1];
    const [planInput, setPlanInput] = useState("");
    const onSubmitHandler = async(e) => {
        e.preventDefault();
        setPlanInput("");
        const body = {
            year: activeDate.activeY,
            month: activeDate.activeM,
            date: activeDate.activeD,
            todo: planInput,
            token: tokenData
        }
        console.log(body);
        const response = await dispatch(AddPlan(body));
        const {payload} = response;
        console.log(payload);
        setOpenModal(false);
    }
    return (
        <>
        <form onSubmit={(e => onSubmitHandler(e))}>
            <label>Add to do</label>
            <input type="text" value={planInput} onChange={(e => setPlanInput(e.target.value))} />
            <button type="submit">submit</button>
        </form>
        </>
    )
}

export default AddModal;