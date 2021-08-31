import React from "react";
import { useDispatch } from "react-redux";
import { DeletePlan } from "../../_actions/calendar_actions";
import { BackBtn, Button } from "../../Styled/Button";
import Modal, { ModalBody, ModalHeader } from "../../Styled/Modal";

const EditModal = ({ activeInfo, setActiveInfo }) => {
  const dispatch = useDispatch();
  const tokenData = document.cookie.split("=")[1];
  const { c_date, ele } = activeInfo;
  const year = new Date(c_date).getFullYear();
  const month = new Date(c_date).getMonth();
  const date = new Date(c_date).getDate();
  const closeModal = () => setActiveInfo(false);
  const handleDel = async () => {
    const body = {
      year,
      month,
      date,
      todo: ele,
      token: tokenData,
    };
    await dispatch(DeletePlan(body));
    closeModal();
  };
  if (activeInfo) {
    window.addEventListener("keydown", (e) =>
      e.keyCode === 27 ? closeModal() : null
    );
  }
  return (
    <Modal show={activeInfo}>
      <ModalHeader>
        <BackBtn onClick={() => closeModal()}>x</BackBtn>
        <span>플래너 수정</span>
      </ModalHeader>
      <ModalBody>
        <ModalBody>
          <span className={"input__name"}>날짜</span>
          <div style={{ marginBottom: "1rem" }}>
            <span>{year}년 </span>
            <span>{month + 1}월 </span>
            <span>{date}일 </span>
          </div>
          <span className={"input__name"}>할 일</span>
          <span>{ele}</span>
        </ModalBody>
        <Button onClick={() => handleDel()}>삭제</Button>
      </ModalBody>
    </Modal>
  );
};

export default EditModal;
