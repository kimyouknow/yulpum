import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddSubject from "../../Components/AddSubject";
import Subject from "../../Components/Subject";
import Loader from "../../Components/Loader";

const Container = styled.div`
    width: 100%;
`;

const UList = styled.ul`
    display: flex;
    flex-direction: column;
`;

const Line = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 4px;
    border-radius: 4px;
    &:hover {
        cursor: pointer;
        background-color: #dcdde1;
    }
`;

const Button = styled.div`
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid black;
    margin-right: 12px;
`;

const Text = styled.div`
    font-size: 24px;
`;


const SubjectsPresenter = ({clicked, clickHandler, subjectInput, setSubjectInput, onSubmitHandler, subjects}) => {
    // console.log(subjects);
    return (
        <>
        <AddSubject clicked={clicked} clickHandler={clickHandler} subjectInput={subjectInput} setSubjectInput={setSubjectInput} onSubmitHandler={onSubmitHandler}/>
        <Container>
            <UList>
                {!subjects ? 
                <Loader /> :
                subjects.map(subject => <Line key={subject._id}><Subject text={subject.subject_name} id={subject._id} time={subject.time}/></Line>)
            }
                <Line onClick={() => clickHandler()}>
                    <Button><FontAwesomeIcon icon={faPlus} /></Button>
                    <Text>과목 추가하기1</Text>
                </Line>
            </UList>
        </Container>
        </>
    )
}
export default SubjectsPresenter