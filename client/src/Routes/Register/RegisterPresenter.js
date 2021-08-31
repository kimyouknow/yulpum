import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Container from "../../Styled/AuthContainer";
import { Button } from "../../Styled/Button";
import Form from "../../Styled/Form";

const Header = styled.div`
  font-weight: 600;
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const SLink = styled(Link)`
  width: 100%;
`;

const RegisterPresenter = ({ onSubmitHandler }) => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    password: yup.string().min(7).max(10).required(),
    verifyPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <Container>
      <Header>Register</Header>
      <Form onSubmit={handleSubmit(onSubmitHandler)} styles={"auth"}>
        <input type="email" placeholder="Email" {...register("email")} />
        <span>{errors.email && "이메일 형식이 맞지 않습니다."}</span>
        <input type="text" placeholder="text" {...register("name")} />
        <span>{errors.email && "이름 형식이 맞지 않습니다."}</span>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <span>{errors.password && "7-10자 사이로 입력하세요."}</span>
        <input
          type="password"
          placeholder="Verify Password"
          {...register("verifyPassword")}
        />
        <span>{errors.verifyPassword && "비밀번호가 맞지 않습니다."}</span>
        <input type="submit" />
        <SLink to="/login">
          <Button>LogIn</Button>
        </SLink>
      </Form>
    </Container>
  );
};
export default RegisterPresenter;
