import React, {useState, useEffect} from "react";
import PlannerPresenter from "./PlannerPresenter";
import {useDispatch} from "react-redux";
import { connect } from "react-redux";
import { renderCalendar } from "../../hoc/renderCalendar";
import { getCalendar } from "../../_actions/calendar_actions";

const PlannerContainer = ({states}) => {
    const {calendar: {activeD, activeM, activeY}} = states;
    // const active = new Date(activeY, activeM, activeD);
    const [dates, setDates] = useState([]);
    const dispatch = useDispatch();
    const tokenData = document.cookie.split("=")[1];
    // const [planInput, setPlanInput] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [isAdd, setIsAdd] = useState(true);
    const handleModal = (type) => {
        !openModal ? setOpenModal(true) : setOpenModal(false);
        type === "add" ? setIsAdd(true) : setIsAdd(false);
    };    
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
    }, [states])
    return(
        <PlannerPresenter 
            dates={dates}
            activeDate={{activeD,activeM,activeY}}
            handleModal={handleModal}
            isAdd={isAdd}
            openModal={openModal}
            setOpenModal={setOpenModal}
        />
        )
}


function mapStateToProps(state, ownProps){
    return {states : state}
}

export default connect(mapStateToProps, null)(PlannerContainer);