import React from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom";
import Container from "../../Styled/AuthContainer";
import Input from "../../Styled/Input";
import { Button } from "../../Styled/Button";

const Header = styled.div`
    font-weight: 600;
    font-size: 1.5em;
    margin-bottom: 20px;
`;
const Form = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

const SLink = styled(Link)`
    width: 100%;
`;

const RegisterPresenter = ({
    email, setEmail, password, setPassword, onSubmitHandler,
    name, setName, verifyPassword, setVerifyPassword}) => (
    <Container>
        <Header>Register</Header>
        <Form onSubmit={(e => onSubmitHandler(e))}>
        <Input type="email" value={email} placeholder="Email" onChange={(e => setEmail(e.target.value))} />
        <Input type="text" value={name} placeholder="Nickname" onChange={(e => setName(e.target.value))} />
        <Input type="password"value={password} placeholder="Password" onChange={(e=> setPassword(e.target.value))} />
        <Input type="password"value={verifyPassword} placeholder="Verify Password" onChange={(e=> setVerifyPassword(e.target.value))} />
        <Button>Register</Button>
        <SLink to="/login">
            <Button>LogIn</Button>
        </SLink>
        </Form>
    </Container>
)
export default RegisterPresenter