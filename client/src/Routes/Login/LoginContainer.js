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
    const onSubmitHandler = (e) => {
        e.preventDefault();
        let body = {
            email,
            password
        }
        // 여기서 바로 axios를 통해 data를 보내야하는데 dispatch를 사용해 actions에서 data다루기
        dispatch(loginUser(body))
            .then(response => {
                if(response.payload.success) {
                    history.push("/");
                } else {
                    alert("Failed to Login");
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