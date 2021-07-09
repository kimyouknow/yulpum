import React, {useState, useEffect} from "react";
import ActiveTimerPresenter from "./ActiveTimerPresenter";

const ActiveTimerContainer = ({userID}) => {
    console.log(userID);
    return(
        <ActiveTimerPresenter />
        )
}
export default ActiveTimerContainer