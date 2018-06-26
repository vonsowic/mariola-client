import React from "react";
import BigCalendar from 'react-big-calendar'
import moment from "moment/moment";

export default function (props) {
    const toolbar = () => Toolbar({
        setOnToday: props.setOnToday,
        setOnPrev: props.setOnPrev,
        setOnNext: props.setOnNext,
        start: props.start,
        end: props.end,
    });

    return <BigCalendar
        date={props.start}
        defaultView="work_week"
        views={["work_week"]}
        style={{
            height: "100vh",
        }}
        components = {{toolbar}}
        min={new Date(moment().hour(7).minute(0))}
        max={new Date(moment().hour(21).minute(0))}
        events={props.courses}
    />
}

function Toolbar(props) {
    return (
        <div className='rbc-toolbar'>
            <span className="rbc-btn-group">
              <button type="button" onClick={props.setOnToday}>Dziś</button>
              <button type="button" onClick={props.setOnPrev}>Cofnij</button>
              <button type="button" onClick={props.setOnNext}>Następny</button>
            </span>
            <span className="rbc-toolbar-label">{moment(props.start).format("MMM Do")} - {moment(props.end).format("MMM Do")}</span>
        </div>
    );
}