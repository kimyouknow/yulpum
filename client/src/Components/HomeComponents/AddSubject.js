import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Modal, { ModalBody, ModalHeader } from "../../Styled/Modal";
import {BackBtn, Button} from "../../Styled/Button";
import Input from "../../Styled/Input";
import Form from "../../Styled/Form";

const AddSubject = ({clicked, clickhandler, subjectInput ,setSubjectInput, onSubmitHandler}) => {
    return (
        <Modal show={clicked.addButton}>
            <ModalHeader>
                <BackBtn className={"bbtn"} onClick={() => clickhandler("add")}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </BackBtn>
                <span>목표/과목 추가</span>
            </ModalHeader>
            <ModalBody>
            <Form onSubmit={(e => onSubmitHandler(e, "add"))}>
                <span className={"input__name"}>측정할 과목 이름</span>
                <Input type="text" value={subjectInput} onChange={(e => setSubjectInput(e.target.value))} placeholder="e.g. 수학, 영어, 과학.." />
            </Form>
            <Button className={"input__submit"} onClick={(e) => {
                clickhandler("add")
                onSubmitHandler(e, "add")
            }}>추가</Button>
            </ModalBody>
        </Modal>
    );
}

export default AddSubject;