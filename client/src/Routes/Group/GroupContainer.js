import React, {useState, useEffect} from "react";
import GroupPresenter from "./GroupPresenter";
import { useDispatch, useSelector } from 'react-redux';
import { getMyGroup } from "../../_actions/group_actions";

const GroupContainer = () => {
    const tokenData = document.cookie.split("=")[1];
    const dispatch = useDispatch();
    const {user, group} = useSelector((state) => state);
    const [openModal, setOpenModal] = useState(false);
    const handleModal = () => !openModal ? setOpenModal(true) : setOpenModal(false);
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
            handleModal={handleModal}
            openModal={openModal}
            setOpenModal={setOpenModal}
        />
        )
}
export default GroupContainer