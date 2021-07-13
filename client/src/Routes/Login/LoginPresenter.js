import React from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    flex-direction: column;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const SLink = styled(Link)`
    width: 100%;
`;

const Button = styled.button`
    width: 100%;
`;

const LoginPresenter = ({email, setEmail, password, setPassword, onSubmitHandler}) => (
    <Container>
        <h2>Login</h2>
        <Form onSubmit={(e => onSubmitHandler(e))}>
            <label>Email</label>
            <input type="email" value={email} onChange={(e => setEmail(e.target.value))} />
            <label>Password</label>
            <input type="password"value={password} onChange={(e=> setPassword(e.target.value))} />
            <Button>Log In</Button>
            <SLink to="/register">
                <Button>Register</Button>
            </SLink>
        </Form>
    </Container>
)
export default LoginPresenter