import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import GStudyPresenter from './GStudyPresenter'
import { findGroup } from "../../_actions/group_actions";

const GStudyContainer = () => {
    const tokenData = document.cookie.split("=")[1];
    const {user, group} = useSelector((state) => state);
    const [founds, setFounds] = useState([]);
    const [activeInfo, setActiveInfo] = useState(null);
    const dispatch = useDispatch();
    const getGroupData = async() => {
        let body = {
            token: tokenData
        }
        const {payload: {foundGroup}} =  await dispatch(findGroup(body));
        setFounds(foundGroup);
    }
    useEffect(() => {      
        getGroupData();
    }, [])
    return (
        <GStudyPresenter 
            founds={founds}
            setFounds={setFounds}
            activeInfo={activeInfo}
            setActiveInfo={setActiveInfo}
        />
    )
}

export default GStudyContainer
