import React from "react";
import styled from 'styled-components';

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

const Button = styled.button``;

const RegisterPresenter = ({
    email, setEmail, password, setPassword, onSubmitHandler,
    name, setName, verifyPassword, setVerifyPassword}) => (
    <Container>
        <h2>Register</h2>
        <Form onSubmit={(e => onSubmitHandler(e))}>

        <label>Email</label>
        <input type="email" value={email} onChange={(e => setEmail(e.target.value))} />

        <label>Name</label>
        <input type="text" value={name} onChange={(e => setName(e.target.value))} />

        <label>Password</label>
        <input type="password"value={password} onChange={(e=> setPassword(e.target.value))} />

        <label>Verify Password</label>
        <input type="password"value={verifyPassword} onChange={(e=> setVerifyPassword(e.target.value))} />
        
        <Button>Register</Button>
        </Form>
    </Container>
)
export default RegisterPresenter