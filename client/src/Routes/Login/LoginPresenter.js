import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../../Styled/Button";
import Container from "../../Styled/AuthContainer";
import Form from "../../Styled/Form";

const Header = styled.div`
  font-weight: 600;
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const SLink = styled(Link)`
  width: 100%;
`;

const LoginPresenter = ({
  email,
  setEmail,
  password,
  setPassword,
  onSubmitHandler,
}) => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <Container>
      <Header>Login</Header>
      <Form onSubmit={handleSubmit(onSubmitHandler)} styles={"auth"}>
        <input type="email" placeholder="Email" {...register("email")} />
        <span>{errors.email && "이메일을 입력해주세요."}</span>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <span>{errors.password && "비빌번호를 입력해주세요."}</span>
        <input type="submit" value="Log in" />
        <SLink to="/register">
          <Button>Register</Button>
        </SLink>
      </Form>
    </Container>
  );
};
export default LoginPresenter;
