import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import GStudyPresenter from './GStudyPresenter'
import { findGroup } from "../../_actions/group_actions";

const GStudyContainer = () => {
    const tokenData = document.cookie.split("=")[1];
    const {user, group} = useSelector((state) => state);
    const dispatch = useDispatch();
    const getGroupData = async() => {
        let body = {
            token: tokenData
        }
        const server = await dispatch(findGroup(body));
        console.log(server);
    }
    useEffect(() => {      
        getGroupData();
    }, [])
    return (
        <GStudyPresenter 

        />
    )
}

export default GStudyContainer
