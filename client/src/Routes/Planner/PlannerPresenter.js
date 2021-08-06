import React from "react";
import styled from 'styled-components';
import Calendar from "../../Components/Calendar";
import LoaderCotainer from "../../Components/Loader";

const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    margin-top:48px;
`;


const PlannerPresenter = ({dates, dato, setDato, todoInput ,setTodoInput, onSubmitHandler}) => {
    return (
        <Container>
            {!dates ? <LoaderCotainer /> :
                <Calendar dates={dates} dato={dato} setDato={setDato} />
            }
            <form onSubmit={(e => onSubmitHandler(e))}>
                <label>Add to do</label>
                <input type="text" value={todoInput} onChange={(e => setTodoInput(e.target.value))} />
            </form>
        </Container>
    )
}
export default PlannerPresenter