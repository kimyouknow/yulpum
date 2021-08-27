import React, {useState, useEffect} from "react";
import GroupPresenter from "./GroupPresenter";
import { useDispatch, useSelector } from 'react-redux';
import { getMyGroup } from "../../_actions/group_actions";

const GroupContainer = () => {
    const tokenData = document.cookie.split("=")[1];
    const dispatch = useDispatch();
    const {user, group} = useSelector((state) => state);
    const [openModal, setOpenModal] = useState(false);
    const [groups, setGroups] = useState(null);
    const handleModal = () => !openModal ? setOpenModal(true) : setOpenModal(false);
    const getGroupData = async() => {
        let body = {
            token: tokenData
        }
        const {payload: {myGroup}} = await dispatch(getMyGroup(body));
        setGroups(myGroup);
    }
    useEffect(() => {
        getGroupData();
    }, [])
    return(
        <GroupPresenter 
            groups={groups}
            handleModal={handleModal}
            openModal={openModal}
            setOpenModal={setOpenModal}
            setGroups={setGroups}
        />
        )
}
export default GroupContainer