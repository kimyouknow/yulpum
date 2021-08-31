import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlanServer } from "../../_actions/calendar_actions";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal, { ModalBody, ModalHeader } from "../../Styled/Modal";
import { BackBtn } from "../../Styled/Button";
import Form from "../../Styled/Form";

const AddModal = ({ openModal, setOpenModal }) => {
  const schema = yup.object().shape({
    activeDate: yup.string().required(),
    planInput: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();
  const tokenData = document.cookie.split("=")[1];
  const closeModal = () => setOpenModal(false);
  const onSubmitHandler = async ({ activeDate, planInput }, e) => {
    const year = Number(activeDate.slice(0, 4));
    const month = Number(activeDate.slice(5, 7)) - 1;
    const date = Number(activeDate.slice(8, 10));
    const body = {
      year,
      month,
      date,
      todo: planInput,
      token: tokenData,
    };
    console.log(body);
    await dispatch(addPlanServer(body));
    e.target.reset();
    closeModal();
  };
  if (openModal) {
    window.addEventListener("keydown", (e) =>
      e.keyCode === 27 ? closeModal() : null
    );
  }
  return (
    <Modal show={openModal}>
      <ModalHeader>
        <BackBtn className={"bbtn"} onClick={() => closeModal()}>
          x
        </BackBtn>
        <span>계획 추가</span>
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <span className={"input__name"}>날짜</span>
          <input type="date" {...register("activeDate")} />
          <span>{errors.activeDate && "날짜를 입력하세요."}</span>
          <input
            type="text"
            placeholder="계획을 입력하세요"
            {...register("planInput")}
          />
          <span>{errors.planInput && "계획을 입력하세요."}</span>
          <input type="submit" value="추가" />
          <input type="reset" value="초기화" />
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default AddModal;
