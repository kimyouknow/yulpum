import React from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Container = styled.div`
    padding: 0 10px;
    background-color: white;
    padding-top: 6vh;
    height: 50vh;
    width: 40%;
    min-width: 280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
`;

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
const Input = styled.input`
    border-bottom: 2px solid rgba(0,0,0,0.3); 
    margin-bottom: 10px;
    width: 100%;
    ::placeholder{
        color: rgba(0,0,0,0.3);
    }
`;
const SLink = styled(Link)`
    width: 100%;
`;

const Button = styled.button`
    width: 100%;
    margin-bottom: 10px;
    cursor: pointer;
    padding: 0.5rem;
    border: 1px solid black;
    border-radius: 10px;
    :hover {
        background-color: rgba(0,0,0,0.3);
    }
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