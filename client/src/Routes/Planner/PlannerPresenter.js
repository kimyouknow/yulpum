import React from "react";
import styled from 'styled-components';
import Calendar from "../../Components/Calendar";
import LoaderCotainer from "../../Components/Loader";
import AddModal from "../../Components/PlannerComponents/AddModal";


const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    margin-top:48px;
`;


const PlannerPresenter = ({dates, activeDate, handleModal, openModal, setOpenModal}) => {
    return (
        <>
        {dates.length === 0 ? <LoaderCotainer /> :
            <Container>
                <Calendar dates={dates} activeDate={activeDate} />
                <button onClick={()=> handleModal()}>ADD</button>
                <AddModal openModal={openModal} setOpenModal={setOpenModal} />
            </Container>
        }
        </>
    )
}
export default PlannerPresenter