import React, {useEffect, useState} from "react";
import axios from 'axios';
import HomePresenter from "./HomePresenter";
import {useHistory} from "react-router";

const HomeContainer = () => {
    const [token, setToken] = useState(null);
    const history = useHistory();
    const clickLogout = () => {
        axios.get('/api/logout')
        .then(response => {
            if(response.data.logoutSuccess) {
                history.push("/login")
            } else {
                alert('Failed to logout');
            }
        })
    }
    const clickSignout = () => {
        const ok = window.confirm("Are you sure?");
        let body ={
            token
        }
        if(ok){
            axios.post('/api/out', body)
            .then(response => {
                if(response.data.isSuccess) {
                    history.push("/login")
                    alert('success');
                } else {
                    alert('Failed to signout');
                }
            })
        }
    }
    const getToken = () => {
        const tokenData = document.cookie.split("=")[1];
        setToken(tokenData);
    }
    useEffect(() => {
        getToken()
    }, [])
    return(
        <HomePresenter 
        clickLogout={clickLogout}
        clickSignout={clickSignout}
        token={token}
        />
        )
}
export default HomeContainer