import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    display: ${props => props.active ? "flex": "none"};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.6);
    z-index: 50;
`;

const Section = styled.div`
    width: 80%;
    height: 40%;
    margin: 0 auto;
    border-radius: 4px;
    background-color: white;
    animation: modal-show .3s;
    overflow: hidden;
    padding: 12px;
`;

const BackButton = styled.div`
    font-size: 24px;
    &:hover {
        cursor: pointer;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

// const Input = styled.input``;

const Button = styled.button``;

const AddSubject = ({clicked, clickhandler, subjectInput ,setSubjectInput, onSubmitHandler}) => {

    return (
        <>
        <Container active={clicked.addButton}>
            <Section>
                <BackButton active={clicked.addButton} onClick={() => clickhandler("add")}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </BackButton>
                <Form onSubmit={(e => onSubmitHandler(e, "add"))}>
                    <label>subject</label>
                    <input type="text" value={subjectInput} onChange={(e => setSubjectInput(e.target.value))} />
                    <Button onClick={() => clickhandler("add")}>ADD</Button>
                </Form>
            </Section>
        </Container>
        </>
    );
}

export default AddSubject;