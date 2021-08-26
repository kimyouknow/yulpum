import React from "react";
import { BackBtn, Button } from "../../Styled/Button";
import Form from "../../Styled/Form";
import Input from "../../Styled/Input";
import Modal, { ModalBody, ModalHeader } from "../../Styled/Modal";

const EditSubject = ({id, clicked, clickhandler, onSubmitHandler, editInput ,setEditInput, handleRemove}) => {
    const closeModal = () =>clickhandler("edit");
    if (clicked.editButton){
        window.addEventListener("keydown", (e) => e.keyCode === 27 ? closeModal(): null);
    }
    return (
        <Modal show={clicked.editButton}>
            <ModalHeader>
                <BackBtn onClick={() => closeModal()}>X</BackBtn>
                <span>플래너 수정</span>
            </ModalHeader>
            <ModalBody>
                <Form onSubmit={(e => onSubmitHandler(e, id))}>
                    <span className={"input__name"}>목표/과목 이름</span>
                    <Input type="text" value={editInput} onChange={(e => setEditInput(e.target.value))} />
                </Form>
                <Button onClick={() => closeModal()}>EDIT</Button>
                <Button onClick={(e) => {
                    handleRemove(id);
                    closeModal();
                    onSubmitHandler(e, id);
                }}>DELETE</Button>
            </ModalBody>
        </Modal>
    );
}

export default EditSubject;