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
    const [verifyPassword, setVerifyPassword] = useState("");    
    const onSubmitHandler = (values) => {
        dispatch(registerUser(values))
            .then(response => {
                const {payload: {success}} = response;
                if(success) {
                    alert('회원가입이 완료되었습니다..')
                    history.push("/login");
                } else {
                    alert('서버 오류로 에러가 났습니다.')
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