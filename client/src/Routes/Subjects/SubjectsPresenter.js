import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import AddSubject from "../../Components/AddSubject";
import Subject from "../../Components/Subject";
import Loader from "../../Components/Loader";
import EditSubject from "../../Components/EditSubject";

const Container = styled.div`
    width: 95%;
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
    &:hover {
        cursor: pointer;
    }
`;

const Text = styled.div`
    font-size: 24px;
`;

const EditButton = styled.div`
    margin-left: 20px;
    &:hover {
        cursor: pointer;
    }
    
`;


const SubjectsPresenter = ({
    clicked, clickhandler,subjectInput, setSubjectInput, onSubmitHandler, editInput, setEditInput, subjects, handleRemove}) => {
    return (
        <>
        <AddSubject 
            clicked={clicked}
            clickhandler={clickhandler}
            subjectInput={subjectInput} 
            setSubjectInput={setSubjectInput} 
            onSubmitHandler={onSubmitHandler}/>
        <Container>
            <UList>
                {!subjects ? 
                <Loader /> :
                subjects.map(subject => 
                <Line key={subject._id}>
                    <Subject text={subject.subject_name} id={subject._id} 
                    time={subject.time}/>
                    <EditButton onClick={() => clickhandler("edit")}>
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </EditButton>
                    <EditSubject 
                        id={subject._id}
                        clicked={clicked}
                        clickhandler={clickhandler}
                        onSubmitHandler={onSubmitHandler}
                        editInput={editInput}
                        setEditInput={setEditInput}
                        handleRemove={handleRemove}
                    />
                </Line>)
            }
                <Line>
                        <Button onClick={() => clickhandler("add")}>
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                        <Text>과목 추가하기</Text>
                </Line>
            </UList>
        </Container>
        </>
    )
}
export default SubjectsPresenter