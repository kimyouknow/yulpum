import React from "react";
import styled from 'styled-components';
import Calendar from "../../Components/Calendar";
import LoaderCotainer from "../../Components/Loader";
import Modal from "../../Components/Modal";

const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    margin-top:48px;
`;


const PlannerPresenter = ({dates, activeDate, handleModal, isAdd, openModal, setOpenModal}) => {
    return (
        <>
        {dates.length === 0 ? <LoaderCotainer /> :
            <Container>
                <Calendar dates={dates} activeDate={activeDate} />
                <button onClick={()=> handleModal("add")}>ADD</button>
                <button onClick={()=> handleModal("edit")}>EDIT</button>
                <Modal dates={dates} isAdd={isAdd} openModal={openModal} setOpenModal={setOpenModal} />
            </Container>
        }
        </>
    )
}
export default PlannerPresenter