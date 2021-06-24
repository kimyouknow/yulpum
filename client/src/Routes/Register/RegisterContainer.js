import React, {useState} from "react";
import RegisterPresenter from "./RegisterPresenter";
import {useDispatch} from "react-redux";
import { registerUser } from "../../_actions/user_action";

const RegisterContainer = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [verifyPassword, setVerifyPassword] = useState("")

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (password !== verifyPassword){
            return alert("비밀번호와 비밀번호 확인이 같아야 함")
        }

        let body = {
            email,
            name,
            password,
            verifyPassword
        }
        // 여기서 바로 axios를 통해 data를 보내야하는데 dispatch를 사용해 actions에서 data다루기
        dispatch(registerUser(body))
            .then(response => console.log(response))
    }
    return(
        <RegisterPresenter
            email={email}
            setEmail={setEmail}
            name={name}
            setName={setName}
            password={password}
            setPassword={setPassword}
            verifyPassword={verifyPassword}
            setVerifyPassword={setVerifyPassword}
            onSubmitHandler={onSubmitHandler}
        />
        )
}
export default RegisterContainer