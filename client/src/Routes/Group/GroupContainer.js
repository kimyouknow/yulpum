import React, {useState, useEffect} from "react";
import GroupPresenter from "./GroupPresenter";
import { useDispatch, useSelector } from 'react-redux';
import { createGroup, getMyGroup, searchGroup } from "../../_actions/group_actions";

const GroupContainer = () => {
    const tokenData = document.cookie.split("=")[1];
    const dispatch = useDispatch();
    const {user, group} = useSelector((state) => state);
    const [groupName, setGroupName] = useState("");
    const [groupGoal, setGroupGoal] = useState("")
    const [groupMax, setGroupMax] = useState("")
    const [search, setSearch] = useState("")
    const onSubmitHandler = async(e, type) => {
        e.preventDefault();
        if(type === "create"){
            let body = {
                token: tokenData,
                groupName,
                groupMax,
                groupGoal,
            }
            const server = await dispatch(createGroup(body));
            console.log(server);
        } else {
            let body = {
                search
            }
            const server = await dispatch(searchGroup(body));
            console.log(server);
        }
    }
    const getGroupData = async() => {
        let body = {
            token: tokenData
        }
        const server = await dispatch(getMyGroup(body));
        console.log(server);
    }
    useEffect(() => {
        getGroupData();
    }, [])
    return(
        <GroupPresenter 
        onSubmitHandler={onSubmitHandler}
        inputData={{
            groupName,
            groupGoal,
            groupMax,
            search,
            setGroupName,
            setGroupGoal,
            setGroupMax,
            setSearch,
        }}
        />
        )
}
export default GroupContainer