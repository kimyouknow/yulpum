import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Modal, { ModalBody, ModalHeader } from "../../Styled/Modal";
import { BackBtn } from "../../Styled/Button";
import Form from "../../Styled/Form";

const AddSubject = ({ clicked, clickhandler, handleAdd }) => {
  const schema = yup.object().shape({
    subject_title: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const closeModal = () => clickhandler("add");
  if (clicked.editButton) {
    window.addEventListener("keydown", (e) =>
      e.keyCode === 27 ? closeModal() : null
    );
  }
  return (
    <Modal show={clicked.addButton}>
      <ModalHeader>
        <BackBtn className={"bbtn"} onClick={() => closeModal()}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </BackBtn>
        <span>목표/과목 추가</span>
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit(handleAdd)}>
          <span className={"input__name"}>측정할 과목 이름</span>
          <input
            type="text"
            placeholder="e.g. 수학, 영어, 과학.."
            {...register("subject_title")}
          />
          <span>{errors.subject_title && "목표/과목을 입력하세요."}</span>
          <input type="submit" value="추가" />
          <input type="reset" value="초기화" />
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default AddSubject;
