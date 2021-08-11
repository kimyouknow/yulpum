import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Datepicker from "./DatePicker";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import { compareDate } from "../hoc/renderCalendar";


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

const Modal = ({dates, states,setToday, isAdd, openModal, setOpenModal}) => {
    const {calendar: {activeD, activeM, activeY}} = states;
    const activeDate = {activeY, activeM, activeD};
    const temp = !dates ? null: dates.find(ele => compareDate(ele.date) === compareDate(new Date(activeY, activeM, activeD)));
    return (
        <Container show={openModal}>
            <ModalWindow>
                <button onClick={() => setOpenModal(false)}>x</button>
                <span>{activeY}</span>/
                <span>{activeM+1}</span>/ 
                <span>{activeD}</span>
                <Datepicker setToday={setToday} />
                {isAdd ?
                    <AddModal setOpenModal={setOpenModal} activeDate={activeDate}/>: 
                    <EditModal temp={temp} setOpenModal={setOpenModal} activeDate={activeDate} />
                }
            </ModalWindow>
        </Container>
    )
}

function mapStateToProps(state, ownProps){
    return {states : state}
}

export default connect(mapStateToProps, null)(Modal);