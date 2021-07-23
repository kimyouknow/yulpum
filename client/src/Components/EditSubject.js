import React, {useState} from "react";
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
    background-color: transparent;
    opacity: 0.5;
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
    -webkit-box-shadow: 5px 5px 15px -3px rgba(0,0,0,0.65); 
    box-shadow: 5px 5px 15px -3px rgba(0,0,0,0.65);
    border: 1px solid;
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

const Input = styled.input``;

const Button = styled.button``;

const EditSubject = ({id, clicked, clickhandler, onSubmitHandler, editInput ,setEditInput, handleRemove}) => {

    return (
        <>
        <Container active={clicked.editButton}>
            <Section>
                <BackButton active={clicked.editButton} onClick={() => clickhandler("edit")}>
                    X
                </BackButton>
                <Form onSubmit={(e => onSubmitHandler(e, id))}>
                <input type="text" value={editInput} onChange={(e => setEditInput(e.target.value))} />
                    <Button onClick={() => clickhandler("edit")}>EDIT</Button>
                </Form>
                <Button onClick={() => {
                    handleRemove(id);
                    clickhandler("edit");
                }}>DELETE</Button>
            </Section>
        </Container>
        </>
    );
}

export default EditSubject;