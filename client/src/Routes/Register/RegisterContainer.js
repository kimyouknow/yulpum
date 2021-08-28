import React, {useState} from "react";
import RegisterPresenter from "./RegisterPresenter";
import {useDispatch} from "react-redux";
import { registerUser } from "../../_actions/user_action";
import {useHistory} from "react-router";

const RegisterContainer = () => {
    const history = useHistory();
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
        dispatch(registerUser(body))
            .then(response => {
                const {payload: {success}} = response;
                console.log(response);
                if(success) {
                    history.push("/login");
                } else {
                    alert("Failed to sign up");
                }
            })
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