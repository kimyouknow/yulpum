import React, { useEffect, useState } from "react";
import StatPresenter from "./StatPresenter";

const StatContainer = () => {
    const [events, setEvents] = useState([]);
    const initialEvents = [
        {
            id: 0,
            title: 'All Day Event very long title',
            time: 10,
            allDay: true,
            start: new Date(2015, 3, 0),
            end: new Date(2015, 3, 1),
        },
        {
            id: 1,
            title: 'Long Event',
            time: 20,
            start: new Date(2015, 3, 0),
            end: new Date(2015, 3, 1),
        },
        {
            id: 2,
            title: 'SomeDay',
            time: 30,
            start: new Date(),
            end: new Date(),
        }
    ]
    const handleSelect = (event) => {
        console.log(event);
        const {start, end} = event;
        const title = window.prompt('New Event name');
        if (title) {
            setEvents([
                ...events, {
                    id: new Date(),
                    start,
                    end, 
                    title}
            ])
        }
    }
    const getEvents = () => {
        setEvents(initialEvents);
    }
    useEffect(() => {
        getEvents();
    }, [])
    console.log(events)
    return(
        <StatPresenter 
            events={events}
            handleSelect={handleSelect}
        />
        )
}
export default StatContainer