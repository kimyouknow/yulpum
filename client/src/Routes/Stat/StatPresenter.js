import React from "react";
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import ko from "date-fns/locale/ko";

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales : ko,
})


const ColoredDateCellWrapper = ({ children, value }) =>
    React.cloneElement(React.Children.only(children), {
    style: {
        ...children.style,
        backgroundColor: value < new Date() ? 'lightgreen' : 'lightblue',
    },
})

const StatPresenter = ({events,handleSelect}) => (
    <React.Fragment>
        {!events ? <h1>Loading</h1> : 
                <Calendar
                selectable
                popup
                localizer={localizer}
                events={events}
                views={["month"]}
                style={{ height: 500 }}
                onSelectEvent={event => console.log(event)}
                onSelectSlot={(event) => handleSelect(event)}
                // components={{
                //     dateCellWrapper: ColoredDateCellWrapper,
                // }}
                />
            }
    </React.Fragment>
)
export default StatPresenter