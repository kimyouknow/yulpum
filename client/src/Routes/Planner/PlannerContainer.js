import React, {useState, useEffect} from "react";
import PlannerPresenter from "./PlannerPresenter";
import { useDispatch, useSelector } from 'react-redux';
import { renderCalendar } from "../../hoc/renderCalendar";
import { getCalendar } from "../../_actions/calendar_actions";

const PlannerContainer = () => {
    const tokenData = document.cookie.split("=")[1];
    const dispatch = useDispatch();
    const {calendar} = useSelector((state) => state);
    const {activeD, activeM, activeY} = calendar;
    const [dates, setDates] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const handleModal = () => !openModal ? setOpenModal(true) : setOpenModal(false);
    const getServerData = async(body) => {
        const response = await dispatch(getCalendar(body));
        const {isSuccess, ret} = response.payload;
        if (!isSuccess) {
            alert("Error!");
        }
        return ret
    }
    const renderingCalendar = async() => {
        let body = {
            year: activeY,
            month: activeM,
            token: tokenData
        }
        const serverData = await getServerData(body);
        const dates = renderCalendar(activeY, activeM, serverData, "planner");
        setDates(dates);
    }
    useEffect(() => {
        renderingCalendar();
    }, [calendar])
    return(
        <PlannerPresenter 
            dates={dates}
            activeDate={{activeD,activeM,activeY}}
            handleModal={handleModal}
            openModal={openModal}
            setOpenModal={setOpenModal}
        />
        )
}

export default PlannerContainer;