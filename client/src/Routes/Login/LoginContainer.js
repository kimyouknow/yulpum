import React, {useState} from "react";
import LoginPresenter from "./LoginPresenter";
import {useDispatch} from "react-redux";
import { loginUser } from "../../_actions/user_action";
import {useHistory} from "react-router";

const LoginContainer = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onSubmitHandler = (values) => {
        dispatch(loginUser(values))
            .then(response => {
                if(response.payload.success) {
                    history.push("/");
                } else {
                    alert("이메일 또는 비밀번호를 확인하세요.");
                }
            })
    }

    return(
        <>
            <LoginPresenter 
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                onSubmitHandler={onSubmitHandler}
            />
        </>
        )
}
export default LoginContainer