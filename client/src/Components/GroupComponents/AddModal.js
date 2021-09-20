import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGroup } from "../../_actions/group_actions";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal, { ModalBody, ModalHeader } from "../../Styled/Modal";
import { BackBtn } from "../../Styled/Button";
import Form from "../../Styled/Form";

const AddModal = ({ openModal, setOpenModal, groups, setGroups }) => {
  const schema = yup.object().shape({
    groupName: yup.string().required(),
    groupGoal: yup.number().required(),
    groupMax: yup.number().required(),
    groupDesc: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();
  const tokenData = document.cookie.split("=")[1];
  const closeModal = () => setOpenModal(false);
  const onSubmitHandler = async (
    { groupName, groupGoal, groupMax, groupDesc },
    e
  ) => {
    let body = {
      token: tokenData,
      groupName,
      groupMax,
      groupGoal,
      groupDesc,
    };
    const {
      payload: { isSuccess, isDuplicate, n_group },
    } = await dispatch(createGroup(body));
    if (isSuccess) {
      setGroups((ele) => [...ele, n_group]);
      e.target.reset();
      closeModal();
    } else if (isDuplicate) {
      alert("이미 사용된 이름입니다");
    } else {
      alert("❗ 서버에러, 다시 시도해주세요.");
    }
  };
  if (openModal) {
    window.addEventListener("keydown", (e) =>
      e.keyCode === 27 ? closeModal() : null
    );
  }
  return (
    <Modal show={openModal}>
      <ModalHeader>
        <BackBtn onClick={() => closeModal()}>x</BackBtn>
        <span>그룹 추가</span>
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <span className={"input__name"}>그룹이름</span>
          <input
            type="text"
            placeholder="e.g. 대학생모임, 수능준비.."
            {...register("groupName")}
          />
          <span>{errors.groupName && "그룹 이름을 입력하세요."}</span>
          <span className={"input__name"}>목표시간</span>
          <input type="number" placeholder="6시간" {...register("groupGoal")} />
          <span>{errors.groupGoal && "최대 인원수를 입력하세요. "}</span>
          <span className={"input__name"}>최대 인원수</span>
          <input type="number" placeholder="6명" {...register("groupMax")} />
          <span>{errors.groupMax && "그룹 설명을 입력하세요."}</span>
          <span className={"input__name"}>그룹 설명</span>
          <input
            type="text"
            placeholder=" ✏ 수능 공부를 준비하는 사람들의 모임입니다."
            {...register("groupDesc")}
          />
          <span>{errors.groupDesc && "그룹 설명을 입력하세요."}</span>
          <input type="submit" value="추가" />
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default AddModal;
