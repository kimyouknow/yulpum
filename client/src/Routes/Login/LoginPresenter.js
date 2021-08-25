import React from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {Button} from "../../Styled/Button";
import Container from "../../Styled/AuthContainer";
import Input from "../../Styled/Input";

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

const LoginPresenter = ({email, setEmail, password, setPassword, onSubmitHandler}) => (
    <Container>
        <Header>Login</Header>
        <Form onSubmit={(e => onSubmitHandler(e))}>
            <Input type="email" value={email} placeholder="Email" onChange={(e => setEmail(e.target.value))} />
            <Input type="password"value={password} placeholder="Password" onChange={(e=> setPassword(e.target.value))} />
            <Button>Log In</Button> 
            <SLink to="/register">
                <Button>Register</Button>
            </SLink>
        </Form>
    </Container>
)
export default LoginPresenter