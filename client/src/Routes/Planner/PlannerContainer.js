import React, {useState, useEffect} from "react";
import PlannerPresenter from "./PlannerPresenter";
import { useDispatch, useSelector } from 'react-redux';
import { renderCalendar } from "../../hoc/renderCalendar";
import { getCalendar } from "../../_actions/calendar_actions";

const PlannerContainer = () => {
    const token = document.cookie.split("=")[1];
    const dispatch = useDispatch();
    const {calendar} = useSelector((state) => state);
    const {activeD, activeM, activeY, monthData, refresh} = calendar;
    const [dates, setDates] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const handleModal = () => !openModal ? setOpenModal(true) : setOpenModal(false);
    const renderingCalendar = async() => {
        let body = {
            year: activeY,
            month: activeM,
            token
        }
        const response = await dispatch(getCalendar(body));
        const {isSuccess, } = response.payload;
        if (!isSuccess) {
            alert("Error!");
        }
        const dates = renderCalendar(activeY, activeM);
        setDates(dates);
    }
    useEffect(() => {
        renderingCalendar();
    }, [activeM, activeD, refresh])
    // console.log(monthData)
    return(
        <PlannerPresenter 
            dates={dates}
            activeDate={{activeD,activeM,activeY}}
            monthData={monthData}
            handleModal={handleModal}
            openModal={openModal}
            setOpenModal={setOpenModal}
        />
        )
}

export default PlannerContainer;