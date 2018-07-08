import React from "react";
import BigCalendar from 'react-big-calendar'
import moment from "moment";
import CalendarEvent from "./CalendarEvent";

export default function (props) {
    return <BigCalendar
        onNavigate={date => props.setDate(date)}
        date={props.date}
        defaultView="work_week"
        views={['work_week']}
        style={{
            height: '100vh',
        }}
        components={{
            event: CalendarEvent
        }}
        min={new Date(moment().hour(7).minute(0))}
        max={new Date(moment().hour(21).minute(0))}
        events={props.courses}
    />
}