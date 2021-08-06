import React from "react";
import styled from 'styled-components';
import Calendar from "../../Components/Calendar";
import LoaderCotainer from "../../Components/Loader";

const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    margin-top:48px;
`;


const PlannerPresenter = ({dates, dato, setDato, planInput ,setPlanInput, onSubmitHandler, onClick, plans}) => {
    return (
        <Container>
            {!dates ? <LoaderCotainer /> :
                <Calendar dates={dates} dato={dato} setDato={setDato} onClick={onClick} plans={plans} />
            }
            <form onSubmit={(e => onSubmitHandler(e))}>
                <label>Add to do</label>
                <input type="text" value={planInput} onChange={(e => setPlanInput(e.target.value))} />
            </form>
            {!plans ? <span>계획된 일정이 없습니다</span> : 
            plans.map(plan => <span>plan</span>)
            }
        </Container>
    )
}
export default PlannerPresenter