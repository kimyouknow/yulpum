import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BackBtn, Button } from "../../Styled/Button";
import Form from "../../Styled/Form";
import Modal, { ModalBody, ModalHeader } from "../../Styled/Modal";

const EditSubject = ({
  id,
  text,
  clicked,
  clickhandler,
  setActiveSubject,
  handleEdit,
  handleRemove,
}) => {
  const schema = yup.object().shape({
    subject_name: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { subject_name: text },
  });
  const closeModal = () => {
    clickhandler("edit");
    setActiveSubject(null);
  };
  if (clicked.editButton) {
    window.addEventListener("keydown", (e) =>
      e.keyCode === 27 ? closeModal() : null
    );
  }
  return (
    <Modal show={clicked.editButton}>
      <ModalHeader>
        <BackBtn onClick={() => closeModal()}>X</BackBtn>
        <span>플래너 수정</span>
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit(handleEdit)}>
          <span className={"input__name"}>목표/과목 이름</span>
          <input
            type="text"
            placeholder="목표/과목 이름"
            {...register("subject_name")}
          />
          <span>{errors.subject_name && "목표/과목을 입력하세요."}</span>
          <input type="submit" value="수정" />
        </Form>
        <Button
          onClick={(e) => {
            handleRemove(id);
            closeModal();
          }}
        >
          삭제
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default EditSubject;
