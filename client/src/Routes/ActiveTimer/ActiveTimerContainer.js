import React, {useState, useEffect} from "react";
import ActiveTimerPresenter from "./ActiveTimerPresenter";

const ActiveTimerContainer = () => {
    const token = document.cookie.split("=")[1];
    console.log(token);
    return(
        <ActiveTimerPresenter />
        )
}
export default ActiveTimerContainer