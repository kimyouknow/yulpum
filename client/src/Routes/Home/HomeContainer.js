import React, {useEffect, useState} from "react";
import axios from 'axios';
import HomePresenter from "./HomePresenter";
import {useHistory} from "react-router";

const HomeContainer = ({userID}) => {
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
    return(
        <HomePresenter 
        clickLogout={clickLogout}
        userID={userID}
        />
        )
}
export default HomeContainer